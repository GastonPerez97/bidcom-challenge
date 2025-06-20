import { mockContent, mockImages } from "@/__mocks__/mockBidcomData";
import { mockFetch } from "@/__mocks__/mockFetch";
import { BIDCOM_API_ROUTES } from "@/consts/bidcom-api-routes";
import { getContent } from "@/services/content-service";

describe("contentService", () => {
  it("should fetch both content and images correctly", async () => {
    mockFetch
      .mockResolvedValueOnce({ ok: true, json: async () => mockContent })
      .mockResolvedValueOnce({ ok: true, json: async () => mockImages });

    const result = await getContent();

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(mockFetch).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining(BIDCOM_API_ROUTES.CHALLENGE_INFO),
      expect.any(Object)
    );
    expect(mockFetch).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining(BIDCOM_API_ROUTES.CHALLENGE_IMAGES),
      expect.any(Object)
    );

    expect(result.content).toEqual(mockContent);
    expect(result.images).toEqual(mockImages);
  });

  it("should return null for content if fetch fails", async () => {
    mockFetch
      .mockResolvedValueOnce({ ok: false, status: 500, statusText: "Internal Server Error" })
      .mockResolvedValueOnce({ ok: true, json: async () => mockImages });

    const result = await getContent();

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(result.content).toBeNull();
    expect(result.images).toEqual(mockImages);
  });

  it("should return null for images if fetch fails", async () => {
    mockFetch
      .mockResolvedValueOnce({ ok: true, json: async () => mockContent })
      .mockResolvedValueOnce({ ok: false, status: 500, statusText: "Internal Server Error" });

    const result = await getContent();

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(result.images).toBeNull();
    expect(result.content).toEqual(mockContent);
  });

  it("should return null for content and images if both fetch fails", async () => {
    mockFetch
      .mockResolvedValueOnce({ ok: false, status: 500, statusText: "Internal Server Error" })
      .mockResolvedValueOnce({ ok: false, status: 500, statusText: "Internal Server Error" });

    const result = await getContent();

    expect(mockFetch).toHaveBeenCalledTimes(2);
    expect(result.images).toBeNull();
    expect(result.content).toBeNull();
  });

  it("should return null for content and images if unhandled error happens", async () => {
    mockFetch.mockImplementationOnce(() => {
      throw new Error("Unhandled error");
    });

    const result = await getContent();

    expect(result.images).toBeNull();
    expect(result.content).toBeNull();
  });
});

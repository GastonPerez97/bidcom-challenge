import { HttpMethod, makeRequest } from "@/lib/fetch";

global.fetch = jest.fn();

const mockFetch = fetch as jest.Mock;

describe("makeRequest", () => {
  it("should make a GET request and return JSON response", async () => {
    const mockData = { message: "Success" };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const data = await makeRequest<typeof mockData>("https://api.example.com/data");

    expect(fetch).toHaveBeenCalledWith(
      "https://api.example.com/data",
      expect.objectContaining({
        method: HttpMethod.GET,
        headers: expect.any(Object)
      })
    );
    expect(data).toEqual(mockData);
  });

  it("should throw an error when response is not ok", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      url: "https://api.example.com/data",
      status: 404,
      statusText: "Not Found"
    });

    await expect(makeRequest("https://api.example.com/data")).rejects.toThrow(
      "Error when fetching https://api.example.com/data: 404 Not Found"
    );
  });

  it("should use custom method and headers if provided", async () => {
    const mockData = { created: true };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const result = await makeRequest<typeof mockData>("https://api.example.com/create", {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer token123"
      },
      body: JSON.stringify({ name: "Test" })
    });

    expect(fetch).toHaveBeenCalledWith(
      "https://api.example.com/create",
      expect.objectContaining({
        method: HttpMethod.POST,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer token123"
        },
        body: JSON.stringify({ name: "Test" })
      })
    );

    expect(result).toEqual(mockData);
  });
});

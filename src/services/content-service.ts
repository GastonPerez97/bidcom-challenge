import { ENV } from "@/config/env";
import { BIDCOM_API_ROUTES } from "@/consts/bidcom-api-routes";
import { makeRequest } from "@/lib/fetch";
import { BidcomImage, BidcomInfo } from "@/types/bidcom-api";

export async function getContent() {
  let content: BidcomInfo | null = null;
  let images: BidcomImage[] | null = null;

  try {
    [content, images] = await Promise.all([
      makeRequest<BidcomInfo>(ENV.BIDCOM_API_BASE_URL + "BIDCOM_API_ROUTES.CHALLENGE_INFO").catch(
        (error) => {
          console.error("Failed to fetch Bidcom content:", error);
          return null;
        }
      ),
      makeRequest<BidcomImage[]>(
        ENV.BIDCOM_API_BASE_URL + BIDCOM_API_ROUTES.CHALLENGE_IMAGES
      ).catch((error) => {
        console.error("Failed to fetch Bidcom images:", error);
        return null;
      })
    ]);
  } catch (error) {
    console.error("Error fetching Bidcom content and images:", error);
  } finally {
    return { content, images };
  }
}

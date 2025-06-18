import { ENV } from "@/config/env";
import { BIDCOM_API_ROUTES } from "@/consts/bidcom-api-routes";
import { makeRequest } from "@/lib/fetch";
import { BidcomImage, BidcomInfo } from "@/types/bidcom-api";

export async function getContent() {
  const [content, images] = await Promise.all([
    makeRequest<BidcomInfo>(ENV.BIDCOM_API_BASE_URL + BIDCOM_API_ROUTES.CHALLENGE_INFO),
    makeRequest<BidcomImage[]>(ENV.BIDCOM_API_BASE_URL + BIDCOM_API_ROUTES.CHALLENGE_IMAGES)
  ]);

  return { content, images };
}

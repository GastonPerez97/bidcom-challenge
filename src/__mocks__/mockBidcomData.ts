import { BidcomImage, BidcomInfo } from "@/types/bidcom-api";

export const mockContent: BidcomInfo = {
  headline: "Mocked Headline",
  title: "Mocked Title",
  description: "Mocked description",
  button: {
    title: "Mocked Button Title",
    link: "Mocked Button Link"
  }
};

export const mockImages: BidcomImage[] = [
  { image: "https://example.com/image1.jpg" },
  { image: "https://example.com/image2.jpg" }
];

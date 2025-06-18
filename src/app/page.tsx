import Hero from "@/components/hero";
import { getContent } from "@/services/content-service";

export default async function Home() {
  const { content, images } = await getContent();

  return (
    <main>
      <Hero content={content} images={images} />
    </main>
  );
}

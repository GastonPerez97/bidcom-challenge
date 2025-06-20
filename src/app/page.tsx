import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { getContent } from "@/services/content-service";

export default async function Home() {
  const { content, images } = await getContent();

  return (
    <main>
      <Hero content={content} images={images} />
      <Services />
      <Contact />
    </main>
  );
}

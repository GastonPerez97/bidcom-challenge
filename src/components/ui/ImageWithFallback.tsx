import Image, { ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc: ImageProps["src"];
  fallbackAlt?: ImageProps["alt"];
};

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  fallbackAlt,
  ...rest
}: ImageWithFallbackProps) {
  const [imageSrc, setImageSrc] = useState<ImageProps["src"]>(src);
  const [imageAlt, setImageAlt] = useState<ImageProps["alt"]>(alt);

  function handleFallback() {
    setImageSrc(fallbackSrc);
    if (fallbackAlt) setImageAlt(fallbackAlt);
  }

  return <Image {...rest} alt={imageAlt} src={imageSrc} onError={handleFallback} />;
}

import parse from "html-react-parser";

import CallToAction from "@/components/ui/CallToAction";
import useDeviceScreen from "@/hooks/use-device-screen";
import { replaceDoubleHyphenWithEmDash } from "@/lib/strings";
import { BidcomInfo } from "@/types/bidcom-api";

type HeroContentProps = {
  content: BidcomInfo;
};

export default function HeroContent({ content }: HeroContentProps) {
  const { isDesktopScreen } = useDeviceScreen();
  const headlineText = replaceDoubleHyphenWithEmDash(content.headline);

  return (
    <div className="flex flex-col items-center justify-center gap-y-6 lg:w-[590px] lg:items-start">
      <p className="-mb-4 text-sm tracking-[.25em]">{headlineText}</p>

      <h1 className="text-center text-3xl text-balance lg:text-start lg:text-5xl">
        {parse(content.title)}
      </h1>

      <h2 className="text-center lg:text-start">{content.description}</h2>

      {isDesktopScreen && <CallToAction href={content.button.link} text={content.button.title} />}
    </div>
  );
}

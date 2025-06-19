"use client";

import useMediaQuery from "@/hooks/use-media-query";

const useDeviceScreen = () => {
  const isMobileScreen = useMediaQuery("(max-width: 767px)");
  const isTabletScreen = useMediaQuery("(max-width: 1023px)");
  const isDesktopScreen = useMediaQuery("(min-width: 1024px)");

  return { isMobileScreen, isTabletScreen, isDesktopScreen };
};

export default useDeviceScreen;

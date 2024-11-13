import React, { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scrollTopPercent, setScrollTopPercent] = useState(0);
  console.log(scrollTopPercent);

  useEffect(() => {
    const handleScroll = () =>
      setScrollTopPercent(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="tw-sticky tw-top-0 tw-left-0 tw-right-0 tw-z-10 tw-h-2 tw-bg-black">
        <div
          className="tw-h-full tw-bg-indigo-400"
          style={{ width: `${scrollTopPercent}%` }}
        ></div>
      </div>
    </>
  );
};

export default ScrollIndicator;

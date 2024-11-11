"use client";

import dynamic from "next/dynamic";

const YakIconDynamic = dynamic(() => import("@/components/yakIcon"), {
  ssr: false,
});

export const YakLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
      }}
    >
      <div
        style={{
          minWidth: "20px",
        }}
      >
        <YakIconDynamic />
      </div>
      Yak
    </div>
  );
};

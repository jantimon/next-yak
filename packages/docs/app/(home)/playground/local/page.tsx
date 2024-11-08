"use client";

import dynamic from "next/dynamic";

const DynamicEditor = dynamic(() => import("../../../../components/editor"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return <DynamicEditor />;
}

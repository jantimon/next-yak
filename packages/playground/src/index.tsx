import React, { lazy, Suspense, useEffect, useState } from "react";
const PlaygroundLazy = lazy(() => import("./Playground"));

export const Playground: React.FC = () => {
  const isMounted = useIsMounted();
  if (!isMounted) {
    return null;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isMounted && <PlaygroundLazy />}
    </Suspense>
  );
};

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);
  return isMounted;
};

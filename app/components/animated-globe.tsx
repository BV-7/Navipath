"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function HeroGlobe() {
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const parentWidth = containerRef.current.offsetWidth;
      const boundedWidth = Math.min(Math.max(parentWidth * 0.8, 480), 550);

      setSize({ width: boundedWidth, height: boundedWidth });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 2;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex justify-center items-center py-10 overflow-hidden"
      style={{position:'relative',left:'5.8vw', margin:'0 0 0 0'}}
    >
        <Globe
          ref={globeEl}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        />
    </div>
  );
}

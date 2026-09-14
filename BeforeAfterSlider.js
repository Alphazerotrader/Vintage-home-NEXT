"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({ beforeSrc, afterSrc, alt }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative select-none">
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-line">
        <Image
          src={afterSrc}
          alt={`${alt} — after restoration`}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative h-full" style={{ width: "100vw", maxWidth: "1000px" }}>
            <Image
              src={beforeSrc}
              alt={`${alt} — before restoration`}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-parchment2"
          style={{ left: `${position}%` }}
        />

        <span className="pointer-events-none absolute left-4 top-4 bg-ink/80 px-2 py-1 font-body text-xs tracking-wide text-parchment">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 bg-brick/85 px-2 py-1 font-body text-xs tracking-wide text-parchment">
          After
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Reveal before and after image comparison"
        className="slider-thumb mt-4 w-full cursor-ew-resize appearance-none bg-transparent"
        style={{ accentColor: "#7A3527" }}
      />
    </div>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

export type UnitPhoto = {
  src: string;
  caption: string;
  width: number;
  height: number;
};

type UnitSlideshowProps = {
  photos: readonly UnitPhoto[];
  unitLabel: string;
  /** First slide uses next/image priority (use for the first slideshow on the page). */
  priorityFirstSlide?: boolean;
};

export function UnitSlideshow({ photos, unitLabel, priorityFirstSlide }: UnitSlideshowProps) {
  const [index, setIndex] = useState(0);
  const count = photos.length;
  const current = photos[index];

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + count) % count);
    },
    [count]
  );

  const label = `${unitLabel} photo tour`;

  return (
    <div
      className="unit-slideshow mt-5 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--earth-sand)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(7,9,13,0.9)] rounded-2xl"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        }
      }}
    >
      <figure className="m-0">
        <div className="unit-slideshow-frame flex min-h-[220px] items-center justify-center rounded-2xl bg-black/25 p-2 sm:min-h-[280px] md:min-h-[340px]">
          <div key={current.src} className="unit-slideshow-slide flex max-h-[min(70vh,560px)] w-full items-center justify-center">
            <Image
              className="unit-gallery-image max-h-[min(70vh,560px)] w-auto max-w-full object-contain"
              src={current.src}
              alt={`${current.caption} — ${unitLabel}`}
              width={current.width}
              height={current.height}
              sizes="(max-width: 768px) 100vw, min(896px, 90vw)"
              priority={Boolean(priorityFirstSlide && index === 0)}
            />
          </div>
        </div>
        <figcaption className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 text-sm text-[color:var(--earth-sand)]/90">{current.caption}</p>
          <p className="m-0 text-xs tabular-nums text-[color:var(--earth-sand)]/70">
            {index + 1} / {count}
          </p>
        </figcaption>
      </figure>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          className="island-btn min-w-[2.75rem] px-3 py-2 text-lg leading-none"
          onClick={() => go(-1)}
          aria-label="Previous photo"
        >
          ‹
        </button>

        <div className="flex flex-wrap justify-center gap-2" aria-label="Choose a photo">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Photo ${i + 1} of ${count}: ${photo.caption}`}
              aria-current={i === index ? "true" : undefined}
              className={
                i === index
                  ? "h-2.5 w-2.5 rounded-full bg-[color:var(--earth-sand)] shadow-[0_0_12px_rgba(203,180,138,0.35)]"
                  : "h-2.5 w-2.5 rounded-full bg-[color:var(--earth-sand)]/35 transition hover:bg-[color:var(--earth-sand)]/55"
              }
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className="island-btn min-w-[2.75rem] px-3 py-2 text-lg leading-none"
          onClick={() => go(1)}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {index + 1} of {count}: {current.caption}
      </p>
    </div>
  );
}

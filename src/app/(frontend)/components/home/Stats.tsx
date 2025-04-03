'use client';

import { Page } from '@/payload-types';
import Link from 'next/link';
// File path: src/components/home/Stats.tsx
import { useEffect, useState, useRef, useMemo } from 'react';
import SanitizedText from '../common/SanitizedText';

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export const Stats = ({ block }: { block: Page['layout'][0]}) => {
  const stats: Stat[] = useMemo(
    () => 'stats' in block ? block.stats?.map(s => ({ label: s.label, value: s.value, suffix: s.suffix })) ?? [] : [],
    [block]
  );
  
  // Create a ref for the section
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Create a state for animated values
  const [animatedValues, setAnimatedValues] = useState<number[]>(
    stats.map(() => 0)
  );

  // Animate the numbers when they come into view
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Observer callback
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        // Start the animation when the section is in view
        stats.forEach((stat, index) => {
          const duration = 1500; // Animation duration in ms
          const frameDuration = 1000 / 60; // 60 fps
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const animate = () => {
            frame++;
            const progress = frame / totalFrames;
            const currentValue = Math.floor(progress * stat.value);

            setAnimatedValues((prev) => {
              const newValues = [...prev];
              newValues[index] = Math.min(currentValue, stat.value);
              return newValues;
            });

            if (frame < totalFrames) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        });
      }
    };

    // Create IntersectionObserver
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      threshold: 0.2,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [stats]);

  return (
    <section
      ref={sectionRef}
      className="w-full md:min-h-[50.625rem] xl:min-h-[50.625rem] aspect-[1280/652] bg-white bg-[url(/images/stats-bg.svg)] bg-cover bg-right-bottom"
    >
      <div className="container mx-auto py-18">
        <div className="w-full max-w-[55%] flex flex-col gap-20">
          <div className="w-full flex flex-col gap-18">
            <div className="w-full flex flex-col gap-12">
              <h2 className="text-black text-5xl font-bold mb-4">
                {'heading' in block ? block.heading : ''}
              </h2>
              <p className="text-xl text-gray-700">
                {'details' in block ? <SanitizedText text={block.details} /> : ''}
              </p>
            </div>
            <div className="flex flex-row gap-18">
              {stats?.map((stat, index) => (
                <div key={index} className="">
                  <div className="text-black text-4xl md:text-7xl font-bold text-black mb-2">
                    {animatedValues[index]}
                    {stat.suffix}
                  </div>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Link
              href="/contact"
              className="border border-black text-black hover:bg-black/10 px-4 py-2 rounded-md transition"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import { Page } from '@/payload-types';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import SanitizedText from '../common/SanitizedText';

export const Hero = ({ block }: { block: Page['layout'][0]}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const spiralRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLDivElement>(null);
  const taglineTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation after component mounts
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (spiralRef.current) {
      spiralRef.current.style.transform = `translate3d(${scrollY * 0.2}px, -${scrollY * 0.4}px, 0)`;
    }

    if (logoTextRef.current) {
      logoTextRef.current.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
    }

    if (taglineTextRef.current) {
      taglineTextRef.current.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
    }
  }, [scrollY]);

  return (
    <section className="relative mx-auto relative h-fit min-h-[50.75rem] flex flex-col overflow-hidden bg-[url(/images/polka-bg.png)] bg-purple bg-cover bg-center">
      <div className='container flex flex-col mx-auto'>
        <div className="flex flex-col justify-center items-center gap-4 mt-40">
          <h1
            ref={logoTextRef}
            className="relative font-sans text-2xl -tracking-[0.03em] bg-linear-[91.79deg] gradient-hero-logo text-transparent bg-clip-text"
          >
            {'heading' in block ? block.heading : ''}
          </h1>
          <h2
            ref={taglineTextRef}
            className="relative text-center font-display font-semibold text-[5rem] leading-[5.5rem] -tracking-[0.025em] bg-linear-[263.81deg] gradient-hero-tag text-transparent bg-clip-text"
          >
            {'tagline' in block ? <SanitizedText text={block.tagline} /> : null}
          </h2>
        </div>
        <div
          ref={spiralRef}
          className="absolute w-[28%] aspect-[3282/368] left-1/2 bottom-[50px] transform -rotate-[30deg] -translate-x-1/2 z-10"
        >
          <div className="relative">
          {'image' in block && typeof block.image === 'object' && block.image.url && (
            <Image 
              src={block.image.url} 
              alt={block.image.alt} 
              width={328 * 4}
              height={368 * 4}
              className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              priority 
            />
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

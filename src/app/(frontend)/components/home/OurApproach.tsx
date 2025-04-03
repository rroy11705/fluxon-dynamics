'use client'
import { Page } from '@/payload-types';
import React, { Fragment, useEffect, useMemo } from 'react'

const OurApproach = ({ block }: { block: Page['layout'][0]}) => {
  const OurApproachText = useMemo(() => ('details' in block && block.details ? block.details.split(' ') : []), [block]);

  useEffect(() => {
    const threshold = screen.height / 2;

    const handleScroll = () => {
      const scrollPosition = window.scrollY; 
      const OurApproachEle = document.getElementById('our-approach');
      const spans = document.querySelectorAll('#our-approach p span'); // Select spans inside the handleScroll function

      if (scrollPosition > (OurApproachEle?.offsetTop || 0) - threshold) {
        const elementHeightPerSpan = ((OurApproachEle?.clientHeight || 0) / OurApproachText.length);
        spans.forEach((span, index) => {
          if (scrollPosition > (OurApproachEle?.offsetTop || 0) + (elementHeightPerSpan * (index + 1)) - threshold) {
            span.classList.remove('text-purple-deep-muted'); 
            span.classList.add('bg-clip-text'); 
          } else {
            span.classList.add('text-purple-deep-muted'); 
            span.classList.remove('bg-clip-text'); 
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [OurApproachText.length]);

  return (
    <section id='our-approach' className='bg-purple-deep'>
        <div className='max-w-[48.125rem] mx-auto pt-[15.625rem] pb-[12.5rem]'>
            <p className='font-display font-medium text-7xl bg-linear-[180deg] gradient-our-approach text-transparent bg-clip-text pb-2'>
                {OurApproachText
                  .map((word, index) => 
                    word === '\\n' ? 
                      <Fragment key={`line-1-${word}-${index}`}>
                        <br /><br />
                      </Fragment> :
                      <span key={`line-1-${word}-${index}`} className='text-purple-deep-muted'>
                        {word}{' '}
                      </span>
                  )}
            </p>
        </div>
    </section>
  )
}

export default OurApproach

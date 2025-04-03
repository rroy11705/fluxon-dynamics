import { Page } from '@/payload-types';
import Image from 'next/image';
import React from 'react'
import SanitizedText from '../common/SanitizedText';

const Collaboration = ({ block }: { block: Page['layout'][0]}) => {
  return (
    <section className="w-full bg-white py-18">
      <div className='container mx-auto flex flex-col'>
        <div className='flex flex-row'>ș
          <h2 className='font-display font-semibold text-4xl text-left text-black mb-12'>
            {'heading' in block ? <SanitizedText text={block.heading} /> : ''}
          </h2>
        </div>
        <div className='flex flex-col xl:flex-row gap-12'>
          {'image' in block && block.image && typeof block.image === 'object' && block.image.url && block.image.width && block.image.height &&
            <Image 
              src={block.image.url}
              alt={block.image.alt}
              width={block.image.width}
              height={block.image.height}
            />
          }
          <p className='text-black font-medium'>
            {'details' in block ? <SanitizedText text={block.details} /> : ''}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Collaboration;
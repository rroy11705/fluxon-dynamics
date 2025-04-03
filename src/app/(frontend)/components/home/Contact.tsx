import { Page } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Contact = ({ block }: { block: Page['layout'][0]}) => {
  return (
    <section className="relative h-fit flex overflow-hidden flex-col bg-purple bg-cover bg-center pt-18">
      <div className="container mx-auto grid grid-cols-2 w-full">
        <div className="flex flex-col justify-between items-start w-full h-full pb-18">
          <div>
            <h1 className="font-display text-4xl font-semibold text-white mb-12">
              {'heading' in block ? block.heading : ''}
            </h1>
            <p className="max-w-[32rem] text-secondary-100">
            {'details' in block ? block.details : ''}
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-6 w-1/2">
            {'contactDetails' in block && block.contactDetails?.map((contact) => 
              <Link
                key={contact.id}
                href={contact.link}
                target="_blank"
                className="flex flex-row items-start justify-start gap-4 w-full"
              >
                {contact.icon && typeof contact.icon === 'object' && contact.icon.url && 
                <Image
                  src={contact.icon.url}
                  alt="call"
                  width={24}
                  height={24}
                  priority
                />}
                {contact.value}
            </Link>
            )}
          </div>
        </div>
        <div className='relative'>
          {'image' in block && typeof block.image === 'object' && block.image.url && block.image.width && block.image.height && 
            <Image
              src={block.image.url}
              alt="Mail Box"
              className="pt-6 ml-auto relative z-10"
              width={block.image.width}
              height={block.image.height}
              priority
            />
          }
					<div className='contact-ellipse' />
        </div>
      </div>
    </section>
  );
};

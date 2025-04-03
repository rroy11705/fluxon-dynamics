import { CollaborationBlock } from '@/blocks/CollaborationBlock'
import { ContactBlock } from '@/blocks/ContactBlock'
import { HeroBlock } from '@/blocks/HeroBlock'
import { HowWeWorkBlock } from '@/blocks/HowWeWorkBlock'
import { ServicesBlock } from '@/blocks/ServicesBlock'
import { StatsBlock } from '@/blocks/StatsBlock'
import { WhatWeDoBlock } from '@/blocks/WhatWeDoBlock'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
		{
      name: 'slug',
      type: 'text',
      required: true,
    },
		{
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [HeroBlock, StatsBlock, HowWeWorkBlock, WhatWeDoBlock, ServicesBlock, ContactBlock, CollaborationBlock],
    },
  ],
}

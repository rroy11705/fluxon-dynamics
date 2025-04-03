/**
 * @fileoverview WhatWeDo block configuration for Payload CMS
 * @module WhatWeDoBlock
 */

import { Block } from 'payload'

export const WhatWeDoBlock: Block = {
  slug: 'what-we-do',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      required: true,
    },
    {
      name: 'audio',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
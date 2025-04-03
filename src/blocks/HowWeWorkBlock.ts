/**
 * @fileoverview HowWeWork block configuration for Payload CMS
 * @module HowWeWorkBlock
 */

import { Block } from 'payload'

export const HowWeWorkBlock: Block = {
  slug: 'how-we-work',
  fields: [
    {
      name: 'details',
      type: 'text',
      required: true,
    },
  ],
}
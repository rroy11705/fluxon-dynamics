/**
 * @fileoverview Services block configuration for Payload CMS
 * @module ServicesBlock
 */

import { Block } from 'payload'
import { CardBlock } from './CardBlock'

export const ServicesBlock: Block = {
  slug: 'services',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'cards',
      type: 'blocks',
      blocks: [CardBlock],
    },
  ],
}
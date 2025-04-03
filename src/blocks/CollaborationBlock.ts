/**
 * @fileoverview Collaboration block configuration for Payload CMS
 * @module CollaborationBlock
 */

import { Block } from 'payload'

export const CollaborationBlock: Block = {
  slug: 'collaboration',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'details',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
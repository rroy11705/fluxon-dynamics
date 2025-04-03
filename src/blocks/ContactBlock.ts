/**
 * @fileoverview Contact block configuration for Payload CMS
 * @module ContactBlock
 */

import { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contact',
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
			name: 'contactDetails',
			type: 'blocks',
			blocks: [
				{
					slug: 'contact-detail',
					fields: [
						{
							name: 'label',
							type: 'text',
							required: true,
						},
						{
							name: 'icon',
							type: 'upload',
							relationTo: 'media',
							required: true,
						},
						{
							name: 'link',
							type: 'text',
							required: true,
						},
						{
							name: 'value',
							type: 'text',
							required: true,
						},
					],
				},
			],
		},
		{
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
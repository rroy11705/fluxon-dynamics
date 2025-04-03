/**
 * @fileoverview Stats block configuration for Payload CMS
 * @module StatsBlock
 */

import { Block } from 'payload'

export const StatsBlock: Block = {
  slug: 'stats',
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
      name: 'stats',
      type: 'blocks',
      blocks: [
				{
					slug: 'stat',
					fields: [
						{
							name: 'label',
							type: 'text',
							required: true,
						},
						{
							name: 'value',
							type: 'number',
							required: true,
						},
						{
							name: 'suffix',
							type: 'text',
							defaultValue: "+",
							required: true,
						},
					],
				},
			],
    },
  ],
}
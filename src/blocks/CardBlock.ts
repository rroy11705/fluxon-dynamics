/**
 * @fileoverview Card block configuration for Payload CMS
 * @module CardBlock
 */

import { Block } from 'payload'

export const CardBlock: Block = {
	slug: 'card',
	fields: [
		{
			name: 'header',
			type: 'text',
			required: true,
		},
		{
			name: 'subheader',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			type: 'text',
			maxLength: 240,
			required: true,
		},
		{
			name: 'showActionButton',
			type: 'checkbox',
			defaultValue: false,
		},
		{
			name: 'actionButtonLink',
			type: 'text',
			admin: {
				condition: (_, _1, { blockData }) => blockData.showActionButton,
			},
		},
		{
			name: 'actionButtonText',
			type: 'text',
			admin: {
				condition: (_, _1, { blockData }) => blockData.showActionButton,
			},
		},
	],
}
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import { Page } from '@/payload-types'
import { Hero } from './components/home/Hero'
import { Stats } from './components/home/Stats'
import OurApproach from './components/home/OurApproach'
import WhatWeDo from './components/home/WhatWeDo'
import { Services } from './components/home/Services'
import { Contact } from './components/home/Contact'
import Collaboration from './components/home/Collaboration'

/**
 * Renders a block based on its type from the page layout
 *
 * @param {Page['layout'][0]} block - The block configuration from the page layout
 * @returns {JSX.Element | null} The rendered block component or null if type not recognized
 */
const renderBlock = (block: Page['layout'][0]) => {
  switch (block.blockType) {
    case 'hero':
      return <Hero block={block} key={block.id} />
    case 'stats':
      return <Stats block={block} key={block.id} />
    case 'how-we-work':
      return <OurApproach block={block} key={block.id} />
    case 'what-we-do':
      return <WhatWeDo block={block} key={block.id} />
    case 'services':
      return <Services block={block} key={block.id} />
    case 'contact':
      return <Contact block={block} key={block.id} />
    case 'collaboration':
      return <Collaboration block={block} key={block.id} />
    default:
      return null
  }
}

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
  })

  return (
    <div>
      <div className="page">{page.layout?.map((block) => renderBlock(block))}</div>
    </div>
  )
}

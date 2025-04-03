// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // Add your own logo and icon here
    components: {
      graphics: {
        Icon: './graphics/Icon/index.tsx#Icon',
        Logo: './graphics/Logo/index.tsx#Logo',
      },
    },
    // Add your own meta data here
    meta: {
      description: 'Fluxon Dynamics is a tech consultancy specializing in digital transformation, artificial intelligence, and adaptive automation.',
      icons: [
        {
          type: 'image/png',
          rel: 'icon',
          url: '/favicon.svg',
        },
      ],
      openGraph: {
        description: 'Fluxon Dynamics is a tech consultancy specializing in digital transformation, artificial intelligence, and adaptive automation.',
        images: [
          {
            height: 600,
            url: '/assets/ogImage.png',
            width: 800,
          },
        ],
        title: 'Fluxon Dynamics | Digital Transformation Specialists',
      },
      titleSuffix: '- Fluxon Dynamics | Digital Transformation Specialists',
    },
  },
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})

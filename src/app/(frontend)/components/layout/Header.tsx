// File path: src/components/layout/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  // TODO: Fetch global settings for logo and navigation items

  return (
    <div className="absolute bg-black top-0 left-0 right-0 z-50">
      <header className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="{f/d}" width={95} height={52} priority />
        </Link>

        <Navigation
          items={[
            { label: 'About', href: '/about' },
            {
              label: 'Services',
              href: '/services',
            },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ]}
        />

        <MobileMenu
          // TODO: Add MobileMenu props
          items={[
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ]}
        />
        <Link
          href="/contact"
          className="border border-white text-white hover:bg-white/10 px-4 py-2 rounded-md transition"
        >
          Let&apos;s Talk
        </Link>
      </header>
    </div>
  );
};

// File path: src/components/layout/Footer.tsx
import Link from 'next/link';
import { SocialLinks } from '../common/SocialLinks';

export const Footer = () => {
  // TODO: Fetch global settings for footer content

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              {/* TODO: Replace with actual logo from CMS */}
              <div className="h-10 w-40 bg-gray-200">Logo Placeholder</div>
            </Link>
            <p className="text-gray-400">
              {/* TODO: Footer text from CMS */}
              Fluxon Dynamics specializes in digital transformation, AI, and
              automation services.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {/* TODO: Generate links dynamically */}
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-500 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary-500 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary-500 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {/* TODO: Generate service links dynamically from CMS */}
              <li>
                <Link
                  href="/services/digital-transformation"
                  className="hover:text-primary-500 transition"
                >
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/artificial-intelligence"
                  className="hover:text-primary-500 transition"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/services/adaptive-automation"
                  className="hover:text-primary-500 transition"
                >
                  Adaptive Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            {/* TODO: Contact info from CMS */}
            <p className="mb-2">email@example.com</p>
            <p className="mb-4">(123) 456-7890</p>
            <SocialLinks
              // TODO: Add SocialLinks props from CMS
              links={[
                { platform: 'LinkedIn', url: '#' },
                { platform: 'Twitter', url: '#' },
                { platform: 'GitHub', url: '#' },
              ]}
            />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Fluxon Dynamics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

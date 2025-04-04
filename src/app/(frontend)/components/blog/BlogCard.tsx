// File path: src/components/blog/BlogCard.tsx
import Link from 'next/link';
import { formatDate } from '@/lib/formatDate';

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  publishedDate: string;
  author: {
    name: string;
    avatar?: string;
  };
  featuredImage?: string;
  categories: Array<{
    name: string;
    slug: string;
  }>;
};

export const BlogCard = ({
  title,
  slug,
  excerpt,
  publishedDate,
  author,
  featuredImage,
  categories,
}: BlogCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      {featuredImage && (
        <Link
          href={`/blog/${slug}`}
          className="block aspect-video relative overflow-hidden"
        >
          {/* TODO: Replace with actual featured image from CMS */}
          <div className="w-full h-48 bg-gray-200">
            Featured Image Placeholder
          </div>
        </Link>
      )}

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog?category=${category.slug}`}
              className="text-xs font-medium px-2 py-1 bg-primary-100 text-primary-700 rounded"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-primary-500 transition">
            {title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-4">{excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {author.avatar ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                {/* TODO: Replace with actual author avatar */}
                <span>Avatar</span>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mr-3">
                {author.name.charAt(0)}
              </div>
            )}
            <span className="text-sm text-gray-700">{author.name}</span>
          </div>

          <span className="text-sm text-gray-500">
            {formatDate(publishedDate)}
          </span>
        </div>
      </div>
    </article>
  );
};

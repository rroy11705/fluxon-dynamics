import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  slug: string;
  description: string;
  icon?: string;
  // Add more props as needed
};

export const ServiceCard = ({
  title,
  slug,
  description,
  icon,
}: ServiceCardProps) => {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
    >
      {icon && (
        <div className="mb-4">
          {/* TODO: Replace with actual icon from CMS */}
          <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-500">Icon</span>
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

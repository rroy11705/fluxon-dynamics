// File path: src/components/common/CallToAction.tsx
import Link from 'next/link';

type CallToActionProps = {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundStyle?: 'primary' | 'secondary' | 'light';
};

export const CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundStyle = 'primary',
}: CallToActionProps) => {
  const getBgStyles = () => {
    switch (backgroundStyle) {
      case 'primary':
        return 'bg-primary-600 text-white';
      case 'secondary':
        return 'bg-secondary-900 text-white';
      case 'light':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-primary-600 text-white';
    }
  };

  const getPrimaryButtonStyles = () => {
    switch (backgroundStyle) {
      case 'primary':
        return 'bg-white text-primary-600 hover:bg-gray-100';
      case 'secondary':
        return 'bg-primary-600 text-white hover:bg-primary-700';
      case 'light':
        return 'bg-primary-600 text-white hover:bg-primary-700';
      default:
        return 'bg-white text-primary-600 hover:bg-gray-100';
    }
  };

  const getSecondaryButtonStyles = () => {
    switch (backgroundStyle) {
      case 'primary':
        return 'border-2 border-white text-white hover:bg-white/10';
      case 'secondary':
        return 'border-2 border-white text-white hover:bg-white/10';
      case 'light':
        return 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50';
      default:
        return 'border-2 border-white text-white hover:bg-white/10';
    }
  };

  return (
    <section className={`py-20 ${getBgStyles()}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={buttonLink}
            className={`font-bold py-3 px-8 rounded-md transition ${getPrimaryButtonStyles()}`}
          >
            {buttonText}
          </Link>

          {secondaryButtonText && secondaryButtonLink && (
            <Link
              href={secondaryButtonLink}
              className={`font-bold py-3 px-8 rounded-md transition ${getSecondaryButtonStyles()}`}
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

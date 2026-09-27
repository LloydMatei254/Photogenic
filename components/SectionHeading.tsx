interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  align = 'left' 
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-warm-gray text-lg md:text-xl max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { stories } from '@/data/stories';

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  const currentIndex = stories.findIndex((s) => s.id === story.id);
  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const nextStory = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <Link 
              href="/stories"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider mb-6 hover:text-warm-gray transition-colors"
            >
              <ArrowLeft size={16} />
              All Stories
            </Link>
            
            <p className="text-xs uppercase tracking-widest text-warm-gray mb-4">
              {story.category}
            </p>
            
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              {story.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-warm-gray">
              <span>{story.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {story.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-warm-gray leading-relaxed mb-8">
              {story.description}
            </p>

            {/* Sample Content - Replace with actual article content */}
            <div className="space-y-6 text-warm-gray/90 leading-relaxed">
              <p>
                Photography has always been more than just pressing a button. It&apos;s about seeing—really seeing—and being present in the moment you&apos;re trying to capture.
              </p>

              <p>
                When I first started, I was focused on the technical side: settings, composition rules, equipment. But over time, I realized that the most meaningful photographs come from connection, observation, and patience.
              </p>

              <h2 className="text-3xl font-serif text-white mt-12 mb-6">
                Learning to See Light
              </h2>

              <p>
                Light is everything in photography. It shapes mood, reveals texture, and transforms ordinary scenes into something worth remembering. Learning to work with natural light—especially during golden hour—changed the way I approach every shoot.
              </p>

              <p>
                But it&apos;s not just about perfect light. Sometimes the most interesting photographs happen in challenging conditions: harsh midday sun, deep shadows, overcast skies. These moments teach you to adapt and see potential where others might not.
              </p>

              <h2 className="text-3xl font-serif text-white mt-12 mb-6">
                The Power of Patience
              </h2>

              <p>
                Great photography requires patience. Waiting for the right moment, the right expression, the right alignment of elements. Street photography taught me this lesson more than anything else.
              </p>

              <p>
                You can&apos;t force a good photograph. You have to observe, anticipate, and be ready when the moment arrives. Sometimes that means waiting. Sometimes it means returning to the same location multiple times.
              </p>

              <h2 className="text-3xl font-serif text-white mt-12 mb-6">
                Moving Forward
              </h2>

              <p>
                Photography is a continuous journey. Every shoot is a chance to learn something new, experiment with a different approach, or challenge yourself to see differently.
              </p>

              <p>
                I&apos;m still learning, still growing, and still excited about what comes next. And that&apos;s exactly where I want to be.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Navigation to Other Stories */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevStory && (
              <Link
                href={`/stories/${prevStory.slug}`}
                className="group p-8 border border-white/10 hover:border-white/30 transition-colors"
              >
                <p className="text-xs uppercase tracking-widest text-warm-gray mb-2">
                  Previous Story
                </p>
                <h3 className="text-2xl font-serif group-hover:text-warm-gray transition-colors">
                  {prevStory.title}
                </h3>
              </Link>
            )}

            {nextStory && (
              <Link
                href={`/stories/${nextStory.slug}`}
                className="group p-8 border border-white/10 hover:border-white/30 transition-colors md:text-right"
              >
                <p className="text-xs uppercase tracking-widest text-warm-gray mb-2">
                  Next Story
                </p>
                <h3 className="text-2xl font-serif group-hover:text-warm-gray transition-colors">
                  {nextStory.title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

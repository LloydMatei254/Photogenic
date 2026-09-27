import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { stories } from '@/data/stories';

export const metadata: Metadata = {
  title: 'Stories | Lloyd Matsi Photography',
  description: 'Thoughts on photography, storytelling, and the creative process.',
};

export default function StoriesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Stories</h1>
          <p className="text-xl md:text-2xl text-warm-gray">
            Thoughts on photography, moments and creative work
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {stories.map((story) => (
              <article key={story.id} className="group">
                <Link href={`/stories/${story.slug}`}>
                  <div className="relative h-96 mb-6 overflow-hidden">
                    <Image
                      src={story.coverImage}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-widest text-warm-gray">
                      {story.category} • {story.readTime}
                    </p>
                    
                    <h2 className="text-2xl md:text-3xl font-serif group-hover:text-warm-gray transition-colors">
                      {story.title}
                    </h2>
                    
                    <p className="text-warm-gray leading-relaxed">
                      {story.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-sm text-warm-gray">{story.date}</p>
                      <span className="text-sm uppercase tracking-wider group-hover:text-warm-gray transition-colors">
                        Read Story →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Stay updated with new stories
          </h2>
          <p className="text-warm-gray mb-8">
            Follow along as I document my photography journey, share lessons learned, and tell the stories behind the images.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 border border-white/30 hover:border-white/60 text-sm uppercase tracking-wider transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

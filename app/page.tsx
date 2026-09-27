'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { photographs } from '@/data/photographs';
import { categories } from '@/data/categories';
import { stories } from '@/data/stories';
import PhotoCard from '@/components/PhotoCard';
import PhotoLightbox from '@/components/PhotoLightbox';

export default function HomePage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const featuredPhotos = photographs.filter((p) => p.featured);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80"
          alt="Photography hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 animate-fade-in">
            CAPTURING PEOPLE,
            <br />
            PLACES & MOMENTS
          </h1>
          <p className="text-lg md:text-xl text-warm-gray mb-8 animate-slide-up">
            Photography focused on portraiture, stories, places and the moments that make them meaningful.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-warm-gray" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-8">
            Photography is my way of slowing down, observing the world and turning ordinary moments into stories.
          </p>
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-warm-gray transition-colors uppercase tracking-wider text-sm font-medium"
          >
            Discover My Work
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Featured Work</h2>
              <p className="text-warm-gray">Selected photographs from recent projects</p>
            </div>
            <Link 
              href="/portfolio"
              className="hidden md:block text-sm uppercase tracking-wider hover:text-warm-gray transition-colors"
            >
              View all →
            </Link>
          </div>

          {/* Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPhotos.slice(0, 5).map((photo, index) => (
              <div
                key={photo.id}
                className={`
                  ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                  ${index === 3 ? 'lg:col-span-2' : ''}
                `}
              >
                <PhotoCard
                  photo={photo}
                  onClick={() => setSelectedPhotoIndex(photographs.indexOf(photo))}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Categories */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Explore by Category</h2>
            <p className="text-warm-gray text-lg">Different perspectives, one vision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/portfolio/${category.id}`}
                className="group relative h-96 overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif mb-2">{category.name}</h3>
                  <p className="text-sm text-warm-gray">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Philosophy */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif leading-relaxed">
            "I believe photography is more than capturing an image. It is about observing, connecting and preserving moments that might otherwise disappear."
          </blockquote>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Latest Stories</h2>
              <p className="text-warm-gray">Thoughts on photography and storytelling</p>
            </div>
            <Link 
              href="/stories"
              className="hidden md:block text-sm uppercase tracking-wider hover:text-warm-gray transition-colors"
            >
              All Stories →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group"
              >
                <div className="relative h-80 mb-4 overflow-hidden">
                  <Image
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-warm-gray mb-2">
                  {story.category} • {story.readTime}
                </p>
                <h3 className="text-xl font-serif mb-2 group-hover:text-warm-gray transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-warm-gray">{story.description}</p>
                <p className="text-xs text-warm-gray mt-2">{story.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?w=1920&q=80"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">
            LET&apos;S CREATE SOMETHING
            <br />
            MEANINGFUL.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portfolio"
              className="px-8 py-4 bg-white text-black hover:bg-warm-gray transition-colors uppercase tracking-wider text-sm font-medium"
            >
              View Portfolio
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors uppercase tracking-wider text-sm font-medium"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhotoIndex !== null && (
        <PhotoLightbox
          photo={photographs[selectedPhotoIndex]}
          currentIndex={selectedPhotoIndex}
          totalCount={photographs.length}
          onClose={() => setSelectedPhotoIndex(null)}
          onPrevious={
            selectedPhotoIndex > 0
              ? () => setSelectedPhotoIndex(selectedPhotoIndex - 1)
              : undefined
          }
          onNext={
            selectedPhotoIndex < photographs.length - 1
              ? () => setSelectedPhotoIndex(selectedPhotoIndex + 1)
              : undefined
          }
        />
      )}
    </main>
  );
}

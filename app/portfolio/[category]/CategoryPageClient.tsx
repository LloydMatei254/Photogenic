'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { photographs } from '@/data/photographs';
import { categories } from '@/data/categories';
import { Category } from '@/types';
import PhotoCard from '@/components/PhotoCard';
import PhotoLightbox from '@/components/PhotoLightbox';

interface CategoryPageClientProps {
  category: string;
}

export default function CategoryPageClient({ category }: CategoryPageClientProps) {
  const categoryId = category as Category;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categoryInfo = categories.find((c) => c.id === categoryId);
  
  const categoryPhotos = useMemo(() => {
    return photographs.filter((photo) => photo.category === categoryId);
  }, [categoryId]);

  const otherCategories = categories.filter((c) => c.id !== categoryId);

  if (!categoryInfo) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Category not found</h1>
          <Link href="/portfolio" className="text-warm-gray hover:text-white">
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src={categoryInfo.image}
          alt={categoryInfo.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider mb-6 hover:text-warm-gray transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            {categoryInfo.name}
          </h1>
          <p className="text-xl text-warm-gray">
            {categoryInfo.description}
          </p>
        </div>
      </section>

      {/* Photography Notes */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-warm-gray leading-relaxed text-center">
            {getCategoryNotes(categoryId)}
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          {categoryPhotos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-warm-gray text-lg mb-6">
                No photographs in this category yet. Check back soon!
              </p>
              <Link 
                href="/portfolio"
                className="inline-block px-6 py-3 border border-white/30 hover:border-white/60 text-sm uppercase tracking-wider transition-colors"
              >
                View All Work
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  onClick={() => setSelectedPhotoIndex(photographs.indexOf(photo))}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
            Explore Other Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherCategories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                href={`/portfolio/${category.id}`}
                className="group relative h-80 overflow-hidden"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif">{category.name}</h3>
                </div>
              </Link>
            ))}
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

function getCategoryNotes(category: Category): string {
  const notes: Record<Exclude<Category, 'all'>, string> = {
    portraits: "Portrait photography allows me to connect with people and capture their personality, emotion, and the quiet stories they carry. Each portrait is a moment of trust and collaboration.",
    street: "The streets are full of unscripted moments—scenes that unfold naturally and disappear just as quickly. Street photography teaches me to observe, anticipate, and appreciate the everyday.",
    documentary: "Documentary photography is about bearing witness, preserving stories, and creating visual records of people, places, and moments that deserve to be remembered.",
    events: "Events are filled with genuine emotion, celebration, and fleeting moments. I aim to capture the energy, connection, and joy that make these occasions meaningful.",
    landscapes: "Landscape photography reminds me to slow down and appreciate the natural world—the light, the stillness, and the beauty that exists beyond our everyday routines.",
    lifestyle: "Lifestyle photography is about authentic moments and real connections. It's less about perfection and more about capturing life as it is—honest, beautiful, and meaningful.",
  };

  return notes[category as Exclude<Category, 'all'>] || "";
}

'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import { photographs } from '@/data/photographs';
import { Category } from '@/types';
import PhotoCard from '@/components/PhotoCard';
import PhotoLightbox from '@/components/PhotoLightbox';
import CategoryFilter from '@/components/CategoryFilter';

const categories = [
  { id: 'all' as Category, name: 'All' },
  { id: 'portraits' as Category, name: 'Portraits' },
  { id: 'street' as Category, name: 'Street' },
  { id: 'events' as Category, name: 'Events' },
  { id: 'landscapes' as Category, name: 'Landscapes' },
  { id: 'lifestyle' as Category, name: 'Lifestyle' },
  { id: 'documentary' as Category, name: 'Documentary' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'all') return photographs;
    return photographs.filter((photo) => photo.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Portfolio</h1>
          <p className="text-xl md:text-2xl text-warm-gray">
            A collection of moments, stories and perspectives
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 px-6 bg-neutral-950 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-warm-gray text-lg">
                No photographs in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => {
                // Create asymmetrical layout
                const isLarge = index % 7 === 0 || index % 7 === 4;
                
                return (
                  <div
                    key={photo.id}
                    className={`
                      ${isLarge ? 'sm:col-span-2 sm:row-span-2' : ''}
                    `}
                  >
                    <PhotoCard
                      photo={photo}
                      onClick={() => setSelectedPhotoIndex(photographs.indexOf(photo))}
                    />
                  </div>
                );
              })}
            </div>
          )}
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

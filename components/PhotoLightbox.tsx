'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '@/types';

interface PhotoLightboxProps {
  photo: Photo;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  currentIndex: number;
  totalCount: number;
}

export default function PhotoLightbox({
  photo,
  onClose,
  onPrevious,
  onNext,
  currentIndex,
  totalCount,
}: PhotoLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrevious) onPrevious();
      if (e.key === 'ArrowRight' && onNext) onNext();
    },
    [onClose, onPrevious, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-[200] bg-black animate-fade-in">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div>
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-1">
            {photo.category}
          </p>
          <h2 className="text-2xl font-serif">{photo.title}</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>
      </div>

      {/* Image Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-20">
        <div className="relative w-full h-full">
          <Image
            src={photo.image}
            alt={photo.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      {onPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-white/10 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-white/10 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Footer Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between text-sm text-warm-gray">
          <div>
            {photo.description && <p className="mb-1">{photo.description}</p>}
            {photo.location && <p>📍 {photo.location}</p>}
          </div>
          <p className="text-xs">
            {currentIndex + 1} / {totalCount}
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { Photo } from '@/types';

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
  priority?: boolean;
}

export default function PhotoCard({ photo, onClick, priority = false }: PhotoCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden bg-neutral-900 relative"
      style={{
        aspectRatio: photo.aspectRatio === 'portrait' ? '3/4' : 
                     photo.aspectRatio === 'square' ? '1/1' : '4/3',
      }}
    >
      <Image
        src={photo.image}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority={priority}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs uppercase tracking-widest text-warm-gray mb-2">
            {photo.category}
          </p>
          <h3 className="text-xl font-serif">{photo.title}</h3>
          {photo.year && (
            <p className="text-sm text-warm-gray mt-1">{photo.year}</p>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { Category } from '@/types';

interface CategoryFilterProps {
  categories: { id: Category; name: string }[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-16">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-6 py-3 text-sm uppercase tracking-wider transition-all
            ${
              activeCategory === category.id
                ? 'bg-white text-black'
                : 'border border-white/30 hover:border-white/60'
            }
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

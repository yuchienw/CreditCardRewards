import React from 'react';
import { 
  Sparkles, 
  CreditCard, 
  Smartphone, 
  Plane, 
  ShoppingBag, 
  UtensilsCrossed, 
  Car, 
  Tv 
} from 'lucide-react';
import { CATEGORIES } from '../data/cards';
import type { CategoryType } from '../types/card';

interface CategoryFilterProps {
  selectedCategory: CategoryType;
  onSelectCategory: (c: CategoryType) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  CreditCard,
  Smartphone,
  Plane,
  ShoppingBag,
  UtensilsCrossed,
  Car,
  Tv,
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 overflow-x-auto no-scrollbar">
        <div className="flex space-x-2 min-w-max">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || Sparkles;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 ring-2 ring-indigo-600 ring-offset-1'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60'
                }`}
                title={cat.description}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-slate-700'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

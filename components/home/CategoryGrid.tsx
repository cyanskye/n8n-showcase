"use client";

import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

interface CategoryGridProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export default function CategoryGrid({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.02 }}
          onClick={() => onSelectCategory(category.id)}
          className={`group relative p-4 rounded-xl border transition-all ${
            selectedCategory === category.id
              ? 'bg-gradient-to-br from-n8n-orange/20 to-orange-600/10 border-n8n-orange/50 shadow-lg shadow-n8n-orange/10'
              : 'bg-gray-100 dark:bg-n8n-gray/30 border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 hover:bg-gray-200 dark:hover:bg-n8n-gray/50'
          }`}
        >
          {/* Icon */}
          <div className="text-2xl mb-2 transition-transform group-hover:scale-110">
            {category.icon}
          </div>

          {/* Name */}
          <div
            className={`text-xs font-medium truncate transition-colors ${
              selectedCategory === category.id
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
            }`}
          >
            {category.name}
          </div>

          {/* Count Badge */}
          <div
            className={`absolute top-2 right-2 px-1.5 py-0.5 text-[10px] font-medium rounded-full ${
              selectedCategory === category.id
                ? 'bg-n8n-orange text-white'
                : 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400'
            }`}
          >
            {category.count}
          </div>
        </motion.button>
      ))}
    </div>
  );
}

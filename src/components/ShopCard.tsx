import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';
import type { Shop } from '../types';

interface ShopCardProps {
  shop: Shop;
}

export default function ShopCard({ shop }: ShopCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{shop.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{shop.rating}</span>
          </div>
        </div>
        
        <div className="mt-4 flex items-start space-x-2 text-gray-600">
          <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
          <p>{shop.address}</p>
        </div>
        
        {shop.phone && (
          <div className="mt-2 flex items-center space-x-2 text-gray-600">
            <Phone className="h-5 w-5" />
            <p>{shop.phone}</p>
          </div>
        )}
        
        <p className="mt-4 text-gray-600">{shop.description}</p>
        
        <div className="mt-4">
          <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
            {shop.category}
          </span>
        </div>
      </div>
    </div>
  );
}
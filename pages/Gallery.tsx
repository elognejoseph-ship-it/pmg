import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  // Generate dummy gallery items based on prompt "gallery-01.jpg" to "gallery-12.jpg"
  const galleryItems: GalleryItem[] = Array.from({ length: 12 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    return {
      id: `gal-${num}`,
      title: `Réalisation ${num}`,
      imageName: `gallery-${num}.jpg`,
      imageUrl: `https://picsum.photos/800/600?random=${100 + i}`
    };
  });

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gray-900 py-16 text-center text-white relative">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Galerie</h1>
          <p className="text-pmg-gold text-lg">Nos dernières réalisations</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 50}>
              <div 
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md aspect-square"
                onClick={() => openModal(index)}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.imageName} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                    Voir
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-fade-in" onClick={closeModal}>
          <button 
            onClick={closeModal} 
            className="absolute top-4 right-4 text-white hover:text-pmg-gold transition-colors"
          >
            <X size={40} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-pmg-gold transition-colors hidden md:block"
          >
            <ChevronLeft size={48} />
          </button>

          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={galleryItems[selectedImageIndex].imageUrl} 
              alt={galleryItems[selectedImageIndex].imageName} 
              className="w-full h-full object-contain max-h-[80vh] rounded shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-medium">
              {galleryItems[selectedImageIndex].title}
            </p>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-pmg-gold transition-colors hidden md:block"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
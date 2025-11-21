import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { IMAGES } from '../constants';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'carrosserie',
      title: 'Carrosserie & Tôlerie',
      description: 'Réparation de chocs, redressage sur marbre laser, débosselage sans peinture. Nous remettons la structure de votre véhicule à neuf en respectant les normes de sécurité.',
      imageName: IMAGES.services.carrosserie.name,
      imageUrl: IMAGES.services.carrosserie.url
    },
    {
      id: 'peinture',
      title: 'Peinture Automobile',
      description: 'Peinture complète, raccords, polissage et lustrage. Nous utilisons une cabine de peinture professionnelle et des teintes constructeurs garanties pour un résultat éclatant.',
      imageName: IMAGES.services.peinture.name,
      imageUrl: IMAGES.services.peinture.url
    },
    {
      id: 'sinistre',
      title: 'Gestion de Sinistre',
      description: 'Nous vous accompagnons dans vos démarches avec les assurances. Expertise photo, devis rapide et véhicule de courtoisie selon disponibilité.',
      imageName: 'gestion-sinistre.jpg', // referencing name per prompt requirement
      imageUrl: 'https://picsum.photos/800/600?random=20'
    },
    {
      id: 'vitrage',
      title: 'Vitrage / Pare-brise',
      description: 'Remplacement ou réparation de pare-brise, vitres latérales et lunettes arrière. Intervention rapide pour garantir votre visibilité et votre sécurité.',
      imageName: IMAGES.services.vitrage.name,
      imageUrl: IMAGES.services.vitrage.url
    },
    {
      id: 'pieces',
      title: 'Vente Pièces Auto',
      description: 'Large stock de pièces de carrosserie : pare-chocs, ailes, phares, rétroviseurs. Pièces neuves d\'origine ou occasion testée.',
      imageName: IMAGES.services.pieces.name,
      imageUrl: IMAGES.services.pieces.url
    },
    {
      id: 'mecanique',
      title: 'Mécanique Légère',
      description: 'Entretien courant lié à la carrosserie : vérification des feux, géométrie après choc, climatisation.',
      imageName: 'mecanique-legere.jpg',
      imageUrl: 'https://picsum.photos/800/600?random=21'
    }
  ];

  return (
    <div className="w-full">
       <div className="bg-gray-900 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pmg-red/30 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Nos Services</h1>
          <p className="text-pmg-gold text-lg">Une gamme complète pour votre véhicule</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                <div className="h-56 relative overflow-hidden">
                   <img 
                    src={service.imageUrl} 
                    alt={service.imageName} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                   <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
                     {service.title}
                   </h3>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <button className="text-pmg-red font-bold uppercase text-sm tracking-wide self-start hover:text-pmg-gold transition-colors">
                    En savoir plus &rarr;
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
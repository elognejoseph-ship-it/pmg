import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { APP_NAME } from '../constants';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-900 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pmg-red/20 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">À propos de {APP_NAME}</h1>
          <p className="text-pmg-gold text-lg">Votre expert carrossier de confiance</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Plus de 10 ans d'expertise au service de votre auto
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fondée avec la passion de l'automobile, PMG CAR s'est imposée comme une référence à Abidjan, plus précisément dans la zone de Port-Bouët. Notre mission est simple : offrir des services de carrosserie qui allient sécurité, esthétique et durabilité.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nous comprenons qu'un véhicule est plus qu'un moyen de transport, c'est un investissement. C'est pourquoi nous traitons chaque voiture qui entre dans notre atelier avec le plus grand soin, en utilisant des techniques modernes et des produits respectueux des normes constructeurs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Équipe certifiée",
                "Matériel de pointe",
                "Peinture d'origine",
                "Service client 24/7",
                "Garantie travaux",
                "Devis gratuit"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-pmg-red" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/400/500?random=11" alt="Atelier" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <img src="https://picsum.photos/400/500?random=12" alt="Équipe" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-10 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal delay={0}>
              <div className="text-4xl font-bold text-pmg-red mb-2">1500+</div>
              <div className="text-gray-600">Clients Satisfaits</div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-4xl font-bold text-pmg-red mb-2">10+</div>
              <div className="text-gray-600">Années d'Expérience</div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-4xl font-bold text-pmg-red mb-2">100%</div>
              <div className="text-gray-600">Qualité Garantie</div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-4xl font-bold text-pmg-red mb-2">24h</div>
              <div className="text-gray-600">Réponse Devis</div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
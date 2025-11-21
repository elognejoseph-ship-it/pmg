import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Wrench, RefreshCw } from 'lucide-react';
import { IMAGES, SLOGAN, APP_NAME } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - mapped from "hero-garage.jpg" */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 animate-pulse-slow"
          style={{ backgroundImage: `url('${IMAGES.hero.url}')` }}
          role="img"
          aria-label={IMAGES.hero.name}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <ScrollReveal>
            <h2 className="text-pmg-gold font-bold text-lg md:text-xl uppercase tracking-[0.2em] mb-4">
              Bienvenue chez {APP_NAME}
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              {SLOGAN}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Redonnez à votre véhicule son éclat d'origine avec nos services de carrosserie et de peinture de précision à Abidjan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/rendezvous" 
                className="px-8 py-4 bg-pmg-red hover:bg-red-800 text-white font-bold text-lg rounded shadow-lg transition-transform hover:-translate-y-1"
              >
                Prendre Rendez-vous
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white hover:bg-gray-100 text-pmg-red font-bold text-lg rounded shadow-lg transition-transform hover:-translate-y-1"
              >
                Nos Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Stripe */}
      <div className="bg-pmg-red py-12 relative z-30 -mt-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center gap-4">
              <ShieldCheck size={48} className="text-pmg-gold" />
              <div>
                <h3 className="font-bold text-xl">Qualité Garantie</h3>
                <p className="text-sm opacity-80">Matériaux premium et finitions parfaites.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Wrench size={48} className="text-pmg-gold" />
              <div>
                <h3 className="font-bold text-xl">Expertise Technique</h3>
                <p className="text-sm opacity-80">Équipe qualifiée et équipements modernes.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <RefreshCw size={48} className="text-pmg-gold" />
              <div>
                <h3 className="font-bold text-xl">Gestion Sinistres</h3>
                <p className="text-sm opacity-80">Accompagnement complet assurance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-pmg-gold/20 rounded-full z-0"></div>
              <img 
                src="https://picsum.photos/600/400?random=10" 
                alt="Atelier PMG Car" 
                className="relative z-10 rounded-lg shadow-xl w-full object-cover h-[400px]" 
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-pmg-red rounded-lg z-0"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir <span className="text-pmg-red">{APP_NAME}</span> ?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Situés sur la route d’Anani à Port-Bouët, nous sommes votre partenaire de confiance pour tous travaux de carrosserie. 
              Que ce soit pour une simple rayure ou une restauration complète après accident, notre équipe met tout en œuvre pour vous satisfaire.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-pmg-gold rounded-full"></span>
                Devis rapide et transparent
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-pmg-gold rounded-full"></span>
                Respect des délais annoncés
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-pmg-gold rounded-full"></span>
                Peinture haute durabilité
              </li>
            </ul>
            <Link to="/about" className="inline-flex items-center text-pmg-red font-bold hover:text-pmg-gold transition-colors">
              En savoir plus <ArrowRight size={20} className="ml-2" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-pmg-red font-bold uppercase tracking-wider">Ce que nous faisons</span>
            <h2 className="text-4xl font-bold mt-2">Nos Services Phares</h2>
            <div className="w-20 h-1 bg-pmg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-pmg-red/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={IMAGES.services.carrosserie.url} alt={IMAGES.services.carrosserie.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Carrosserie & Peinture</h3>
                  <p className="text-gray-600 mb-4">Redressage, débosselage et peinture en cabine pour un résultat impeccable.</p>
                  <Link to="/services" className="text-sm font-bold text-pmg-red uppercase hover:underline">Détails</Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-pmg-red/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={IMAGES.services.vitrage.url} alt={IMAGES.services.vitrage.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Vitrage Auto</h3>
                  <p className="text-gray-600 mb-4">Remplacement de pare-brise et vitres latérales toutes marques.</p>
                  <Link to="/services" className="text-sm font-bold text-pmg-red uppercase hover:underline">Détails</Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-pmg-red/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={IMAGES.services.pieces.url} alt={IMAGES.services.pieces.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Pièces Auto</h3>
                  <p className="text-gray-600 mb-4">Vente de pièces de carrosserie neuves et d'occasion de qualité.</p>
                  <Link to="/services" className="text-sm font-bold text-pmg-red uppercase hover:underline">Détails</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
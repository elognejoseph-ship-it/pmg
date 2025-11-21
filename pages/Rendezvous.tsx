import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Rendezvous: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-900 py-16 text-center text-white relative">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Prendre Rendez-vous</h1>
          <p className="text-pmg-gold text-lg">Réservez votre créneau à l'atelier</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-pmg-red">
            <p className="mb-8 text-gray-600 text-center">
              Remplissez le formulaire ci-dessous. Notre équipe vous contactera sous 24h pour confirmer votre venue.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nom complet</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pmg-red focus:ring-1 focus:ring-pmg-red outline-none transition-all" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pmg-red focus:ring-1 focus:ring-pmg-red outline-none transition-all" placeholder="07 XX XX XX XX" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Marque & Modèle</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pmg-red focus:ring-1 focus:ring-pmg-red outline-none transition-all" placeholder="Ex: Toyota Corolla" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Date souhaitée</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pmg-red focus:ring-1 focus:ring-pmg-red outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Type de service</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pmg-red focus:ring-1 focus:ring-pmg-red outline-none transition-all bg-white">
                  <option>Carrosserie / Tôlerie</option>
                  <option>Peinture complète</option>
                  <option>Retouche Peinture</option>
                  <option>Vitrage / Pare-brise</option>
                  <option>Diagnostic / Devis</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optionnel)</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pmg-red focus:ring-1 focus:ring-pmg-red outline-none transition-all" placeholder="Détails supplémentaires..."></textarea>
              </div>

              <button type="button" className="w-full bg-pmg-red hover:bg-red-800 text-white font-bold py-4 rounded-lg shadow-lg transition-transform hover:-translate-y-1">
                Confirmer la demande
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Rendezvous;
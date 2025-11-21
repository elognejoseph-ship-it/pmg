import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-900 py-16 text-center text-white relative">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Contactez-nous</h1>
          <p className="text-pmg-gold text-lg">Nous sommes à votre écoute</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <ScrollReveal>
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h2 className="text-2xl font-bold mb-8 text-pmg-red border-b pb-4">Nos Coordonnées</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-pmg-gold/20 p-3 rounded-full text-pmg-red">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Adresse</h3>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pmg-gold/20 p-3 rounded-full text-pmg-red">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Téléphone</h3>
                    <div className="flex flex-col text-gray-600">
                      {CONTACT_INFO.phones.map(phone => (
                        <a key={phone} href={`tel:${phone}`} className="hover:text-pmg-red">{phone}</a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pmg-gold/20 p-3 rounded-full text-pmg-red">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-pmg-red">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-pmg-gold/20 p-3 rounded-full text-pmg-red">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Horaires</h3>
                    <p className="text-gray-600">Lundi - Vendredi : 08h00 - 18h00</p>
                    <p className="text-gray-600">Samedi : 09h00 - 15h00</p>
                    <p className="text-gray-600">Dimanche : Fermé</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map & Simple Form */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-8 h-full">
              {/* Fake Map */}
              <div className="bg-gray-200 w-full h-64 rounded-xl shadow-inner flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-75 transition-opacity" style={{ backgroundImage: "url('https://picsum.photos/800/400?grayscale')" }}></div>
                <div className="relative z-10 bg-white px-4 py-2 rounded shadow text-center">
                  <p className="font-bold text-gray-800">Carte Google Maps</p>
                  <p className="text-xs text-gray-500">Port-Bouët, Route d’Anani</p>
                </div>
              </div>

              <div className="bg-pmg-red text-white p-8 rounded-xl shadow-lg flex-grow">
                <h3 className="text-xl font-bold mb-4">Besoin d'une info rapide ?</h3>
                <form className="space-y-4">
                  <input type="email" placeholder="Votre Email" className="w-full px-4 py-2 rounded text-gray-800 outline-none focus:ring-2 focus:ring-pmg-gold" />
                  <textarea placeholder="Votre message..." rows={3} className="w-full px-4 py-2 rounded text-gray-800 outline-none focus:ring-2 focus:ring-pmg-gold"></textarea>
                  <button className="w-full bg-pmg-gold text-pmg-red font-bold py-2 rounded hover:bg-white transition-colors">Envoyer</button>
                </form>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};

export default Contact;
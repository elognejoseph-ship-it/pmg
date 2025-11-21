import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { APP_NAME, CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-pmg-gold">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1: Brand & Desc */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{APP_NAME}</h3>
            <p className="mb-6 leading-relaxed">
              Nous redonnons vie à votre véhicule. Expert en carrosserie, peinture et vitrage à Abidjan. La qualité et la satisfaction client sont notre priorité.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-pmg-red transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-pmg-red transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="hover:text-pmg-gold transition-colors flex items-center gap-2">
                    <span className="text-pmg-gold">›</span> {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-700 pb-2 inline-block">
              Nous Contacter
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-pmg-gold shrink-0 mt-1" size={20} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-pmg-gold shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.map(phone => (
                    <a key={phone} href={`tel:${phone}`} className="hover:text-white">{phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-pmg-gold shrink-0" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-pmg-gold shrink-0 mt-1" size={20} />
                <div>
                  <p>Lun - Ven: 08:00 - 18:00</p>
                  <p>Sam: 09:00 - 15:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black py-4 text-center text-sm text-gray-500">
        <p>&copy; {currentYear} {APP_NAME}. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
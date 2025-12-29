import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveMobileSubmenu(null);
  }, [location]);

  const services = [
    { name: 'Antalya Psikolog', icon: 'ri-mental-health-line', path: '/services/antalya-psikolog', desc: 'Profesyonel psikolojik destek' },
    { name: 'Antalya Pedagog', icon: 'ri-graduation-cap-line', path: '/services/antalya-pedagog', desc: 'Eğitim ve gelişim danışmanlığı' },
    { name: 'Aile Danışmanlığı', icon: 'ri-home-heart-line', path: '/services/aile-danismanligi', desc: 'Aile içi iletişim ve uyum' },
    { name: 'Çocuk ve Oyun Terapisi', icon: 'ri-bear-smile-line', path: '/services/antalya-cocuk-ve-oyun', desc: 'Çocuklara özel terapi' },
    { name: 'Ergen Terapisi', icon: 'ri-user-smile-line', path: '/services/antalya-ergen-terapisi', desc: 'Ergenlik dönemi desteği' },
    { name: 'Çift Terapisi', icon: 'ri-heart-2-line', path: '/services/antalya-cift-terapisi', desc: 'İlişki ve evlilik danışmanlığı' },
    { name: 'Cinsel Terapi', icon: 'ri-hearts-line', path: '/services/antalya-cinsel-terapi', desc: 'Cinsel sağlık danışmanlığı' },
    { name: 'EMDR Terapisi', icon: 'ri-eye-line', path: '/services/antalya-emdr', desc: 'Travma odaklı terapi' },
  ];

  const dikkatGelistirme = [
    { name: 'DEHB Nedir?', icon: 'ri-question-line', path: '/dikkat-gelistirme/dehb-nedir', desc: 'Dikkat eksikliği hakkında' },
    { name: 'Çocuklar İçin MOXO', icon: 'ri-bear-smile-line', path: '/dikkat-gelistirme/cocuklar-icin-moxo', desc: 'Çocuk dikkat testi' },
    { name: 'Yetişkinler İçin MOXO', icon: 'ri-user-line', path: '/dikkat-gelistirme/yetiskinler-icin-moxo', desc: 'Yetişkin dikkat testi' },
    { name: 'BBMP Programı', icon: 'ri-brain-line', path: '/dikkat-gelistirme/bbmp', desc: 'Beyin geliştirme programı' },
  ];

  const sasMetodu = [
    { name: 'SAS Nedir?', icon: 'ri-lightbulb-line', path: '/sas/sas-nedir', desc: 'SAS metodunu keşfet' },
    { name: 'SAS Smart', icon: 'ri-rocket-line', path: '/sas/sas-smart', desc: 'Akıllı öğrenme teknikleri' },
    { name: 'SAS Life', icon: 'ri-heart-pulse-line', path: '/sas/sas-life', desc: 'Yaşam kalitesi artırma' },
    { name: 'SAS Boost', icon: 'ri-flashlight-line', path: '/sas/sas-boost', desc: 'Performans geliştirme' },
    { name: 'SAS Balance', icon: 'ri-scales-line', path: '/sas/sas-balance', desc: 'Denge ve uyum' },
  ];


  const handleMouseEnter = (menu: string) => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setActiveDropdown(null);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 bg-olive rounded-xl flex items-center justify-center p-1.5">
                <img src="/logo-icon.webp" alt="Arges Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="font-serif text-2xl font-bold text-darkgray">
                Arges Psikoloji
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              <Link
                to="/"
                className="font-sans text-sm font-medium text-darkgray hover:text-olive transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Anasayfa
              </Link>
              <Link
                to="/about"
                className="font-sans text-sm font-medium text-darkgray hover:text-olive transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Hakkımızda
              </Link>

              {/* Hizmetlerimiz Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="font-sans text-sm font-medium text-darkgray hover:text-olive transition-colors duration-200 flex items-center space-x-1 cursor-pointer whitespace-nowrap">
                  <span>Hizmetlerimiz</span>
                  <i className={`ri-arrow-down-s-line transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}></i>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[420px] bg-white rounded-2xl shadow-2xl p-5"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-olive/5 transition-colors duration-200 cursor-pointer group"
                          >
                            <div className="w-9 h-9 bg-olive/10 rounded-lg flex items-center justify-center group-hover:bg-olive/20 transition-colors duration-200 flex-shrink-0">
                              <i className={`${item.icon} text-olive text-lg`}></i>
                            </div>
                            <div>
                              <span className="font-sans text-sm font-medium text-darkgray group-hover:text-olive transition-colors duration-200 block">
                                {item.name}
                              </span>
                              <span className="font-sans text-xs text-darkgray/60">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-darkgray/10">
                        <Link
                          to="/services"
                          className="flex items-center justify-center space-x-2 text-olive hover:text-darkgray transition-colors duration-200 cursor-pointer"
                        >
                          <span className="font-sans text-sm font-medium">Tüm Hizmetler</span>
                          <i className="ri-arrow-right-line"></i>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dikkat Gelistirme Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('dikkat')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="font-sans text-sm font-medium text-darkgray hover:text-olive transition-colors duration-200 flex items-center space-x-1 cursor-pointer whitespace-nowrap">
                  <span>Dikkat Geliştirme</span>
                  <i className={`ri-arrow-down-s-line transition-transform duration-200 ${activeDropdown === 'dikkat' ? 'rotate-180' : ''}`}></i>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'dikkat' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-2xl p-4"
                    >
                      <div className="space-y-1">
                        {dikkatGelistirme.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-olive/5 transition-colors duration-200 cursor-pointer group"
                          >
                            <div className="w-9 h-9 bg-olive/10 rounded-lg flex items-center justify-center group-hover:bg-olive/20 transition-colors duration-200 flex-shrink-0">
                              <i className={`${item.icon} text-olive text-lg`}></i>
                            </div>
                            <div>
                              <span className="font-sans text-sm font-medium text-darkgray group-hover:text-olive transition-colors duration-200 block">
                                {item.name}
                              </span>
                              <span className="font-sans text-xs text-darkgray/60">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SAS Metodu Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('sas')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="font-sans text-sm font-medium text-darkgray hover:text-gold transition-colors duration-200 flex items-center space-x-1 cursor-pointer whitespace-nowrap">
                  <span>SAS Metodu</span>
                  <i className={`ri-arrow-down-s-line transition-transform duration-200 ${activeDropdown === 'sas' ? 'rotate-180' : ''}`}></i>
                </button>

                <AnimatePresence>
                  {activeDropdown === 'sas' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-2xl p-4"
                    >
                      <div className="space-y-1">
                        {sasMetodu.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gold/5 transition-colors duration-200 cursor-pointer group"
                          >
                            <div className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-200 flex-shrink-0">
                              <i className={`${item.icon} text-gold text-lg`}></i>
                            </div>
                            <div>
                              <span className="font-sans text-sm font-medium text-darkgray group-hover:text-gold transition-colors duration-200 block">
                                {item.name}
                              </span>
                              <span className="font-sans text-xs text-darkgray/60">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/testimonials"
                className="font-sans text-sm font-medium text-darkgray hover:text-olive transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Yorumlar
              </Link>

              <Link
                to="/team"
                className="font-sans text-sm font-medium text-darkgray hover:text-olive transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Ekibimiz
              </Link>
              <Link
                to="/contact"
                className="font-sans text-sm font-medium text-darkgray hover:text-olive transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                İletişim
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/hizli-randevu"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-check-line"></i>
                <span>Hızlı Randevu</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-darkgray cursor-pointer"
              aria-label="Menu"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-darkgray/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-darkgray/10">
                  <span className="font-serif text-xl font-bold text-darkgray">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-8 h-8 flex items-center justify-center text-darkgray cursor-pointer"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>

                <nav className="space-y-1">
                  <Link
                    to="/"
                    className="block px-4 py-3 rounded-xl font-sans text-sm font-medium text-darkgray hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                  >
                    Anasayfa
                  </Link>
                  <Link
                    to="/about"
                    className="block px-4 py-3 rounded-xl font-sans text-sm font-medium text-darkgray hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                  >
                    Hakkımızda
                  </Link>

                  {/* Mobile Hizmetlerimiz Dropdown */}
                  <div>
                    <button
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'services' ? null : 'services')}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-sans text-sm font-medium text-darkgray hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                    >
                      <span className="flex items-center space-x-2">
                        <i className="ri-service-line text-olive"></i>
                        <span>Hizmetlerimiz</span>
                      </span>
                      <i className={`ri-arrow-down-s-line transition-transform duration-200 ${activeMobileSubmenu === 'services' ? 'rotate-180' : ''}`}></i>
                    </button>
                    <AnimatePresence>
                      {activeMobileSubmenu === 'services' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 space-y-1">
                            {services.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.path}
                                className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                              >
                                <i className={`${item.icon} text-olive text-base`}></i>
                                <span className="font-sans text-sm text-darkgray">{item.name}</span>
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg bg-olive/5 hover:bg-olive/10 transition-colors duration-200 cursor-pointer"
                            >
                              <i className="ri-arrow-right-line text-olive text-base"></i>
                              <span className="font-sans text-sm font-medium text-olive">Tüm Hizmetler</span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Dikkat Gelistirme Dropdown */}
                  <div>
                    <button
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'dikkat' ? null : 'dikkat')}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-sans text-sm font-medium text-darkgray hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                    >
                      <span className="flex items-center space-x-2">
                        <i className="ri-focus-3-line text-olive"></i>
                        <span>Dikkat Geliştirme</span>
                      </span>
                      <i className={`ri-arrow-down-s-line transition-transform duration-200 ${activeMobileSubmenu === 'dikkat' ? 'rotate-180' : ''}`}></i>
                    </button>
                    <AnimatePresence>
                      {activeMobileSubmenu === 'dikkat' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 space-y-1">
                            {dikkatGelistirme.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.path}
                                className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                              >
                                <i className={`${item.icon} text-olive text-base`}></i>
                                <span className="font-sans text-sm text-darkgray">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile SAS Metodu Dropdown */}
                  <div>
                    <button
                      onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'sas' ? null : 'sas')}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-sans text-sm font-medium text-darkgray hover:bg-gold/5 transition-colors duration-200 cursor-pointer"
                    >
                      <span className="flex items-center space-x-2">
                        <i className="ri-star-line text-gold"></i>
                        <span>SAS Metodu</span>
                      </span>
                      <i className={`ri-arrow-down-s-line transition-transform duration-200 ${activeMobileSubmenu === 'sas' ? 'rotate-180' : ''}`}></i>
                    </button>
                    <AnimatePresence>
                      {activeMobileSubmenu === 'sas' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 space-y-1">
                            {sasMetodu.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.path}
                                className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-gold/5 transition-colors duration-200 cursor-pointer"
                              >
                                <i className={`${item.icon} text-gold text-base`}></i>
                                <span className="font-sans text-sm text-darkgray">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/testimonials"
                    className="block px-4 py-3 rounded-xl font-sans text-sm font-medium text-darkgray hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="flex items-center space-x-2">
                      <i className="ri-chat-quote-line text-olive"></i>
                      <span>Danışan Yorumları</span>
                    </span>
                  </Link>

                  <Link
                    to="/team"
                    className="block px-4 py-3 rounded-xl font-sans text-sm font-medium text-darkgray hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="flex items-center space-x-2">
                      <i className="ri-team-line text-olive"></i>
                      <span>Ekibimiz</span>
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-3 rounded-xl font-sans text-sm font-medium text-darkgray hover:bg-olive/5 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="flex items-center space-x-2">
                      <i className="ri-phone-line text-olive"></i>
                      <span>İletişim</span>
                    </span>
                  </Link>
                </nav>

                <div className="pt-6 border-t border-darkgray/10">
                  <Link
                    to="/hizli-randevu"
                    className="flex items-center justify-center space-x-2 bg-darkgray text-white px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-olive transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-calendar-check-line"></i>
                    <span>Hızlı Randevu</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

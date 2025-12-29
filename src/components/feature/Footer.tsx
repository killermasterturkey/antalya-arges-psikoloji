import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-olive/10 py-16 px-6 lg:px-12 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-darkgray">
              Arges Psikoloji
            </h3>
            <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
              Bilimsel, etik ve güvenli psikolojik destek ile hayatınıza yeniden anlam katın.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-base font-semibold text-darkgray mb-4">
              Kurumsal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="font-sans text-sm text-darkgray/70 hover:text-olive transition-colors duration-200 cursor-pointer"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-sans text-sm text-darkgray/70 hover:text-olive transition-colors duration-200 cursor-pointer"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="font-sans text-sm text-darkgray/70 hover:text-olive transition-colors duration-200 cursor-pointer"
                >
                  Ekibimiz
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-sans text-sm text-darkgray/70 hover:text-olive transition-colors duration-200 cursor-pointer"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h4 className="font-sans text-base font-semibold text-darkgray mb-4">
              İletişim
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 font-sans text-sm text-darkgray/70">
                <i className="ri-map-pin-line text-lg text-olive mt-0.5"></i>
                <span>Meltem Mah. 3850. Sk. Belgen Sitesi D:7 Blok K:4 D:10 Muratpaşa/Antalya</span>
              </li>
              <li>
                <a
                  href="tel:+905403251525"
                  className="flex items-center space-x-2 font-sans text-sm text-darkgray/70 hover:text-olive transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-phone-line text-lg"></i>
                  <span>0540 325 15 25</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@argespsikoloji.com"
                  className="flex items-center space-x-2 font-sans text-sm text-darkgray/70 hover:text-olive transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-mail-line text-lg"></i>
                  <span>info@argespsikoloji.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/argespsikoloji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 font-sans text-sm text-darkgray/70 hover:text-olive transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-instagram-line text-lg"></i>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Arges-Psikoloji/61559928306983/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 font-sans text-sm text-darkgray/70 hover:text-olive transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-facebook-line text-lg"></i>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-base font-semibold text-darkgray mb-4">
              Haberlerimizden Haberdar Olun
            </h4>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-2 rounded-full border border-darkgray/20 focus:outline-none focus:border-olive text-sm font-sans"
              />
              <button className="bg-darkgray text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-olive transition-colors duration-300 cursor-pointer whitespace-nowrap">
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-darkgray/10 flex flex-col md:flex-row items-center justify-between">
          <p className="font-sans text-sm text-darkgray/60">
            © 2025 Arges Psikoloji. Tüm hakları saklıdır.
          </p>
          <span className="font-sans text-sm text-darkgray/60 mt-4 md:mt-0">
            Powered by Killer Master Turkey
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
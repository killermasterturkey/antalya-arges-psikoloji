import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';

const TesekkurlerPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
        <section className="pt-32 pb-20 px-6 lg:px-12 min-h-[70vh] flex items-center">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-olive/10 rounded-full flex items-center justify-center mx-auto"
              >
                <i className="ri-checkbox-circle-fill text-5xl text-olive"></i>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-4xl lg:text-5xl font-bold text-darkgray"
              >
                Teşekkürler!
              </motion.h1>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <p className="font-sans text-xl text-darkgray/80">
                  Randevu talebiniz başarıyla alındı.
                </p>
                <p className="font-sans text-base text-darkgray/60">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </motion.div>

              {/* Urgent Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-8 space-y-4"
              >
                <p className="font-sans text-sm text-darkgray/60">
                  Acil durumlar için hemen bizi arayabilirsiniz:
                </p>
                <a
                  href="tel:+905403251525"
                  onClick={() => trackPhoneClick('tesekkur_page')}
                  className="inline-flex items-center space-x-3 bg-olive text-white px-8 py-4 rounded-full font-sans text-lg font-semibold hover:bg-darkgray transition-all duration-300"
                >
                  <i className="ri-phone-fill text-xl"></i>
                  <span>0540 325 15 25</span>
                </a>
              </motion.div>

              {/* WhatsApp Option */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://wa.me/905403251525"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('tesekkur_page')}
                  className="inline-flex items-center space-x-2 text-[#25D366] hover:text-[#128C7E] font-sans text-base font-medium transition-colors duration-200"
                >
                  <i className="ri-whatsapp-fill text-xl"></i>
                  <span>WhatsApp ile de ulaşabilirsiniz</span>
                </a>
              </motion.div>

              {/* Back to Home */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <Link
                  to="/"
                  className="inline-flex items-center space-x-2 font-sans text-sm text-darkgray/60 hover:text-olive transition-colors duration-200"
                >
                  <i className="ri-arrow-left-line"></i>
                  <span>Anasayfaya Dön</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TesekkurlerPage;

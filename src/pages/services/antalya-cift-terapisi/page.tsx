import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const AntalyaCiftTerapisiPage = () => {
  const topics = [
    { icon: 'ri-chat-heart-line', title: 'İletişim Sorunları', description: 'Sağlıklı iletişim kurma ve dinleme becerileri.' },
    { icon: 'ri-heart-pulse-line', title: 'Güven Sorunları', description: 'İlişki içi güven ve sadakat konuları.' },
    { icon: 'ri-emotion-unhappy-line', title: 'Çatışma Çözümü', description: 'Yapıcı tartışma ve uzlaşma becerileri.' },
    { icon: 'ri-heart-2-line', title: 'Yakınlık Sorunları', description: 'Duygusal ve fiziksel yakınlık.' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-olive/5 via-transparent to-gold/5"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2 bg-white border border-darkgray/20 px-4 py-2 rounded-full">
                  <i className="ri-heart-2-line text-olive"></i>
                  <span className="font-sans text-sm text-darkgray">Çift Terapisi</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Antalya Çift Terapisi
                </h1>

                <p className="font-sans text-lg text-darkgray/70 leading-relaxed mb-2">
                  İlişkinizi Güçlendirmek İçin Profesyonel Destek
                </p>
                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  Romantik ilişkiler, hayatımızın en önemli parçalarından biridir. Ancak zaman içinde iletişim kopuklukları, güven sorunları veya farklı beklentiler ilişkide zorluklara yol açabilir. Çift terapisi; bu sorunların çözümünde profesyonel bir rehberlik sunar.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://wa.me/905403251525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-calendar-check-line"></i>
                    <span>Randevu Al</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-olive/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <i className="ri-heart-2-line text-8xl text-olive/40"></i>
                    <p className="font-sans text-darkgray/60">Sağlıklı İlişki İçin</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-olive/20 rounded-2xl flex items-center justify-center mx-auto">
                    <i className={`${topic.icon} text-3xl text-olive`}></i>
                  </div>
                  <h3 className="font-sans text-lg font-bold text-darkgray">{topic.title}</h3>
                  <p className="font-sans text-sm text-darkgray/70">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-darkgray mb-6">İlişkinizi Güçlendirelim</h2>
            <p className="font-sans text-lg text-darkgray/70 mb-8">Uzman çift terapistimiz ile ilişkinizi yeniden inşa edin.</p>
            <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full hover:bg-olive transition-all duration-300">
              <i className="ri-whatsapp-line"></i>
              <span>WhatsApp ile Randevu</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AntalyaCiftTerapisiPage;

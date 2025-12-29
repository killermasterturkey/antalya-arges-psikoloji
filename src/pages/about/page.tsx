import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import CallBanner from '../../components/feature/CallBanner';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

const AboutPage = () => {
  const values = [
    {
      icon: 'ri-award-line',
      title: 'Uzmanlık',
      description: 'Bilimsel temelli, deneyimli uzman kadro ile hizmet sunuyoruz.',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Gizlilik',
      description: 'Tüm görüşmeler, etik kurallar çerçevesinde ve %100 gizlilik prensibiyle yürütülür.',
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Kişiye Özel',
      description: 'Her danışana özel terapi yöntemi ve süreç planlaması yapılır.',
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Hızlı Randevu',
      description: 'WhatsApp ve online form üzerinden kolay ve hızlı iletişim.',
    },
  ];

  const approaches = [
    {
      name: 'Şema Terapi',
      description: 'Erken dönem yaşantılardan kaynaklanan kalıpları anlamaya ve dönüştürmeye yönelik',
    },
    {
      name: 'Bilişsel Davranışçı Terapi (BDT)',
      description: 'Düşünce, duygu ve davranış arasındaki ilişkiyi anlamaya yönelik',
    },
    {
      name: 'Deneyimsel Oyun Terapisi',
      description: 'Çocukların oyun yoluyla duygularını ifade etmelerine yardımcı olan yaklaşım',
    },
    {
      name: 'EMDR',
      description: 'Travma ve stres kaynaklı sorunların tedavisinde etkili göz hareketleri tekniği',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <CallBanner />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8 mb-16"
            >
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                Hakkımızda
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="font-serif text-2xl lg:text-3xl text-olive italic leading-relaxed">
                  "Her şeyde bir çatlak vardır, ışık içeri böyle girer."
                </p>
                <p className="font-sans text-base text-darkgray/60 mt-4">
                  — Leonard Cohen
                </p>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-12 shadow-lg space-y-6"
            >
              <h2 className="font-serif text-3xl font-bold text-darkgray">
                Hikayemiz
              </h2>
              <div className="space-y-4 font-sans text-base text-darkgray/80 leading-relaxed">
                <p>
                  İsmini, mitolojide "ışık tutan" anlamına gelen "Arges" kelimesinden alan Arges Psikoloji ruh sağlığı hizmeti vermek amacı ile Antalya'da kurulmuştur.
                </p>
                <p>
                  Alanında uzman psikolog kadrosu ile faydası ve geçerliliği bilimsel olarak kanıtlanan tekniklerle; etik ilkeler çerçevesinde hizmet vermeyi amaçlamaktadır.
                </p>
                <p>
                  Psikologlarımız güvenli, destekleyici ve empatik bir yaklaşımla, farklı yaş gruplarından bireylerin kişisel büyümelerini desteklemek için çalışmaktadır.
                </p>
                <p>
                  Psikoterapi süreci; uzun soluklu olmasının yanı sıra, kişiyi merkeze koyar ve kişiye kendi düşünce, duygu ve davranışlarının altında yatan nedenler ve örüntüler hakkında farkındalık yaratmayı amaçlar.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-olive/20 rounded-2xl flex items-center justify-center">
                  <i className="ri-eye-line text-3xl text-olive"></i>
                </div>
                <h2 className="font-serif text-3xl font-bold text-darkgray">
                  Vizyonumuz
                </h2>
                <p className="font-sans text-base text-darkgray/80 leading-relaxed">
                  Bireylerin yaşadıkları sorunları anlamlandırmalarına, içsel nedenleri keşfetmelerine ve psikolojik sağlamlıklarını geliştirmelerine destek olmak. Tüm danışmanlık süreçlerimiz, etik ilkelere ve bilimsel temellere uygun şekilde yürütülür.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center">
                  <i className="ri-compass-line text-3xl text-gold"></i>
                </div>
                <h2 className="font-serif text-3xl font-bold text-darkgray">
                  Misyonumuz
                </h2>
                <p className="font-sans text-base text-darkgray/80 leading-relaxed">
                  Arges Psikoloji olarak misyonumuz; psikolojik destek alanında güvenilir, etik ve profesyonel yaklaşım sunarak, Antalya'da bireylerin ihtiyaçlarına uygun bilimsel çözümlerle yanlarında olmak; her danışanın kendini güvende ve desteklenmiş hissetmesini sağlamaktır.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-4">
                Neden Biz?
              </h2>
              <p className="font-sans text-lg text-darkgray/60">
                Çalışmalarımızı şekillendiren temel ilkeler
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-8 text-center space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-olive text-4xl">
                    <i className={value.icon}></i>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-darkgray">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm text-darkgray/70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approaches */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-4">
                Terapi Yaklaşımlarımız
              </h2>
              <p className="font-sans text-lg text-darkgray/60">
                Bilimsel ve kanıta dayalı terapi yöntemleri
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-8 space-y-3 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-olive rounded-full"></div>
                    <h3 className="font-serif text-xl font-semibold text-darkgray">
                      {approach.name}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-darkgray/70 pl-5">
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-6">
                Hayatınıza Yeni Bir Başlangıç Yapın
              </h2>
              <p className="font-sans text-lg text-darkgray/70 mb-8">
                Profesyonel destek almak için bugün bizimle iletişime geçin
              </p>
              <a
                href="https://wa.me/905403251525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>Hemen Randevu Al</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

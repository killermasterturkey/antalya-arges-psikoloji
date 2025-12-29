import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const CoupleTherapyPage = () => {
  const issues = [
    {
      icon: 'ri-chat-3-line',
      title: 'İletişim Sorunları',
      description: 'Birbirinizi anlamakta zorlanıyor, sık sık tartışıyorsunuz.',
    },
    {
      icon: 'ri-shield-cross-line',
      title: 'Güven Problemleri',
      description: 'Aldatma, yalan veya güven kaybı yaşadınız.',
    },
    {
      icon: 'ri-hearts-line',
      title: 'Cinsel Uyumsuzluk',
      description: 'Cinsel hayatınızda sorunlar ve uyumsuzluklar var.',
    },
    {
      icon: 'ri-parent-line',
      title: 'Ebeveynlik Çatışmaları',
      description: 'Çocuk yetiştirme konusunda anlaşamıyorsunuz.',
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Finansal Anlaşmazlıklar',
      description: 'Para yönetimi konusunda farklı görüşleriniz var.',
    },
    {
      icon: 'ri-time-line',
      title: 'Zaman Yönetimi',
      description: 'Birlikte kaliteli zaman geçiremiyorsunuz.',
    },
  ];

  const benefits = [
    'Sağlıklı iletişim becerilerinin gelişmesi',
    'Duygusal bağın güçlenmesi',
    'Çatışma çözme stratejilerinin öğrenilmesi',
    'Güvenin yeniden inşa edilmesi',
    'Cinsel hayatın iyileşmesi',
    'İlişki memnuniyetinin artması',
  ];

  const process = [
    {
      step: '1',
      title: 'İlk Değerlendirme',
      description: 'Her iki partnerin de görüşlerini dinler, ilişki dinamiklerini anlarız.',
    },
    {
      step: '2',
      title: 'Hedef Belirleme',
      description: 'Çiftin ortak hedeflerini belirler ve terapi planını oluştururuz.',
    },
    {
      step: '3',
      title: 'Terapi Seansları',
      description: 'Haftalık seanslarla iletişim ve ilişki becerilerini geliştiririz.',
    },
    {
      step: '4',
      title: 'İzleme ve Destek',
      description: 'İlerlemeyi takip eder, gerektiğinde ek destek sağlarız.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-olive/5"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2 bg-white border border-darkgray/20 px-4 py-2 rounded-full">
                  <i className="ri-heart-2-line text-gold"></i>
                  <span className="font-sans text-sm text-darkgray">İlişki Hizmetleri</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Çift Terapisi
                </h1>

                <p className="font-sans text-xl text-darkgray/70 leading-relaxed">
                  İlişkinizi güçlendirin, iletişiminizi geliştirin ve birlikte daha mutlu bir geleceğe adım atın.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://wa.me/905403251525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-gold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-calendar-check-line"></i>
                    <span>Randevu Al</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-white text-darkgray px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-darkgray hover:text-white transition-all duration-300 border border-darkgray/20 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-question-line"></i>
                    <span>Soru Sor</span>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=loving%20couple%20sitting%20together%20in%20bright%20modern%20therapy%20office%20holding%20hands%20showing%20connection%20and%20hope%20comfortable%20couch%20with%20soft%20pillows%20natural%20daylight%20through%20windows%20indoor%20plants%20creating%20warm%20supportive%20atmosphere%20for%20relationship%20counseling%20neutral%20calming%20tones&width=800&height=1000&seq=couple-therapy-hero&orientation=portrait"
                    alt="Çift Terapisi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                      <i className="ri-time-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-sans text-sm text-darkgray/60">Seans Süresi</p>
                      <p className="font-sans text-lg font-bold text-darkgray">60 Dakika</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Hangi Sorunlarda Yardımcı Oluyoruz?
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Çift terapisi, ilişkinizde yaşadığınız birçok zorluğun üstesinden gelmenize yardımcı olabilir.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {issues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-cream rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center">
                    <i className={`${issue.icon} text-2xl text-gold`}></i>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-darkgray">{issue.title}</h3>
                  <p className="font-sans text-sm text-darkgray/70">{issue.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image + Content */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=couple%20in%20therapy%20session%20sitting%20face%20to%20face%20engaged%20in%20meaningful%20conversation%20with%20professional%20therapist%20facilitating%20communication%20modern%20counseling%20room%20with%20comfortable%20seating%20soft%20natural%20lighting%20creating%20safe%20space%20for%20emotional%20expression%20and%20healing%20neutral%20warm%20color%20palette&width=800&height=1000&seq=couple-therapy-session&orientation=portrait"
                  alt="Çift Terapisi Seansı"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                  Çift Terapisi Nasıl Çalışır?
                </h2>
                <p className="font-sans text-lg text-darkgray/70 leading-relaxed">
                  Çift terapisi, ilişkinizdeki sorunları anlamak ve çözmek için güvenli bir alan sağlar. Terapist, tarafsız bir gözlemci olarak her iki partnerin de duygularını ve ihtiyaçlarını anlamaya çalışır.
                </p>
                <p className="font-sans text-lg text-darkgray/70 leading-relaxed">
                  Seanslar sırasında, iletişim becerilerinizi geliştirmenize, birbirinizi daha iyi anlamanıza ve ilişkinizi güçlendirecek stratejiler geliştirmenize yardımcı oluruz.
                </p>
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-darkgray">Önemli Not</h3>
                  <p className="font-sans text-base text-darkgray/70">
                    Çift terapisi, ilişkinizi kurtarmak kadar, gerektiğinde sağlıklı bir şekilde ayrılmanıza da yardımcı olabilir. Amacımız, her iki partnerin de en sağlıklı kararı almasını desteklemektir.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Çift Terapisinin Faydaları
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-cream rounded-2xl p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-gold text-lg"></i>
                  </div>
                  <p className="font-sans text-base text-darkgray">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Terapi Süreci
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 space-y-4 h-full">
                    <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center">
                      <span className="font-serif text-3xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-darkgray">{item.title}</h3>
                    <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <i className="ri-arrow-right-line text-2xl text-gold/30"></i>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-6">
                İlişkinize Yatırım Yapın
              </h2>
              <p className="font-sans text-lg text-darkgray/70 mb-8">
                Daha sağlıklı ve mutlu bir ilişki için profesyonel destek alın. Uzman terapistlerimiz sizinle birlikte.
              </p>
              <a
                href="https://wa.me/905403251525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-gold transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-check-line"></i>
                <span>Hemen Randevu Al</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoupleTherapyPage;

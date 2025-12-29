import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const IndividualTherapyPage = () => {
  const benefits = [
    'Depresyon ve anksiyete belirtilerinin azalması',
    'Stres yönetimi becerilerinin gelişmesi',
    'Öfke kontrolü ve duygusal düzenleme',
    'Benlik saygısının artması',
    'İlişkilerde iyileşme',
    'Kişisel farkındalık ve gelişim',
  ];

  const process = [
    {
      step: '1',
      title: 'İlk Görüşme',
      description: 'Tanışma, ihtiyaçlarınızın belirlenmesi ve terapi planının oluşturulması.',
    },
    {
      step: '2',
      title: 'Terapi Süreci',
      description: 'Haftalık seanslarla düzenli takip ve terapötik müdahaleler.',
    },
    {
      step: '3',
      title: 'Değerlendirme',
      description: 'İlerlemenin gözden geçirilmesi ve gerektiğinde planın güncellenmesi.',
    },
    {
      step: '4',
      title: 'Sonlandırma',
      description: 'Hedeflere ulaşıldığında terapi sürecinin sağlıklı bir şekilde sonlandırılması.',
    },
  ];

  const approaches = [
    {
      icon: 'ri-brain-line',
      name: 'Bilişsel Davranışçı Terapi',
      description: 'Düşünce ve davranış kalıplarını değiştirme',
    },
    {
      icon: 'ri-heart-pulse-line',
      name: 'Psikanalitik Terapi',
      description: 'Bilinçdışı süreçleri anlama ve çözümleme',
    },
    {
      icon: 'ri-user-heart-line',
      name: 'Hümanistik Terapi',
      description: 'Kişisel potansiyeli ortaya çıkarma',
    },
    {
      icon: 'ri-emotion-line',
      name: 'Şema Terapi',
      description: 'Erken dönem şemaları ile çalışma',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
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
                  <i className="ri-user-heart-line text-olive"></i>
                  <span className="font-sans text-sm text-darkgray">Bireysel Hizmetler</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Bireysel Terapi
                </h1>

                <p className="font-sans text-xl text-darkgray/70 leading-relaxed">
                  Kendinizi daha iyi anlamak, duygusal zorluklarla başa çıkmak ve yaşam kalitenizi artırmak için profesyonel psikolojik destek.
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
                    src="https://readdy.ai/api/search-image?query=peaceful%20individual%20therapy%20session%20in%20modern%20minimalist%20counseling%20room%20with%20comfortable%20seating%20natural%20light%20flowing%20through%20large%20windows%20indoor%20plants%20creating%20calming%20atmosphere%20professional%20psychologist%20and%20client%20in%20supportive%20conversation%20warm%20neutral%20tones%20emphasizing%20trust%20and%20personal%20growth&width=800&height=1000&seq=individual-therapy-hero&orientation=portrait"
                    alt="Bireysel Terapi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-olive/20 rounded-xl flex items-center justify-center">
                      <i className="ri-time-line text-2xl text-olive"></i>
                    </div>
                    <div>
                      <p className="font-sans text-sm text-darkgray/60">Seans Süresi</p>
                      <p className="font-sans text-lg font-bold text-darkgray">50 Dakika</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Individual Therapy */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                  Bireysel Terapi Nedir?
                </h2>
                <p className="font-sans text-lg text-darkgray/70 leading-relaxed">
                  Bireysel terapi, kişinin duygusal, psikolojik ve davranışsal sorunlarıyla başa çıkmasına yardımcı olan, bire bir gerçekleştirilen profesyonel bir destek sürecidir.
                </p>
                <p className="font-sans text-lg text-darkgray/70 leading-relaxed">
                  Bu süreçte, güvenli ve gizli bir ortamda, uzman bir psikolog eşliğinde kendinizi keşfeder, duygularınızı anlamlandırır ve yaşam kalitenizi artıracak stratejiler geliştirirsiniz.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-cream rounded-2xl p-6 space-y-2">
                    <div className="text-olive text-3xl">
                      <i className="ri-shield-check-line"></i>
                    </div>
                    <p className="font-sans text-sm font-semibold text-darkgray">Gizlilik Garantisi</p>
                  </div>
                  <div className="bg-cream rounded-2xl p-6 space-y-2">
                    <div className="text-olive text-3xl">
                      <i className="ri-user-star-line"></i>
                    </div>
                    <p className="font-sans text-sm font-semibold text-darkgray">Kişiye Özel Yaklaşım</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=serene%20therapy%20consultation%20room%20with%20comfortable%20armchairs%20soft%20cushions%20warm%20ambient%20lighting%20bookshelves%20with%20psychology%20books%20potted%20plants%20on%20side%20tables%20creating%20safe%20confidential%20space%20for%20personal%20growth%20and%20emotional%20healing%20neutral%20calming%20color%20palette&width=800&height=1000&seq=therapy-room-ambiance&orientation=portrait"
                  alt="Terapi Ortamı"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                Bireysel Terapinin Faydaları
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Düzenli terapi seansları ile hayatınızda olumlu değişimler yaşayabilirsiniz.
              </p>
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
                  className="bg-white rounded-2xl p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-olive/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-olive text-lg"></i>
                  </div>
                  <p className="font-sans text-base text-darkgray">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
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
                Terapi Süreci Nasıl İşler?
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Bireysel terapi sürecinde size özel bir yol haritası oluşturuyoruz.
              </p>
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
                  <div className="bg-cream rounded-2xl p-8 space-y-4 h-full">
                    <div className="w-16 h-16 bg-olive rounded-2xl flex items-center justify-center">
                      <span className="font-serif text-3xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-darkgray">{item.title}</h3>
                    <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <i className="ri-arrow-right-line text-2xl text-olive/30"></i>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approaches */}
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
                Kullandığımız Terapi Yaklaşımları
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                İhtiyaçlarınıza göre farklı terapi yöntemlerini entegre ederek size özel bir tedavi planı oluşturuyoruz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-olive/20 rounded-2xl flex items-center justify-center mx-auto">
                    <i className={`${approach.icon} text-3xl text-olive`}></i>
                  </div>
                  <h3 className="font-sans text-base font-bold text-darkgray">{approach.name}</h3>
                  <p className="font-sans text-sm text-darkgray/70">{approach.description}</p>
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
                Kendinize Yatırım Yapın
              </h2>
              <p className="font-sans text-lg text-darkgray/70 mb-8">
                Daha mutlu ve sağlıklı bir yaşam için ilk adımı bugün atın. Uzman psikologlarımız sizinle birlikte bu yolculukta yanınızda.
              </p>
              <a
                href="https://wa.me/905403251525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
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

export default IndividualTherapyPage;

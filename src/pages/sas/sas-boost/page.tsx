import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasBoostPage = () => {
  const modules = [
    {
      icon: 'ri-rocket-line',
      title: 'İç Motivasyon Keşfi',
      description: 'Sizi harekete geçiren gerçek motivasyon kaynaklarınızı keşfedin ve sürdürülebilir bir enerji yaratın.',
      topics: ['Değer temelli motivasyon', 'İç itici güçler', 'Anlam bulma', 'Amaç belirleme']
    },
    {
      icon: 'ri-speed-line',
      title: 'Performans Optimizasyonu',
      description: 'En yüksek performansınızı sergilemek için zihinsel ve fiziksel stratejiler geliştirin.',
      topics: ['Flow durumu', 'Zirve performans', 'Enerji yönetimi', 'Toparlanma teknikleri']
    },
    {
      icon: 'ri-target-line',
      title: 'Hedef Odaklı Düşünce',
      description: 'Hedeflerinize lazer gibi odaklanın ve engellerle başa çıkma stratejileri öğrenin.',
      topics: ['Hedef netleştirme', 'Eylem planlaması', 'Engel aşma', 'İlerleme takibi']
    },
    {
      icon: 'ri-fire-line',
      title: 'Enerji ve Dayanıklılık',
      description: 'Fiziksel ve zihinsel enerjinizi yönetin, zorluklara karşı dayanıklılığınızı artırın.',
      topics: ['Enerji döngüleri', 'Stres dayanıklılığı', 'Tükenmişlik önleme', 'Yenilenme']
    },
  ];

  const benefits = [
    { icon: 'ri-rocket-2-line', title: 'Artan Motivasyon', description: 'Hedeflerinize ulaşmak için sönmeyen bir iç ateş.' },
    { icon: 'ri-line-chart-line', title: 'Yüksek Performans', description: 'Her alanda en iyi halinizi ortaya koyun.' },
    { icon: 'ri-focus-3-line', title: 'Güçlü Odaklanma', description: 'Dikkat dağıtıcılardan etkilenmeden çalışın.' },
    { icon: 'ri-battery-2-charge-line', title: 'Sürdürülebilir Enerji', description: 'Gün boyu verimli kalın.' },
    { icon: 'ri-shield-star-line', title: 'Zihinsel Güç', description: 'Zorluklarla başa çıkma kapasitesi.' },
    { icon: 'ri-trophy-line', title: 'Başarı Mindset', description: 'Kazanan bir zihin yapısı geliştirin.' },
  ];

  const techniques = [
    { name: 'Vizualizasyon', description: 'Hedeflerinizi zihinsel olarak canlandırarak başarıya programlanın' },
    { name: 'Güç Pozu', description: 'Beden dili ile özgüveninizi ve enerjinizi artırın' },
    { name: 'Enerji Yönetimi', description: 'Günün farklı saatlerinde enerjinizi optimize edin' },
    { name: 'İç Diyalog', description: 'Olumlu öz konuşma ile motivasyonunuzu sürdürün' },
    { name: 'Mikro Hedefler', description: 'Büyük hedefleri küçük başarılara bölerek momentum yaratın' },
    { name: 'Hesap Verebilirlik', description: 'Taahhütlerinizi güçlendirin ve tutarlılık sağlayın' },
  ];

  const weeklyPlan = [
    { week: '1-2', title: 'Motivasyon Temelleri', content: 'Mevcut motivasyon kaynaklarınızı analiz edin. İç ve dış motivasyon faktörlerini keşfedin. Değer temelli hedefler belirleyin.' },
    { week: '3-4', title: 'Performans Geliştirme', content: 'Zirve performans durumlarınızı tanıyın. Flow deneyimi yaratma tekniklerini öğrenin. Performans engellerini tespit edin.' },
    { week: '5-6', title: 'Enerji Optimizasyonu', content: 'Enerji düzeylerinizi yönetin. Tükenmişliği önleme stratejileri uygulayın. Toparlanma rutinleri oluşturun.' },
    { week: '7-8', title: 'Sürdürülebilir Başarı', content: 'Uzun vadeli motivasyon sistemleri kurun. Alışkanlık döngüleri oluşturun. Sürdürülebilir yüksek performans için plan yapın.' },
  ];

  const testimonials = [
    { name: 'Ali R.', text: 'İş yerinde tükenmişlik yaşıyordum. SAS Boost ile yeniden enerjimi ve tutkumu buldum.', rating: 5 },
    { name: 'Selin K.', text: 'Sporcu olarak performansımı bir üst seviyeye taşımamı sağladı. Antrenman motivasyonum çok arttı.', rating: 5 },
    { name: 'Can B.', text: 'Girişimci olarak motivasyon düşüklüğü yaşıyordum. Şimdi her gün enerji dolu uyanıyorum.', rating: 5 },
  ];

  const faqs = [
    { question: 'SAS Boost kimler için ideal?', answer: 'Motivasyon eksikliği yaşayan, performansını artırmak isteyen, tükenmişlik hisseden veya hedeflerine ulaşmakta zorlanan herkes için uygundur. Sporcular, girişimciler ve profesyoneller özellikle fayda görür.' },
    { question: 'Sonuçlar ne kadar sürer?', answer: 'Program süresince öğrenilen teknikler yaşam boyu kullanılabilir. Sürdürülebilir motivasyon için dönemsel tazeleme seansları önerilir.' },
    { question: 'Fiziksel antrenman içeriyor mu?', answer: 'Program öncelikle zihinsel tekniklere odaklanır. Ancak enerji yönetimi modülünde fiziksel sağlık ve hareket önerileri de yer alır.' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-olive/5"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-olive/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2 bg-white border border-gold/30 px-4 py-2 rounded-full">
                  <i className="ri-rocket-line text-gold"></i>
                  <span className="font-sans text-sm text-darkgray">SAS Boost Programı</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Performansınızı <span className="text-gold">Zirveye Taşıyın</span>
                </h1>

                <p className="font-sans text-lg text-darkgray/70 leading-relaxed mb-2">
                  Motivasyon ve Performans İçin
                </p>
                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  SAS Boost, motivasyon ve performansınızı artırmak için geliştirilmiştir. Hedef odaklı düşünce, enerji yönetimi ve başarı stratejileri ile potansiyelinizi ortaya çıkarın.
                </p>

                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">8 Hafta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-fire-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Yoğun Program</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-shield-check-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Birebir Koçluk</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gold text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-gold/90 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap">
                    <i className="ri-calendar-check-line"></i>
                    <span>Programa Katıl</span>
                  </a>
                  <Link to="/sas-nedir" className="inline-flex items-center space-x-2 bg-white text-darkgray px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-cream transition-all duration-300 border border-darkgray/20 cursor-pointer whitespace-nowrap">
                    <span>SAS Hakkında</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/sas/sas-1.png"
                    alt="SAS Boost - Motivasyon ve Performans"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-fire-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">%85</p>
                      <p className="font-sans text-sm text-darkgray/60">Enerji Artışı</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Program Modülleri
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Dört güçlü modül ile motivasyonunuzu ve performansınızı zirveye taşıyın.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className={`${module.icon} text-3xl text-gold`}></i>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl font-bold text-darkgray">{module.title}</h3>
                      <p className="font-sans text-base text-darkgray/70">{module.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, i) => (
                          <span key={i} className="bg-gold/20 text-darkgray px-3 py-1 rounded-full font-sans text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                    Güçlü Teknikler
                  </h2>
                  <p className="font-sans text-lg text-darkgray/70">
                    Performans psikolojisi ve spor biliminden alınan kanıtlanmış yöntemler.
                  </p>
                </div>

                <div className="space-y-4">
                  {techniques.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="font-sans text-base font-semibold text-darkgray flex items-center">
                        <i className="ri-fire-line text-gold mr-2"></i>
                        {tech.name}
                      </h4>
                      <p className="font-sans text-sm text-darkgray/60 mt-1 pl-6">{tech.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <img
                    src="/images/sas/sas-3.png"
                    alt="SAS Boost Teknikleri"
                    className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Program Faydaları
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-3xl text-gold`}></i>
                  </div>
                  <h4 className="font-sans text-lg font-semibold text-darkgray">{benefit.title}</h4>
                  <p className="font-sans text-sm text-darkgray/60 mt-2">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Plan Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                8 Haftalık Program Akışı
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {weeklyPlan.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 h-full space-y-4 hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full font-sans text-xs font-medium">
                    Hafta {item.week}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-darkgray pt-4">{item.title}</h3>
                  <p className="font-sans text-sm text-darkgray/70 leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
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
                Katılımcı Deneyimleri
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-3xl p-8 space-y-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-gold"></i>
                    ))}
                  </div>
                  <p className="font-sans text-base text-darkgray/80 italic">"{testimonial.text}"</p>
                  <p className="font-sans text-sm font-semibold text-darkgray">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Sıkça Sorulan Sorular
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-serif text-lg font-bold text-darkgray mb-3 flex items-start">
                    <i className="ri-question-line text-gold mr-3 mt-1"></i>
                    {faq.question}
                  </h3>
                  <p className="font-sans text-base text-darkgray/70 pl-8">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gold to-gold/80">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
                Performansınızı Ateşlemeye Hazır mısınız?
              </h2>
              <p className="font-sans text-xl text-white/90">
                SAS Boost programı ile sınırlarınızı zorlayın. İlk görüşme ücretsizdir.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white text-gold px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-cream transition-all duration-300 shadow-lg">
                  <i className="ri-whatsapp-line text-xl"></i>
                  <span>WhatsApp ile Bilgi Al</span>
                </a>
                <a href="tel:+905403251525" className="inline-flex items-center space-x-2 bg-transparent text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-white/10 transition-all duration-300 border-2 border-white">
                  <i className="ri-phone-line"></i>
                  <span>0540 325 15 25</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SasBoostPage;

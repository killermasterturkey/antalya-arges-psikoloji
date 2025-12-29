import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasLifePage = () => {
  const modules = [
    {
      icon: 'ri-compass-3-line',
      title: 'Hedef Belirleme ve Yaşam Tasarımı',
      description: 'Değerlerinizi keşfedin, anlamlı hedefler belirleyin ve hayalinizdeki yaşamı tasarlayın.',
      topics: ['Değer analizi', 'Vizyon oluşturma', 'SMART hedefler', 'Eylem planlaması']
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Duygusal Zeka Geliştirme',
      description: 'Duygularınızı tanıyın, yönetin ve duygusal zekanızı güçlendirin.',
      topics: ['Duygu farkındalığı', 'Öz düzenleme', 'Empati geliştirme', 'Sosyal beceriler']
    },
    {
      icon: 'ri-team-line',
      title: 'Sağlıklı İlişki Becerileri',
      description: 'Doyurucu ve sağlıklı ilişkiler kurma ve sürdürme becerilerini geliştirin.',
      topics: ['Etkili iletişim', 'Sınır koyma', 'Çatışma çözümü', 'Güven inşası']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Özgüven ve Benlik Saygısı',
      description: 'Kendinize olan inancınızı güçlendirin ve sağlıklı bir benlik algısı geliştirin.',
      topics: ['İç eleştirmen yönetimi', 'Güçlü yönler keşfi', 'Olumlu benlik konuşması', 'Başarı kutlama']
    },
  ];

  const benefits = [
    { icon: 'ri-heart-3-line', title: 'Daha Doyurucu İlişkiler', description: 'Aile, arkadaşlık ve romantik ilişkilerinizde derinlik ve anlam kazanın.' },
    { icon: 'ri-mental-health-line', title: 'Duygusal Denge', description: 'Duygularınızla sağlıklı bir ilişki kurarak iç huzura ulaşın.' },
    { icon: 'ri-focus-3-line', title: 'Net Yaşam Yönü', description: 'Değerlerinize uygun hedeflerle anlamlı bir yaşam sürün.' },
    { icon: 'ri-user-star-line', title: 'Güçlü Özgüven', description: 'Kendinize güvenin ve potansiyelinizi tam olarak ortaya koyun.' },
    { icon: 'ri-speak-line', title: 'Etkili İletişim', description: 'Düşüncelerinizi net ifade edin, başkalarını daha iyi anlayın.' },
    { icon: 'ri-door-open-line', title: 'Kişisel Sınırlar', description: 'Sağlıklı sınırlar koyarak kendinizi ve ilişkilerinizi koruyun.' },
  ];

  const weeklyPlan = [
    { week: '1-2', title: 'Keşif Aşaması', content: 'Değerlerinizi, güçlü yönlerinizi ve gelişim alanlarınızı keşfedin. Mevcut yaşam durumunuzun kapsamlı bir değerlendirmesini yapın.' },
    { week: '3-4', title: 'Hedef Belirleme', content: 'Değerlerinize uygun, gerçekçi ve motive edici hedefler belirleyin. Kısa, orta ve uzun vadeli hedef haritanızı oluşturun.' },
    { week: '5-6', title: 'Beceri Geliştirme', content: 'Duygusal zeka, iletişim ve ilişki becerilerinizi geliştirin. Günlük uygulamalarla yeni alışkanlıklar kazanın.' },
    { week: '7-8', title: 'Entegrasyon', content: 'Öğrendiklerinizi yaşamınıza entegre edin. Sürdürülebilir değişim için stratejiler geliştirin.' },
  ];

  const testimonials = [
    { name: 'Ayşe K.', text: 'SAS Life programı ile ilişkilerimde dönüşüm yaşadım. Artık kendimi daha iyi ifade edebiliyorum.', rating: 5 },
    { name: 'Mehmet T.', text: 'Hedef belirleme modülü hayatıma yön verdi. Şimdi ne istediğimi biliyorum.', rating: 5 },
    { name: 'Zeynep A.', text: 'Duygusal zeka çalışmaları sayesinde iş ve özel hayatımda çok daha dengeli hissediyorum.', rating: 5 },
  ];

  const faqs = [
    { question: 'SAS Life kimler için uygundur?', answer: 'Yaşam kalitesini artırmak, ilişkilerini güçlendirmek ve kişisel gelişimini desteklemek isteyen tüm yetişkinler için uygundur. Kariyer geçişi, ilişki zorlukları veya kendini keşfetme sürecindeki kişiler özellikle fayda görür.' },
    { question: 'Program online mı yoksa yüz yüze mi?', answer: 'Her iki seçenek de mevcuttur. Tercihinize göre yüz yüze veya online seanslar düzenlenebilir. Hibrit bir yaklaşım da tercih edilebilir.' },
    { question: 'Programın süresi ne kadar?', answer: 'Standart program 8 hafta sürmektedir. Haftada bir 50 dakikalık seans yapılır. İhtiyaca göre program süresi uzatılabilir veya yoğunlaştırılabilir.' },
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
                  <i className="ri-compass-3-line text-gold"></i>
                  <span className="font-sans text-sm text-darkgray">SAS Life Programı</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Yaşamınızı <span className="text-gold">Dönüştürün</span>
                </h1>

                <p className="font-sans text-lg text-darkgray/70 leading-relaxed mb-2">
                  Yaşam Kalitesini Artırmak İçin
                </p>
                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  SAS Life, yaşam becerilerinizi geliştirmek için tasarlanmış bir programdır. Kişisel değerler, hedefler, ilişki becerileri ve yaşam yönetimi konularında farkındalık kazanırsınız.
                </p>

                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">8 Hafta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-calendar-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Haftalık Seanslar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-video-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Online/Yüz Yüze</span>
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
                    src="/images/sas/sas-5.png"
                    alt="SAS Life - Yaşam Becerileri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-heart-pulse-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">4</p>
                      <p className="font-sans text-sm text-darkgray/60">Ana Modül</p>
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
                Dört kapsamlı modül ile yaşamınızın her alanında gelişim sağlayın.
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

        {/* Benefits Section */}
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
                    Programın Faydaları
                  </h2>
                  <p className="font-sans text-lg text-darkgray/70">
                    SAS Life programı ile yaşamınızın her alanında somut ve kalıcı iyileşmeler yaşayın.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-5 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <i className={`${benefit.icon} text-xl text-gold`}></i>
                      </div>
                      <div>
                        <h4 className="font-sans text-base font-semibold text-darkgray">{benefit.title}</h4>
                        <p className="font-sans text-sm text-darkgray/60 mt-1">{benefit.description}</p>
                      </div>
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
                    src="/images/sas/sas-6.png"
                    alt="SAS Life Faydaları"
                    className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Weekly Plan Section */}
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
                8 Haftalık Program Akışı
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Sistematik bir yaklaşımla adım adım gelişiminizi destekliyoruz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {weeklyPlan.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-3xl p-8 h-full space-y-4 hover:shadow-xl transition-all duration-300 relative"
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
                  className="bg-white rounded-3xl p-8 space-y-4 hover:shadow-xl transition-all duration-300"
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
        <section className="py-20 px-6 lg:px-12 bg-white">
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
                  className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
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
                Yaşam Kalitenizi Artırmaya Hazır mısınız?
              </h2>
              <p className="font-sans text-xl text-white/90">
                SAS Life programı ile hayatınıza yön verin. İlk görüşme ücretsizdir.
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

export default SasLifePage;

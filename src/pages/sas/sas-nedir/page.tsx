import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasNedirPage = () => {
  const programs = [
    { icon: 'ri-lightbulb-flash-line', name: 'SAS Smart', description: 'Akademik başarı ve öğrenme stratejileri', link: '/sas-smart', color: 'from-gold to-gold/70' },
    { icon: 'ri-compass-3-line', name: 'SAS Life', description: 'Yaşam becerileri ve kişisel gelişim', link: '/sas-life', color: 'from-olive to-olive/70' },
    { icon: 'ri-rocket-line', name: 'SAS Boost', description: 'Motivasyon ve performans artırma', link: '/sas-boost', color: 'from-darkgray to-darkgray/80' },
    { icon: 'ri-scales-3-line', name: 'SAS Balance', description: 'Denge ve stres yönetimi', link: '/sas-balance', color: 'from-olive/90 to-gold/90' },
  ];

  const methodology = [
    { letter: 'S', title: 'Sistematik', description: 'Bilimsel temellere dayalı, adım adım ilerleyen yapılandırılmış bir program. Her aşama önceki kazanımların üzerine inşa edilir ve süreç boyunca ilerlemeniz ölçülebilir hedeflerle takip edilir.', icon: 'ri-git-branch-line' },
    { letter: 'A', title: 'Analitik', description: 'Kişisel güçlü ve gelişim alanlarınızın derinlemesine analizi. Bilimsel değerlendirme araçları ile mevcut durumunuz objektif olarak belirlenir ve size özel stratejiler oluşturulur.', icon: 'ri-pie-chart-line' },
    { letter: 'S', title: 'Stratejik', description: 'Uzun vadeli hedeflerinize ulaşmak için somut ve uygulanabilir stratejiler. Teorik bilgiyi pratiğe dönüştüren eylem planları ile kalıcı değişim sağlanır.', icon: 'ri-compass-3-line' },
  ];

  const benefits = [
    { icon: 'ri-focus-3-line', title: 'Odaklanma Becerisi', description: 'Dikkat dağınıklığını azaltın, konsantrasyonunuzu artırın' },
    { icon: 'ri-emotion-happy-line', title: 'Duygusal Denge', description: 'Stres ve kaygıyla başa çıkma stratejileri geliştirin' },
    { icon: 'ri-trophy-line', title: 'Hedef Gerçekleştirme', description: 'Hayallerinizi somut hedeflere dönüştürün' },
    { icon: 'ri-team-line', title: 'İlişki Becerileri', description: 'Sağlıklı ve doyurucu ilişkiler kurun' },
    { icon: 'ri-brain-line', title: 'Zihinsel Esneklik', description: 'Değişime uyum sağlama kapasitesini geliştirin' },
    { icon: 'ri-heart-pulse-line', title: 'Öz Farkındalık', description: 'Kendinizi daha derinden tanıyın ve anlayın' },
  ];

  const process = [
    { step: '01', title: 'Değerlendirme Görüşmesi', description: 'Ücretsiz ön görüşmede mevcut durumunuz, hedefleriniz ve beklentileriniz değerlendirilir. Size en uygun SAS programı belirlenir.' },
    { step: '02', title: 'Kişisel Analiz', description: 'Bilimsel ölçüm araçları ile güçlü yönleriniz ve gelişim alanlarınız tespit edilir. Size özel bir yol haritası oluşturulur.' },
    { step: '03', title: 'Program Uygulaması', description: 'Haftalık seanslarla programınız uygulanır. Her seans önceki kazanımların pekiştirilmesi ve yeni becerilerin kazanılmasını içerir.' },
    { step: '04', title: 'İlerleme Takibi', description: 'Düzenli aralıklarla ilerlemeniz değerlendirilir. Gerektiğinde program içeriği güncellenir ve optimize edilir.' },
  ];

  const stats = [
    { number: '500+', label: 'Mutlu Danışan' },
    { number: '%92', label: 'Başarı Oranı' },
    { number: '8+', label: 'Yıllık Deneyim' },
    { number: '4', label: 'Özel Program' },
  ];

  const faqs = [
    { question: 'SAS Metodu kimler için uygundur?', answer: 'SAS Metodu, yaşamında olumlu değişiklikler yapmak isteyen herkese uygundur. Öğrenciler, profesyoneller, ebeveynler ve kişisel gelişimini desteklemek isteyen tüm yetişkinler programlarımızdan faydalanabilir.' },
    { question: 'Program ne kadar sürer?', answer: 'Program süresi seçilen modüle ve bireysel hedeflere göre değişir. Ortalama olarak 8-12 haftalık bir süreç önerilmektedir. Ancak kısa vadeli hedefler için 4 haftalık yoğun programlar da mevcuttur.' },
    { question: 'Seanslar nasıl gerçekleşir?', answer: 'Seanslar yüz yüze veya online olarak gerçekleştirilebilir. Her seans 50 dakika sürer ve haftada bir kez yapılması önerilir. Yoğun programlarda haftalık seans sayısı artırılabilir.' },
    { question: 'SAS Metodu\'nun bilimsel dayanağı nedir?', answer: 'SAS Metodu, bilişsel davranışçı terapi, pozitif psikoloji ve nörobilim araştırmalarına dayanmaktadır. Kullanılan tüm teknikler bilimsel çalışmalarla etkinliği kanıtlanmış yöntemlerdir.' },
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
                  <i className="ri-star-line text-gold"></i>
                  <span className="font-sans text-sm text-darkgray">Bilimsel Temelli Kişisel Gelişim</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  SAS Metodu Nedir?
                </h1>

                <p className="font-sans text-lg text-darkgray/70 leading-relaxed mb-2">
                  SAS Metodu İle Hedeflerinize Ulaşın
                </p>
                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  SAS (Sistematik, Analitik, Stratejik), Arges Psikoloji tarafından geliştirilen özel bir kişisel gelişim programıdır. Bireylerin hedeflerine ulaşmasını destekleyen bu yapılandırılmış metodoloji; bilimsel temeller üzerine inşa edilmiştir.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gold text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-gold/90 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap">
                    <i className="ri-calendar-check-line"></i>
                    <span>Ücretsiz Değerlendirme</span>
                  </a>
                  <a href="#programs" className="inline-flex items-center space-x-2 bg-white text-darkgray px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-cream transition-all duration-300 border border-darkgray/20 cursor-pointer whitespace-nowrap">
                    <span>Programları İncele</span>
                    <i className="ri-arrow-down-line"></i>
                  </a>
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
                    src="/images/sas/sas-1.png"
                    alt="SAS Metodu - Kişisel Gelişim"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-award-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">%92</p>
                      <p className="font-sans text-sm text-darkgray/60">Başarı Oranı</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-cream via-white to-cream relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-olive/10 rounded-full blur-2xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gold/10 hover:border-gold/30">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60 rounded-full group-hover:w-20 transition-all duration-300"></div>

                    {/* Icon background */}
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
                      <i className={`text-2xl text-gold ${
                        index === 0 ? 'ri-user-heart-line' :
                        index === 1 ? 'ri-percent-line' :
                        index === 2 ? 'ri-time-line' :
                        'ri-apps-2-line'
                      }`}></i>
                    </div>

                    <p className="font-serif text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gold to-olive bg-clip-text text-transparent">{stat.number}</p>
                    <p className="font-sans text-sm text-darkgray/70 mt-2 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
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
                SAS Ne Anlama Gelir?
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Her harf, metodolojimizin temel bir ilkesini temsil eder ve birlikte güçlü bir dönüşüm çerçevesi oluşturur.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodology.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-3xl p-8 space-y-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center">
                      <span className="font-serif text-4xl font-bold text-white">{item.letter}</span>
                    </div>
                    <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
                      <i className={`${item.icon} text-2xl text-gold`}></i>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-darkgray">{item.title}</h3>
                  <p className="font-sans text-base text-darkgray/70 leading-relaxed">{item.description}</p>
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
              >
                <div className="relative">
                  <img
                    src="/images/sas/sas-2.png"
                    alt="SAS Metodu Faydaları"
                    className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-xl">
                    <div className="text-center text-white">
                      <i className="ri-check-double-line text-4xl"></i>
                      <p className="font-sans text-sm mt-2">Kanıtlanmış Sonuçlar</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                    SAS Metodu ile Kazanımlar
                  </h2>
                  <p className="font-sans text-lg text-darkgray/70">
                    Bilimsel temelli yaklaşımımız ile hayatınızın her alanında somut ve kalıcı iyileşmeler yaşayın.
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
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                SAS Süreci Nasıl İşler?
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Dört adımlık sistematik yaklaşımımız ile hedefe giden yolda yanınızdayız.
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
                  <div className="bg-cream rounded-3xl p-8 h-full space-y-4 hover:shadow-xl transition-all duration-300">
                    <span className="font-serif text-6xl font-bold text-gold/20">{item.step}</span>
                    <h3 className="font-serif text-xl font-bold text-darkgray">{item.title}</h3>
                    <p className="font-sans text-sm text-darkgray/70 leading-relaxed">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <i className="ri-arrow-right-line text-2xl text-gold/40"></i>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                SAS Programları
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                İhtiyaçlarınıza göre özelleştirilmiş dört farklı program ile hedeflerinize ulaşın.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={program.link} className="block bg-white rounded-3xl p-8 text-center space-y-6 hover:shadow-2xl transition-all duration-300 border border-gold/10 hover:border-gold/40 h-full">
                    <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                      <i className={`${program.icon} text-4xl text-white`}></i>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-darkgray">{program.name}</h3>
                    <p className="font-sans text-sm text-darkgray/70">{program.description}</p>
                    <div className="inline-flex items-center space-x-2 text-gold font-sans text-sm font-medium">
                      <span>Detaylı Bilgi</span>
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </Link>
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
                Potansiyelinizi Keşfetmeye Hazır mısınız?
              </h2>
              <p className="font-sans text-xl text-white/90">
                SAS Metodu ile hayatınızda kalıcı ve olumlu değişimler yaratın. İlk görüşme ücretsizdir.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white text-gold px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-cream transition-all duration-300 shadow-lg">
                  <i className="ri-whatsapp-line text-xl"></i>
                  <span>Hemen Başvur</span>
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

export default SasNedirPage;

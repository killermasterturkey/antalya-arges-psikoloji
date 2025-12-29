import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasSmartPage = () => {
  const modules = [
    {
      icon: 'ri-book-read-line',
      title: 'Etkili Öğrenme Teknikleri',
      description: 'Bilgiyi hızlı ve kalıcı şekilde öğrenmenizi sağlayan kanıtlanmış yöntemler.',
      topics: ['Aktif öğrenme', 'Pomodoro tekniği', 'Aralıklı tekrar', 'Cornell not alma']
    },
    {
      icon: 'ri-brain-line',
      title: 'Hafıza Güçlendirme',
      description: 'Beyin kapasitesini artıran ve hafızayı güçlendiren bilimsel stratejiler.',
      topics: ['Hafıza sarayı', 'Çağrışım teknikleri', 'Görselleştirme', 'Bellek pekiştirme']
    },
    {
      icon: 'ri-time-line',
      title: 'Zaman Yönetimi',
      description: 'Verimliliği maksimize eden planlama ve önceliklendirme becerileri.',
      topics: ['Eisenhower matrisi', 'Zaman blokları', 'Erteleme yönetimi', 'Verimlilik takibi']
    },
    {
      icon: 'ri-focus-3-line',
      title: 'Odaklanma ve Konsantrasyon',
      description: 'Dikkat dağınıklığını yenme ve derin odaklanma becerisi kazanma.',
      topics: ['Dikkat antrenmanı', 'Ortam düzenleme', 'Dijital detoks', 'Flow durumu']
    },
  ];

  const targetAudience = [
    { icon: 'ri-graduation-cap-line', title: 'Öğrenciler', description: 'Sınav hazırlığı ve akademik başarı için' },
    { icon: 'ri-briefcase-line', title: 'Profesyoneller', description: 'Kariyer gelişimi ve verimlilik için' },
    { icon: 'ri-book-line', title: 'Yaşam Boyu Öğrenenler', description: 'Yeni beceriler kazanmak için' },
    { icon: 'ri-trophy-line', title: 'Sınav Adayları', description: 'KPSS, YKS, ALES vb. için' },
  ];

  const benefits = [
    { icon: 'ri-speed-line', title: '%40 Daha Hızlı Öğrenme', description: 'Bilimsel tekniklerle öğrenme hızınızı artırın.' },
    { icon: 'ri-database-2-line', title: 'Kalıcı Hafıza', description: 'Öğrendiklerinizi uzun süre aklınızda tutun.' },
    { icon: 'ri-timer-line', title: 'Verimli Çalışma', description: 'Daha az zamanda daha çok iş başarın.' },
    { icon: 'ri-focus-3-line', title: 'Güçlü Konsantrasyon', description: 'Dikkat dağınıklığından kurtulun.' },
    { icon: 'ri-bar-chart-box-line', title: 'Başarı Artışı', description: 'Sınav ve performans notlarınızı yükseltin.' },
    { icon: 'ri-mental-health-line', title: 'Özgüven Kazanımı', description: 'Yeteneklerinize güvenin.' },
  ];

  const weeklyPlan = [
    { week: '1-2', title: 'Temel Öğrenme Becerileri', content: 'Mevcut çalışma alışkanlıklarınızı analiz ederek, temel öğrenme stratejilerini öğrenin. Aktif öğrenme ve not alma tekniklerini uygulayın.' },
    { week: '3-4', title: 'Hafıza Teknikleri', content: 'Bellek güçlendirme yöntemlerini öğrenin. Hafıza sarayı ve çağrışım tekniklerini pratik edin. Görselleştirme becerilerinizi geliştirin.' },
    { week: '5-6', title: 'Zaman ve Dikkat Yönetimi', content: 'Verimli çalışma programı oluşturun. Dikkat dağınıklığını yenme stratejilerini uygulayın. Erteleme alışkanlığından kurtulun.' },
    { week: '7-8', title: 'Entegrasyon ve Uygulama', content: 'Tüm teknikleri birleştirerek kişisel çalışma sisteminizi oluşturun. Sınav stratejileri ve performans optimizasyonu.' },
  ];

  const techniques = [
    { name: 'Pomodoro Tekniği', description: '25 dakika çalışma, 5 dakika mola döngüsü ile odaklanmayı sürdürme' },
    { name: 'Feynman Tekniği', description: 'Konuyu basit bir dille açıklayarak anlama derinliğini test etme' },
    { name: 'Aralıklı Tekrar', description: 'Bilgiyi belirli aralıklarla tekrarlayarak kalıcı hafızaya aktarma' },
    { name: 'Aktif Geri Çağırma', description: 'Bilgiyi pasif okuma yerine aktif olarak hatırlama pratiği' },
    { name: 'Düşünce Haritalama', description: 'Kavramları görsel olarak organize ederek bağlantıları görme' },
    { name: 'Elaboratif Sorgulama', description: '"Neden?" ve "Nasıl?" soruları ile derinlemesine anlama' },
  ];

  const faqs = [
    { question: 'SAS Smart hangi yaş grubuna uygundur?', answer: 'Program, 14 yaş ve üzeri tüm bireylere uygundur. Öğrenciler, üniversite adayları, profesyoneller ve yaşam boyu öğrenmeyi hedefleyen herkes faydalanabilir.' },
    { question: 'Program sınav başarısını artırır mı?', answer: 'Evet, program KPSS, YKS, ALES gibi sınavlara hazırlanan adayların çalışma verimini artırmak ve sınav stratejileri geliştirmek için özel içerikler barındırır.' },
    { question: 'Ne kadar zamanda sonuç alırım?', answer: 'Çoğu katılımcı 2-3 hafta içinde çalışma veriminde artış fark eder. 8 haftalık program sonunda kalıcı alışkanlıklar kazanılır.' },
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
                  <i className="ri-lightbulb-flash-line text-gold"></i>
                  <span className="font-sans text-sm text-darkgray">SAS Smart Programı</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Öğrenme Gücünüzü <span className="text-gold">Keşfedin</span>
                </h1>

                <p className="font-sans text-lg text-darkgray/70 leading-relaxed mb-2">
                  Akademik Başarıyı Artırmak İçin
                </p>
                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  SAS Smart, akademik performansınızı üst düzeye taşımak için tasarlanmış kapsamlı bir programdır. Öğrenme teknikleri, zaman yönetimi ve dikkat güçlendirme stratejilerini içerir.
                </p>

                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">8 Hafta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-book-2-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">20+ Teknik</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-file-list-3-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Çalışma Materyali</span>
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
                    src="/images/sas/sas-3.png"
                    alt="SAS Smart - Akademik Başarı"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-bar-chart-grouped-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">%40</p>
                      <p className="font-sans text-sm text-darkgray/60">Verimlilik Artışı</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-cream via-white to-cream relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-olive/10 rounded-full blur-2xl"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {targetAudience.map((item, index) => (
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
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60 rounded-full group-hover:w-20 transition-all duration-300"></div>
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all duration-300">
                      <i className={`${item.icon} text-2xl text-gold`}></i>
                    </div>
                    <h3 className="font-sans font-semibold text-lg text-darkgray">{item.title}</h3>
                    <p className="font-sans text-sm text-darkgray/70 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
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
                Dört kapsamlı modül ile öğrenme becerilerinizi zirveye taşıyın.
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
              >
                <div className="relative">
                  <img
                    src="/images/sas/sas-4.png"
                    alt="SAS Smart Teknikleri"
                    className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
                  />
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
                    Öğreneceğiniz Teknikler
                  </h2>
                  <p className="font-sans text-lg text-darkgray/70">
                    Bilimsel araştırmalarla etkinliği kanıtlanmış öğrenme teknikleri.
                  </p>
                </div>

                <div className="space-y-4">
                  {techniques.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="font-sans text-base font-semibold text-darkgray flex items-center">
                        <i className="ri-check-double-line text-gold mr-2"></i>
                        {tech.name}
                      </h4>
                      <p className="font-sans text-sm text-darkgray/60 mt-1 pl-6">{tech.description}</p>
                    </motion.div>
                  ))}
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
                Akademik Başarınızı Artırmaya Hazır mısınız?
              </h2>
              <p className="font-sans text-xl text-white/90">
                SAS Smart programı ile potansiyelinizi ortaya çıkarın. İlk görüşme ücretsizdir.
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

export default SasSmartPage;

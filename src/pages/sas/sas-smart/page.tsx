import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasSmartPage = () => {
  const supportAreas = [
    { icon: 'ri-graduation-cap-line', title: 'Okul Başarısı', description: 'Akademik performansı artırır' },
    { icon: 'ri-focus-3-line', title: 'Dikkat Eksikliği ve Hiperaktivite', description: 'Odaklanmayı güçlendirir' },
    { icon: 'ri-book-read-line', title: 'Disleksi', description: 'Okuma-yazma becerilerini geliştirir' },
    { icon: 'ri-brain-line', title: 'Öğrenme Güçlüğü', description: 'Öğrenme süreçlerini destekler' },
  ];

  const modules = [
    {
      icon: 'ri-focus-3-line',
      title: 'Dikkat & Hiperaktivite | DEHB',
      description: 'Odaklanmayı ve dikkat süresini uzatır, dürtüsel davranışları ve hiperaktiviteyi azaltır.',
      detail: 'SAS-Smart Dinleti Programı çocuklarda yaşanan birçok öğrenme sorunları beynin işlevselliğine bağlıdır. Beynin değişebilen ve yeni bağlantı kurabilme gücüne sahip olması demek birçok öğrenme sorunlarının aşılabilir olduğu anlamına gelir.'
    },
    {
      icon: 'ri-book-read-line',
      title: 'Okuma & Yazma | Disleksi',
      description: 'Sol hemisferin daha doğru ve hızlı bir şekilde işlemesini sağlar.',
      detail: 'Okuma ve yazma becerilerinin gelişmesi için beynin sol yarı küresinin etkin çalışması gerekir.'
    },
    {
      icon: 'ri-brain-line',
      title: 'Anlama & Hafıza',
      description: 'Yarı küreler arası iletişimi güçlendirir.',
      detail: 'Beynin iki yarı küresi arasındaki bağlantıyı güçlendirerek anlama ve hafıza kapasitesini artırır.'
    },
    {
      icon: 'ri-emotion-line',
      title: 'Davranış & Motivasyon',
      description: 'Zaman yönetimi, planlama ve sorumluluk duygusunu geliştirir, stres ve kaygıyı azaltır.',
      detail: 'Çocukların motivasyonunu artırarak olumlu davranış değişikliklerini destekler.'
    },
  ];

  const examples = [
    {
      title: 'Sınav Kaygısı Örneği',
      description: 'Bir çocuk çok zeki, kolay öğrenen ve derslere katılımı yüksek olabilir. Ancak eğer özellikle sınavlara karşı bir kaygı ve stres yaşıyorsa bu onun hem sınav sonucunu hem de okul başarısını olumsuz etkiliyor olabilir. Yani stres beyni olumsuz etkiliyor ve daha önce öğrenilen bilgiyi geri çağıramıyor.',
      icon: 'ri-emotion-unhappy-line'
    },
    {
      title: 'İşitsel Hassasiyet Örneği',
      description: 'Başarılı bir öğrenci okulda ve derslerde arka plandan gelen seslerden rahatsız oluyor, gün sonunda çok yorgun düşüyor ve sinirli oluyor. İşitsel bilgiye karşı hassas olan çocuklar gelen bilgiyi filtrelemekte zorluk çekerler ve beyin daha çok enerji kullanır. Gün sonu daha yorgun ve bitkin hissederler. Dolayısıyla bu durum onların okul başarısını olumsuz etkiler.',
      icon: 'ri-volume-vibrate-line'
    },
  ];

  const processSteps = [
    { step: '01', title: 'Değerlendirme', description: 'Programa başlamadan önce bir değerlendirme yapılır.' },
    { step: '02', title: 'Kişisel Tasarım', description: 'Program her çocuğa özel olarak tasarlanır.' },
    { step: '03', title: 'Uygulama', description: 'Programlar 14, 21 veya 24 günde, günlük 30, 40, 60 dakikalık seanslarla uygulanır.' },
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
                  SAS-Smart <span className="text-gold">Çocuk ve Gençler İçin</span>
                </h1>

                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  Küçük çocuklar ile gençlerin öğrenme becerilerini ve akademik başarılarını destekleyen, bireye özel hazırlanan dinleti programıdır. Temel amacı beynimizi daha etkin ve dengeli kullanabilmektir.
                </p>

                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  SAS-Smart Dinleti Programı günlük seanslarla 3 ila 4 hafta boyunca uygulanır. Dinletiler orkestra müziği, piyano ve konuşma programlarını içermektedir.
                </p>

                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">3-4 Hafta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-headphone-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Günlük Seanslar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-music-2-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Orkestra & Piyano</span>
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
                    alt="SAS Smart - Çocuk ve Gençler İçin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-user-smile-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">Çocuk & Genç</p>
                      <p className="font-sans text-sm text-darkgray/60">Özel Program</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Areas */}
        <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-cream via-white to-cream relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-olive/10 rounded-full blur-2xl"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-darkgray">
                SAS-Smart Dinleti Programının Destek Sağladığı Alanlar
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {supportAreas.map((item, index) => (
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

        {/* About Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-cream rounded-3xl p-8 lg:p-12 space-y-6">
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  Tüm bilişsel, duyusal ve duygusal süreçler beyin tarafından yönetilir. Etkin işleyen bir beyin yaşam kalitenizi ve performansınızı artırır.
                </p>
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  Çocuklarda yaşanan birçok öğrenme sorunları beynin işlevselliğine bağlıdır. Beynin değişebilen ve yeni bağlantı kurabilme gücüne sahip olması demek birçok öğrenme sorunlarının aşılabilir olduğu anlamına gelir.
                </p>
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  SAS-Smart, nöroplastisite alanında yapılan araştırmalara dayanarak geliştirilen bir dinleti programıdır. Program her çocuğa özel tasarlanmıştır. Sesleri kulaklıklar aracılığıyla dinleterek iki yarı kürenin daha hızlı ve dengeli bir şekilde çalışmasını sağlamaya ve böylece beynin işlevselliğinin artmasına yardımcı olur.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Modules Section */}
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
                Destek Alanları
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className={`${module.icon} text-3xl text-gold`}></i>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl font-bold text-darkgray">{module.title}</h3>
                      <p className="font-sans text-base text-darkgray/80">{module.description}</p>
                      <p className="font-sans text-sm text-darkgray/60">{module.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
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
                    alt="SAS Smart - Öğrenme Desteği"
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
                    Okul Başarısını Etkileyen Faktörler
                  </h2>
                  <p className="font-sans text-lg text-darkgray/70">
                    Okul başarısını etkileyen süreçleri azaltmak etkili ve dengeli bir beyin kullanımı ile mümkün olmaktadır.
                  </p>
                </div>

                <div className="space-y-6">
                  {examples.map((example, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="font-sans text-base font-semibold text-darkgray flex items-center mb-3">
                        <i className={`${example.icon} text-gold mr-3 text-xl`}></i>
                        {example.title}
                      </h4>
                      <p className="font-sans text-sm text-darkgray/70 leading-relaxed">{example.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
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
                SAS-Smart Dinleti Program Süreci
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 h-full space-y-4 hover:shadow-xl transition-all duration-300 relative"
                >
                  <span className="font-serif text-6xl font-bold text-gold/20">{item.step}</span>
                  <h3 className="font-serif text-xl font-bold text-darkgray">{item.title}</h3>
                  <p className="font-sans text-sm text-darkgray/70 leading-relaxed">{item.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <i className="ri-arrow-right-line text-2xl text-gold/40"></i>
                    </div>
                  )}
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
                Çocuğunuzun Potansiyelini Keşfedin
              </h2>
              <p className="font-sans text-xl text-white/90">
                SAS-Smart programı ile çocuğunuzun öğrenme becerilerini ve akademik başarısını destekleyin. İlk değerlendirme görüşmesi ücretsizdir.
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

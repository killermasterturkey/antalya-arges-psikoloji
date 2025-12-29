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

  const designFeatures = [
    { icon: 'ri-sound-module-line', description: 'Beynin gelen ses ve konuşmaları tanıması, ayırt etmesi ve işlemlemesi ile ilgili olan beynin işitsel işlemleme kısmının işleyişini arttırmayı hedef alır. Bu işleyişin hızlanması, işitsel hassasiyetlerin azalmasını, anlama ve algılamanın hızlanmasını, sözel ifadenin gelişmesini ve okuma-yazmanın gelişimini sağlar.' },
    { icon: 'ri-eye-line', description: 'Beyinde diğer duyuların (koklama, tat alma, görme ve dokunma) da işlemlendiği merkezlerin aktivasyonunu gerçekleştirerek, uyaranların çok geldiği durumlardaki hassasiyetleri azaltır ve genel işleyişe yardımcı olur.' },
    { icon: 'ri-walk-line', description: 'Denge-koordinasyon merkezinin aktivasyonunu sağlayarak kişinin dengesini, prepozisyonunu, el-göz koordinasyonunu ve motor becerilerini geliştirir.' },
    { icon: 'ri-volume-up-line', description: 'Kişide sağ kulak baskınlığını geliştirerek, kişinin konuşma ile ilgili gelen bilgilerin daha iyi tanımasını, daha hızlı anlamasını ve daha iyi bir sözel ifade geliştirmesini sağlar.' },
    { icon: 'ri-brain-line', description: 'Beynin iki yarı küresi arasındaki iletişimi arttırarak, beynin işlemleme süresinin, algılama ve anlamasının hızlanmasını sağlar.' },
    { icon: 'ri-lungs-line', description: 'Nefes alış-veriş ritimlerini değiştirerek kişinin rahatlamasını veya aktivasyonunun artmasını sağlar. Konuşma bozukluklarına (ör: kekemelik), dikkat eksikliğine ve hiperaktiviteye neden olan beyin dalgalarının alışkanlığını değiştirir.' },
    { icon: 'ri-heart-3-line', description: 'Kişinin kendisine olan öz saygısı yada öz inancının oluşmasına yardımcı olur.' },
  ];

  const targetAreas = [
    'Dikkat Eksikliği Hiperaktivite Bozukluğu',
    'Disleksi',
    'Öğrenme Güçlükleri',
    'Dil & Konuşma Bozuklukları',
    'Sosyal ve Davranışsal Problemler',
    'Duygudurum Bozuklukları',
    'Nörolojik temelli Otizm Spektrum Bozukluğu',
    'Asperger ve Down Sendromu',
    'Serebral Palsi',
    'Beyin Hasarı',
    'Felç Rehabilitasyonu',
  ];

  const progressAreas = [
    'Dikkat, konsantrasyon ve motivasyon becerileri',
    'Dil ve konuşma becerileri',
    'Anlama-algılama ve öğrenme becerileri',
    'Okuma-yazma ve disleksi',
    'Denge ve motor beceriler',
    'Davranış ve sosyal iletişim',
    'Duyusal işlemleme süreçleri',
    'Dikkat süresi',
    'Yeme ve uyku alışkanlıkları',
  ];

  const faqs = [
    {
      question: 'Herhangi Bir Yaş Aralığı Var Mıdır?',
      answer: 'Programlar özellikle çok küçük yaştaki çocuklardan başlamak üzere çocuklar, gençler, yetişkinler ve yaşlılar için uygulanabilmektedir.'
    },
    {
      question: 'SAS Dinleti Programlarının Süresi Ne Kadardır?',
      answer: 'Programlar genellikle 14, 21, 24 gün süreli ve günde 20 dk, 30 dk, 40 dk ve 60 dakikalık seanslardan oluşur. Kişinin başvuru nedenine göre belirlenir.'
    },
  ];

  const stats = [
    { number: '500+', label: 'Mutlu Danışan' },
    { number: '%92', label: 'Başarı Oranı' },
    { number: '8+', label: 'Yıllık Deneyim' },
    { number: '4', label: 'Özel Program' },
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
                  <i className="ri-headphone-line text-gold"></i>
                  <span className="font-sans text-sm text-darkgray">Ses Tabanlı Beyin Eğitimi</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  SAS Metodu Nedir?
                </h1>

                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  SAS Metodu kulaklıklar aracılığı ile müziği, tonları ve konuşmaları birer araç olarak kullanarak beynin iki yarı küresi arasındaki aktivasyonu geliştirmeyi amaçlamaktadır. Sağ kulaktan duyulan bilgiler beynin sol yarı küresine ve sol kulaktan duyulan bilgiler de beynin sağ yarıküresine gitmektedir. Bu durum, beynin iki yarıküresiyle de bağlantılı ve uyumlu bir şekilde çalışılabilmesine olanak sağlar.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="tel:+905403251525" className="inline-flex items-center space-x-2 bg-gold text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-gold/90 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap">
                    <i className="ri-phone-line"></i>
                    <span>Bilgi ve Randevu Al</span>
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
                    alt="SAS Metodu - Ses Tabanlı Beyin Eğitimi"
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
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60 rounded-full group-hover:w-20 transition-all duration-300"></div>
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

        {/* About SAS Section */}
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
                  Son yıllarda nöroplastisite alanında yapılan araştırmalar SAS Metodu'nun gelişmesine olanak sağlamıştır. SAS Metodu kurucuları ve uygulayıcıları önderliğinde İngiltere, Hollanda, Almanya, Polonya, KKTC ve Türkiye başta olmak üzere uzman kadrosu ile danışanlarına hizmet etmektedir.
                </p>
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  Danışan için uygulanan bu yöntem basit ve tamamen güvenlidir. Sadece her gün özel olarak hazırlanmış ses ve müzik programlarını kulaklıklar aracılığı ile dinleyerek, beynin sağlıklı bir işleyişe sahip olması mümkündür. Bu işleyiş birkaç hafta sürdüğünde beynin yeni, kalıcı, hızlı ve etkili bir alışkanlık edinmesi sağlanır.
                </p>
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  Dikkat ve konsantrasyon ile ilgili problemler, okuma, yazma ve konuşma gibi birçok öğrenme güçlülükleri ve bazı davranışsal problemler beynin iki yarıküresinin ve ilgili olan merkezlerin nasıl kullanıldığı ile ilgilidir. Bu yüzden bu yeni metod ile çocukların ve yetişkinlerin yaşadığı farklı zorluk alanlarının geliştirilebilmesi mümkündür.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design Features Section */}
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
                Tipik Bir SAS Metodu'nun Dizaynı
              </h2>
            </motion.div>

            <div className="space-y-6">
              {designFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${feature.icon} text-2xl text-gold`}></i>
                  </div>
                  <p className="font-sans text-base text-darkgray/80 leading-relaxed pt-2">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Areas Section */}
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
                    src="/images/sas/sas-2.png"
                    alt="SAS Dinleti Programları"
                    className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-xl">
                    <div className="text-center text-white">
                      <i className="ri-headphone-line text-4xl"></i>
                      <p className="font-sans text-sm mt-2">Ses Tabanlı Terapi</p>
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
                    SAS Dinleti Programları Kimler İçindir?
                  </h2>
                  <p className="font-sans text-lg text-darkgray/70">
                    Programlar beyin fonksiyonlarının gelişimini desteklediği için uygulama alanı oldukça geniştir. Sıklıkla çalışılan alanlar:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {targetAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center space-x-3 bg-cream rounded-xl px-4 py-3"
                    >
                      <i className="ri-check-line text-gold text-lg"></i>
                      <span className="font-sans text-sm text-darkgray">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
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

        {/* Progress Areas Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Programlar Sonrası Hangi Alanlarda İlerlemeler Görülmektedir?
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Dinleti programları her bireyin ihtiyacına göre özel olarak hazırlandığı için sonuçlar bireyden bireye değişmektedir. Sonuç alınan alanlar:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {progressAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-cream rounded-2xl p-5 flex items-center space-x-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-arrow-up-line text-gold"></i>
                  </div>
                  <span className="font-sans text-sm text-darkgray font-medium">{area}</span>
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
                SAS Metodu ile Potansiyelinizi Keşfedin
              </h2>
              <p className="font-sans text-xl text-white/90">
                Beyin fonksiyonlarınızı geliştirmek ve yaşam kalitenizi artırmak için ilk adımı atın. İlk görüşme ücretsizdir.
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

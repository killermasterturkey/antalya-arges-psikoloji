import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasLifePage = () => {
  const supportAreas = [
    { icon: 'ri-heart-pulse-line', title: 'Beyin Felci', description: 'Felç rehabilitasyonu' },
    { icon: 'ri-emotion-line', title: 'Duygudurum Bozuklukları', description: 'Depresyon, kaygı, panik atak' },
    { icon: 'ri-brain-line', title: 'Bilişsel Bozukluklar', description: 'Demans, Alzheimer' },
  ];

  const cognitiveDisorders = [
    {
      icon: 'ri-mental-health-line',
      title: 'Demans',
      description: 'Halk arasında bunama olarak bilinen demans, 80 yaşındaki her 5 kişiden 1\'inde görülür.',
      detail: 'Demans hafıza başta olmak üzere; duygu, düşünme, motivasyon ve dil yeteneklerde bozulma olarak kendini göstererek kişinin edinmiş olduğu günlük becerilerinde ve sosyal hayatında zorluklar yaşamasına neden olan; beynin işlevini kaybetmesi halidir. Normal bir yaşlanma sürecinde beyin hücreleri ve hücreler arası bağlantılarda bozulmalar ve kayıplar görülür. Ancak bu bozulma miktarının artması ile beyin, fonksiyonlarını yerine getirmez hale gelir ve demans oluşur.'
    },
    {
      icon: 'ri-brain-line',
      title: 'Alzheimer',
      description: 'Demans hastalığının en yaygın çeşidi olarak tanımlanan alzheimer, bireyin ilk olarak hafızasını etkiler.',
      detail: '65 yaş üstü bireylerde 100 kişiden 8\'inde görülen alzheimer\'ın, 85 yaş üstü kişilerde görülme sıklığı %20\'dir. Kişiler en çok hafıza konusunda problem yaşasa da zamanla giyinme, yeme-içme, zaman ve yön tayini, idrar tutma gibi günlük işlerde davranışsal ve bilişsel bozulmalar yaşayabilir. Alzheimer hastalığının oluşumunda senil amioid plaklar, nörofibriler yumak oluşumu, sinaps-nöron kaybı ve beyinde küçülme gözlemlenir.'
    },
    {
      icon: 'ri-psychotherapy-line',
      title: 'Hafif Kognitif Bozukluk',
      description: 'Demans hastalığının önceki aşamaları olarak değerlendirilen hafif kognitif bozukluk yaşlanmaya bağlı olarak yaşanan bilişsel aktivitelerdeki azalmadır.',
      detail: 'Belirtileri olarak hafıza, dil ve karar verme gibi mekanizmalarda yavaşlama ya da kayıplar gözlenebilir olsa da bu azalmalar günlük hayatı etkileyecek şiddette değildir. Başlıca belirtiler: isimleri ve kelimeleri hatırlamada zorluk yaşama, randevuları unutma, özellikle film, kitap ve konuşmalardaki olay örgüsünü hatırlayamama, yol bulmada güçlük çekme.'
    },
  ];

  const moodDisorders = {
    icon: 'ri-emotion-line',
    title: 'Duygudurum Bozuklukları',
    description: 'Duygusal bozukluklar neticesinde işlevini yitiren bazı beyin bölümlerini yeniden harekete geçirebilmeyi amaçlar.',
    detail: 'Program kulaklıklar aracılığıyla dinletiler şeklinde gerçekleşir ve düşünme, mantık, planlama, konuşma, davranış ve beden kontrolü gibi merkezleri uyararak sağ ve sol beyin iletişimini güçlendirir, beynin bütün olarak çalışmasını destekler. Depresyon, kaygı bozukluğu, panik atak, travma sonrası stres bozukluğu gibi durumlarda kişinin yaşam kalitesini artırmayı hedefler.'
  };

  const strokeInfo = {
    title: 'Beyin Felci',
    intro: 'Felç ya da beyin işlev bozukluğunda tekrar konuşmayı ve fiziksel gelişimi sağlar. Felç (inme), beyni besleyen kan damarlarındaki akışın durmasıyla oluşan beyin hasarıdır.',
    leftHemisphere: 'Felç, beynin sol yarı küresini etkilerse, bireyde konuşamama, konuşulanı anlayamama, anlamlandıramama gibi dil ve konuşma bozuklukları, bellek sorunları, okuma ve yazma güçlükleri gibi günlük hayatını olumsuz yönde etkileyecek durumlar ortaya çıkabilir.',
    rightHemisphere: 'Felç, beynin sağ yarı küresini etkilerse, mekânı algılamada güçlük, motor beceriler ve denge koordinasyon merkezine bağlı hareket sorunları, konuşmaya duyguyu verememe, mekanik konuşma ve duygusal güçlük gibi yine günlük hayatı etkileyecek durumlar görülür.',
    neuroplasticity: 'Beynin nöroplastisite özelliği sayesinde, beyin kendini yenileme ve yeniden yapılandırma yetisine sahiptir. Nöroplastisite çalışmaları beynin bu özelliği üzerinde durarak felç sonrası kaybedilen yetilerin doğru ve güvenilir çalışmalar ile hızla geri kazanılabildiğini ortaya koymuştur.'
  };

  const rehabilitationServices = [
    'Fizik Tedavi (hareket, denge ve koordinasyon gibi)',
    'Konuşma Terapisi',
    'İş ve Uğraş Terapisi (bireyin kendi temel ihtiyaçlarını yeniden öğrenmesi)',
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
                  SAS-Life <span className="text-gold">Yaşlılar İçin</span>
                </h1>

                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  SAS-Life Dinleti Programı, yaşın ilerlemesiyle ortaya çıkan Bilişsel Bozukluklar, Unutkanlık, Beyin Felci gibi durumlarda uygulanır. Her bir program danışanın ihtiyacına göre tasarlanır.
                </p>

                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  Uygulama seans saatleri ve günleri bireyin durumuna göre belirlenir.
                </p>

                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-user-heart-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Yaşlılar İçin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-calendar-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Kişiye Özel</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-headphone-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Dinleti Programı</span>
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
                    alt="SAS Life - Yaşlılar İçin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-heart-pulse-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">Yaşlılar</p>
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
                SAS-Life Dinleti Programının Destek Sağladığı Alanlar
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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

        {/* Cognitive Disorders Section */}
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
                Bilişsel Bozukluklar
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-4xl mx-auto">
                Yaşın ilerlemesiyle beraber beyin yapısında oluşan değişikliklerle çeşitli işlevsel bozukluklar ortaya çıkar. Bu işlev bozuklukları kişilerin hayatında sıkça rastlanan demans, alzheimer, hafif kognitif bozukluk olarak kendini gösterebilir.
              </p>
            </motion.div>

            <div className="space-y-8">
              {cognitiveDisorders.map((disorder, index) => (
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
                      <i className={`${disorder.icon} text-3xl text-gold`}></i>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl font-bold text-darkgray">{disorder.title}</h3>
                      <p className="font-sans text-base text-darkgray/80">{disorder.description}</p>
                      <p className="font-sans text-sm text-darkgray/60 leading-relaxed">{disorder.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mood Disorders Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 lg:p-12 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className={`${moodDisorders.icon} text-4xl text-gold`}></i>
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl font-bold text-darkgray">{moodDisorders.title}</h2>
                  <p className="font-sans text-lg text-darkgray/80">{moodDisorders.description}</p>
                  <p className="font-sans text-base text-darkgray/60 leading-relaxed">{moodDisorders.detail}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stroke Section */}
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
                    src="/images/sas/sas-6.png"
                    alt="Beyin Felci Rehabilitasyonu"
                    className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                  {strokeInfo.title}
                </h2>
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  {strokeInfo.intro}
                </p>

                <div className="space-y-4">
                  <div className="bg-cream rounded-2xl p-5">
                    <h4 className="font-sans text-base font-semibold text-darkgray flex items-center mb-2">
                      <i className="ri-arrow-left-line text-gold mr-2"></i>
                      Sol Yarı Küre Etkisi
                    </h4>
                    <p className="font-sans text-sm text-darkgray/70">{strokeInfo.leftHemisphere}</p>
                  </div>

                  <div className="bg-cream rounded-2xl p-5">
                    <h4 className="font-sans text-base font-semibold text-darkgray flex items-center mb-2">
                      <i className="ri-arrow-right-line text-gold mr-2"></i>
                      Sağ Yarı Küre Etkisi
                    </h4>
                    <p className="font-sans text-sm text-darkgray/70">{strokeInfo.rightHemisphere}</p>
                  </div>
                </div>

                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  {strokeInfo.neuroplasticity}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rehabilitation Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Rehabilitasyon Hizmetleri
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Felç sonrasında uygulanacak tıbbi tedavinin yanında, rehabilitasyon sürecinin de doğru ve düzenli bir şekilde uygulanması, felçli bireylerin gelişimini olumlu yönde etkilemektedir.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rehabilitationServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-gold text-xl"></i>
                  </div>
                  <span className="font-sans text-sm text-darkgray">{service}</span>
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
                SAS-Life programı ile sevdiklerinizin yaşam kalitesini artırın. İlk değerlendirme görüşmesi ücretsizdir.
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

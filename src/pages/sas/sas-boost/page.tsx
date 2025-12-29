import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasBoostPage = () => {
  const supportAreas = [
    { icon: 'ri-speak-line', title: 'Dil ve Konuşma Bozuklukları', description: 'Konuşma gelişimini destekler' },
    { icon: 'ri-puzzle-line', title: 'Otizm Spektrum Bozukluğu', description: 'Sosyal iletişimi artırır' },
    { icon: 'ri-heart-line', title: 'Down Sendromu', description: 'Gelişimi destekler' },
    { icon: 'ri-brain-line', title: 'Bilişsel Bozukluklar', description: 'Beyin fonksiyonlarını geliştirir' },
  ];

  const modules = [
    {
      icon: 'ri-eye-line',
      title: 'Duyusal İşlemleme',
      description: 'Duyusal girdilerin daha iyi bir şekilde işlemlenmesini sağlar.',
    },
    {
      icon: 'ri-refresh-line',
      title: 'Tekrarlayan Davranışlar',
      description: 'Stresi ve kaygıyı azaltır.',
    },
    {
      icon: 'ri-speak-line',
      title: 'Dil & Konuşma',
      description: 'Beynin dil ve konuşmadan sorumlu alanlarını (özellikle sol hemisfer) uyarır.',
    },
    {
      icon: 'ri-team-line',
      title: 'Sosyal Beceriler',
      description: 'Sosyal iletişimin artmasını sağlar.',
    },
  ];

  const autismInfo = {
    title: 'Otizm Spektrum Bozukluğu',
    description: 'Stresi ve kaygıyı azaltır. Son yıllarda gelişen beyin görüntüleme teknikleri sayesinde dinletilerin beyinde yarattığı etki görülebilmektedir. Bu dinletilerin belli nörolojik sorunların azaltılmasını desteklemek amacıyla kullanılması da mümkündür.',
    benefits: [
      'Duyu işlemleme süreçlerinde iyileşme',
      'Dikkat ve konsantrasyon sürelerinde artış',
      'Dil ve konuşma becerilerinde gelişme',
      'İnce ve kaba motor becerileri ile denge sistem gelişimi',
      'Özgüven ve motivasyonda artış',
      'Sosyal iletişim becerilerinde gelişme',
    ]
  };

  const downSyndromeInfo = {
    title: 'Down Sendromu',
    description: 'Down Sendromu, genetik düzensizlik sonucu insanın 21. kromozom çiftinde fazladan bir kromozom bulunması durumudur. Vücutta yapısal ve fonksiyonel değişiklikler ile karakterize edilir.',
    detail: 'Down Sendromu sık sık zihinsel kavramadaki bozukluklar ve fiziksel gelişimin tipik yüz görünümü gibi farklı olmasıyla ilişkilendirilir. Down Sendromlu çocuklar iyi bir eğitimle normal bir birey şeklinde hayatlarını sürdürebilirler.',
    goals: ['Dikkat gelişmesi', 'Komut alma', 'Hareket gelişimi', 'Grup içi iletişim'],
    note: 'Down sendromlu çocukların eğitiminde müzik, sanat, oyun ve dramanın özel önemi vardır. Bu çocukların müziğe karşı duyarlılıkları fazladır. Ses ve hareket ritmi büyük oranda ilgilerini çeker.'
  };

  const speechInfo = {
    title: 'Dil & Konuşma Bozuklukları',
    intro: 'Beynin dil ve konuşmadan sorumlu alanlarını (özellikle sol hemisfer) uyarır.',
    explanation: 'Dil ve konuşma bozuklukları pek çok değişik biçimde ortaya çıkar ve çocuklar bir ya da birkaç problemi eş zamanlı yaşayabilirler. Duymayı engelleyen bir yapısal bozukluk yoksa eğer dil ve konuşma bozukluklarının birçoğu duyulan seslerin beyinde nasıl işlendiğiyle alakalıdır.',
    hemisphereInfo: 'Beynin sol yarı küresi konuşma ve dili anlamadan sorumludur. Sol kulaktan duyulan sesler beynin sağ küresine, sağ kulaktan duyulan sesler ise beynin sol yarıküresine iletilir. Dolayısıyla dil ve konuşma gelişiminde sağ kulak baskınlığı ve sol yarı küresinde yer alan dil ve konuşma merkezinin etkin olmasının önemi büyüktür.',
    problems: [
      'Gecikmiş dil ve konuşma bozuklukları',
      'Artikülasyon, fonolojik bozukluk',
      'Dili anlamaya ve ifade etmeye ilişkin zorluklar',
      'Nörolojik kökenli bozukluklar',
      'Akıcı konuşma problemi',
      'Ses bozukluğu',
    ]
  };

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
                  SAS-Boost <span className="text-gold">Gelişimsel Sorunlar İçin</span>
                </h1>

                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  Çocuklar için nörogelişimsel bozukluklar arasında yer alan Otizm Spektrum Bozukluğu, Asperger Sendromu, Down Sendromu ve Serebral Palsi gibi durumlarda günlük seanslarla 21 ila 24 gün boyunca uygulanır.
                </p>

                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  Müzik ve konuşma dinletilerine ek olarak programlar da frekans, kelime ve zaman eğitim elemanları da içerebilir. İsteğe bağlı olarak çocuğun ses kaydı alınarak konuşma gelişimini teşvik etmek için kullanılabilir.
                </p>

                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">21-24 Gün</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-headphone-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Günlük Seanslar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-music-2-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Müzik & Konuşma</span>
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
                    alt="SAS Boost - Gelişimsel Sorunlar İçin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-user-smile-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">Çocuklar</p>
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
                SAS-Boost Dinleti Programının Destek Sağladığı Alanlar
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
                    <h3 className="font-sans font-semibold text-base text-darkgray">{item.title}</h3>
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
                  className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className={`${module.icon} text-3xl text-gold`}></i>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-darkgray">{module.title}</h3>
                      <p className="font-sans text-base text-darkgray/70">{module.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Autism Section */}
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
                    src="/images/sas/sas-3.png"
                    alt="Otizm Spektrum Bozukluğu"
                    className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
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
                  {autismInfo.title}
                </h2>
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  {autismInfo.description}
                </p>

                <div className="space-y-3">
                  <p className="font-sans text-base font-semibold text-darkgray">Otizm için uygulanan dinleti programı sonucunda çocuklarda hedeflenen gelişimler:</p>
                  {autismInfo.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white rounded-xl px-4 py-3">
                      <i className="ri-check-line text-gold text-lg"></i>
                      <span className="font-sans text-sm text-darkgray">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Down Syndrome Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                  {downSyndromeInfo.title}
                </h2>
                <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                  {downSyndromeInfo.description}
                </p>
              </div>

              <div className="bg-cream rounded-3xl p-8 lg:p-12 space-y-6">
                <p className="font-sans text-base text-darkgray/80 leading-relaxed">
                  {downSyndromeInfo.detail}
                </p>

                <div>
                  <p className="font-sans text-base font-semibold text-darkgray mb-4">Eğitimin temel hedefleri:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {downSyndromeInfo.goals.map((goal, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 text-center">
                        <i className="ri-check-double-line text-gold text-xl mb-2"></i>
                        <p className="font-sans text-sm text-darkgray">{goal}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="font-sans text-base text-darkgray/70 leading-relaxed italic">
                  {downSyndromeInfo.note}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Speech Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                  {speechInfo.title}
                </h2>
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  {speechInfo.intro}
                </p>
                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  {speechInfo.explanation}
                </p>
                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  {speechInfo.hemisphereInfo}
                </p>
                <p className="font-sans text-sm text-darkgray/60">
                  Kısaca, beynin sağ ve sol yarı kürenin arasındaki iletişimin ve her bir kürenin fonksiyonlarının gelişimi bireyin dil ve konuşma becerilerini belirleyen faktörlerdir.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <p className="font-sans text-base font-semibold text-darkgray">Çocuklarda en sık görülen dil ve konuşma problemleri:</p>
                {speechInfo.problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-5 flex items-center space-x-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-speak-line text-gold"></i>
                    </div>
                    <span className="font-sans text-sm text-darkgray">{problem}</span>
                  </motion.div>
                ))}
              </motion.div>
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
                Çocuğunuzun Gelişimini Destekleyin
              </h2>
              <p className="font-sans text-xl text-white/90">
                SAS-Boost programı ile çocuğunuzun potansiyelini ortaya çıkarın. İlk değerlendirme görüşmesi ücretsizdir.
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

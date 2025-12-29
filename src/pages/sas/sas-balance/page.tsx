import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasBalancePage = () => {
  const supportAreas = [
    { icon: 'ri-emotion-line', title: 'Duygudurum Bozuklukları', description: 'Kaygı, depresyon, öfke kontrolü' },
    { icon: 'ri-briefcase-line', title: 'İş Performansı', description: 'Yaratıcılık, üretkenlik, motivasyon' },
    { icon: 'ri-user-star-line', title: 'Kişisel Gelişim', description: 'Dikkat, odaklanma, stres yönetimi' },
  ];

  const modules = [
    {
      icon: 'ri-emotion-sad-line',
      title: 'Kaygı & Korku',
      description: 'Zihni ve bedeni rahatlatarak negatif düşüncelerden kurtulma.',
    },
    {
      icon: 'ri-mental-health-line',
      title: 'Depresyon',
      description: 'Olumsuz ve karamsarlıktan kurtarıp kişinin özgüveninin gelişmesinde yardımcı olur.',
    },
    {
      icon: 'ri-fire-line',
      title: 'Öfke Kontrolü',
      description: 'Dürtüsel tepkileri azaltarak bilişsel yetenekleri artırmak.',
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Yaratıcılık & Üretkenlik',
      description: 'Yaratıcılık, üretkenlik ve planlama becerilerini artırmak.',
    },
  ];

  const angerInfo = {
    title: 'Öfke Kontrolü',
    intro: 'Öfke; istenmeyen sonuçlar, karşılanmamış istek ve beklentiler sonucu ortaya çıkan doğal, evrensel bir duygudur. Genel olarak öfke duygusu; sahip olunan zor hayat koşulları, sosyo-ekonomik yetersizlik, çaresizlik, haksızlık ve engellenmişlik durumlarında görülebilir.',
    positive: 'Bilinenin aksine yaşanan öfkenin doğru aktarılması, bireyin kendi perspektifini ifade etmesini sağlayarak, insan ilişkilerinde yapıcı rol oynayabilir. Aslında öfke halini günlük hayatta çok sık yaşar ve topluma uyum sağlamak için bu hissimizi kontrol ederek dış dünyaya yansıtmamaya ya da mantıklı bir açıklamasını bulmaya çalışırız.',
    negative: 'Ancak öfkeyi aşırı bir seviyede yaşamak ve bu duygunun kontrol edilememesi halinde kişi ruhsal, fiziksel ve sosyal anlamda olumsuz etkilenebilir.',
    symptoms: [
      'Kan basıncında artış',
      'Kalp ve mide ağrısı',
      'Kalp atışında hızlanma',
      'Enerjiyi arttıran adrenalin yükselimi',
      'Mutsuzluk ve gerginlik',
      'Stres altında hissetme',
      'Yüksek sesle konuşma',
      'Saldırganlık',
    ]
  };

  const creativityInfo = {
    title: 'Yaratıcılık & Üretkenlik',
    description: 'İş hayatında yaratıcılığı ve üretkenliği, odaklanmayı ve motivasyonu artırmayı, stresi azaltmayı hedefler.',
    detail: 'Birey için uygulama oldukça kolaydır. Bir kaç hafta boyunca size özel hazırlanan dinleti programlarıyla kaygı ve stresiniz azalırken, dikkat ve üretkenliğiniz artar, iş motivasyonunuz ve performansınız yükselir.',
    research: 'Araştırmalara göre yaratıcılık, dopamin nöro-transmitterinin salgılanmasıyla alakalıdır; birçok bilişsel sürece bağlı olarak ortaya çıkar ve geliştirilebilir. Yaratıcılığın artmasıyla üretkenlik de artar.'
  };

  const focusInfo = {
    title: 'Dikkat Ve Odaklanma',
    description: 'İş hayatında belki de yaşanılan en büyük problem, çalışanların yapılması gereken işe yeterince dikkatini verememesidir.',
    causes: [
      'Aynı anda birden fazla göreve sahip olma',
      'Düşüncelerin ev, arkadaş hayatı gibi başka yerlerde olması',
      'Açık ofis ortamında diğer etmenlerden dolayı dikkatin dağılması',
      'İnternet ortamında geçirilen zaman',
    ],
    multitasking: 'Aynı anda birden fazla eylemi bir arada yapmaya çalışma "multitasking" (çoklu görev) olarak adlandırılır. Yapılan araştırmalara göre, multitasking yapanlar, aynı anda yapılan işlerden optimum seviyede performans alamazlar.'
  };

  const motivationInfo = {
    title: 'Motivasyon',
    description: 'Motivasyon bir insanı belirli bir amaç için harekete geçiren güç demektir.',
    components: ['Harekete geçme', 'Devamlılık', 'Yoğunluk'],
    detail: 'Sahip olunan motivasyonun nedeni ve seviyesi kişiden kişiye, duruma ve zamana göre değişebilir. İnsanları motive eden faktörler konusunda yapılan çalışmalar gösteriyor ki, motive olmak bir işin nicelik ve nitelik anlamında tamamlanmasını etkileyerek iş performansında değişimlere neden olup bireyde tatmin hissini sağlayabilir.',
    factors: ['İşin doğası (sağlanan imkanlar)', 'Hedef', 'Teşvik (ödül/ceza)', 'Yeterlilik hissi', 'Amaca ve kapasiteye olan inanç', 'İşin zorluk seviyesi', 'Adalet ve eşitlik duygusu']
  };

  const stressInfo = {
    title: 'Stres Yönetimi',
    description: 'Stres, bulunulan çevre koşullarının bireyi etkilemesi sonucu, vücudun çeşitli hormonlar salgılayarak mevcut duruma uyum için zihinsel ve bedensel olarak harekete geçmesi durumudur.',
    note: 'Bilinenin aksine stres, beynimizin verdiği normal bir reaksiyondur. Ancak her şeyde olduğu gibi yaşanan fazla stres, hayatı hem duygusal hem de fiziksel olarak zorlaştırarak bireyin ilişkilerinde ve iş ortamında çeşitli problemlere yol açabilir.',
    emotionalSymptoms: [
      'Hemen sinirlenmek',
      'Kaygı',
      'Sorumluluklardan kaçma',
      'Odaklanmada problem',
      'Kararsızlık',
      'Kontrolü kolayca kaybetme hissi',
      'Zihni dinlendirme ve dinginleştirmede zorluk çekme',
      'Yalnız, değersiz ve depresif hissetme',
      'Alkol ve sigara gibi madde tüketimi isteğinde artış',
    ],
    physicalSymptoms: [
      'Mide rahatsızlıkları',
      'Çenede kenetlenme, dişleri sıkma ya da gıcırdatma',
      'Titreme',
      'İştahta değişiklik',
      'Ayak ve bacak sallama, tırnak yeme',
      'Ellerde ve ayaklarda aşırı terleme ya da soğuma',
      'Göğüs ağrısı ve hızlı kalp atışı',
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
                  <i className="ri-scales-3-line text-gold"></i>
                  <span className="font-sans text-sm text-darkgray">SAS Balance Programı</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  SAS-Balance <span className="text-gold">Yetişkinler İçin</span>
                </h1>

                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  SAS-Balance Dinleti Programı duygudurum problemi yaşayan yetişkinlerde psikolojik bozuklukların giderilmesi için hazırlanmıştır. Dinleti programı iş ve özel hayatın getirdiği zorluklarla baş edebilmeye yardımcı olur.
                </p>

                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  Dinleti seansları genellikle 21 ve 24 gün boyunca, kişinin durumuna göre günlük seanslar halinde uygulanır.
                </p>

                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">21-24 Gün</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-user-heart-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Yetişkinler İçin</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-headphone-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Günlük Seanslar</span>
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
                    src="/images/sas/sas-2.png"
                    alt="SAS Balance - Yetişkinler İçin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-mental-health-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">Yetişkinler</p>
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
                SAS-Balance Dinleti Programının Destek Sağladığı Alanlar
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

        {/* Anger Control Section */}
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
                    alt="Öfke Kontrolü"
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
                  {angerInfo.title}
                </h2>
                <p className="font-sans text-base text-darkgray/80 leading-relaxed">
                  {angerInfo.intro}
                </p>
                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  {angerInfo.positive}
                </p>
                <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                  {angerInfo.negative}
                </p>

                <div className="bg-white rounded-2xl p-5">
                  <p className="font-sans text-sm font-semibold text-darkgray mb-3">Öfke belirtileri:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {angerInfo.symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <i className="ri-checkbox-circle-line text-gold text-sm"></i>
                        <span className="font-sans text-xs text-darkgray/70">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Creativity & Productivity Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-cream rounded-3xl p-8 lg:p-12 space-y-6"
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-lightbulb-flash-line text-4xl text-gold"></i>
                </div>
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl font-bold text-darkgray">{creativityInfo.title}</h2>
                  <p className="font-sans text-lg text-darkgray/80">{creativityInfo.description}</p>
                  <p className="font-sans text-base text-darkgray/70 leading-relaxed">{creativityInfo.detail}</p>
                  <p className="font-sans text-sm text-darkgray/60 italic">{creativityInfo.research}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Focus Section */}
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
                  {focusInfo.title}
                </h2>
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
                  {focusInfo.description}
                </p>

                <div className="space-y-3">
                  <p className="font-sans text-base font-semibold text-darkgray">Bu durumun nedenleri:</p>
                  {focusInfo.causes.map((cause, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white rounded-xl px-4 py-3">
                      <i className="ri-arrow-right-s-line text-gold text-lg mt-0.5"></i>
                      <span className="font-sans text-sm text-darkgray">{cause}</span>
                    </div>
                  ))}
                </div>

                <p className="font-sans text-sm text-darkgray/60 italic">
                  {focusInfo.multitasking}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-3xl p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="ri-rocket-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-darkgray">{motivationInfo.title}</h3>
                      <p className="font-sans text-sm text-darkgray/70 mt-2">{motivationInfo.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {motivationInfo.components.map((component, index) => (
                      <span key={index} className="bg-gold/20 text-darkgray px-4 py-2 rounded-full font-sans text-sm">
                        {component}
                      </span>
                    ))}
                  </div>

                  <p className="font-sans text-sm text-darkgray/60">
                    {motivationInfo.detail}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {motivationInfo.factors.map((factor, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <i className="ri-check-line text-gold text-sm"></i>
                        <span className="font-sans text-xs text-darkgray/70">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stress Management Section */}
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
                {stressInfo.title}
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                {stressInfo.description}
              </p>
              <p className="font-sans text-base text-darkgray/60 max-w-3xl mx-auto">
                {stressInfo.note}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-cream rounded-3xl p-8"
              >
                <h3 className="font-serif text-xl font-bold text-darkgray mb-6 flex items-center">
                  <i className="ri-emotion-line text-gold mr-3"></i>
                  Duygusal Belirtiler
                </h3>
                <div className="space-y-3">
                  {stressInfo.emotionalSymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className="ri-checkbox-circle-line text-gold"></i>
                      <span className="font-sans text-sm text-darkgray/70">{symptom}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-cream rounded-3xl p-8"
              >
                <h3 className="font-serif text-xl font-bold text-darkgray mb-6 flex items-center">
                  <i className="ri-body-scan-line text-gold mr-3"></i>
                  Fiziksel Belirtiler
                </h3>
                <div className="space-y-3">
                  {stressInfo.physicalSymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className="ri-checkbox-circle-line text-gold"></i>
                      <span className="font-sans text-sm text-darkgray/70">{symptom}</span>
                    </div>
                  ))}
                </div>
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
                İş ve Özel Hayatınızda Denge Kurun
              </h2>
              <p className="font-sans text-xl text-white/90">
                SAS-Balance programı ile duygudurum problemlerinizi çözün, yaşam kalitenizi artırın. İlk değerlendirme görüşmesi ücretsizdir.
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

export default SasBalancePage;

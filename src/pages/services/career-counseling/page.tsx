import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const CareerCounselingPage = () => {
  const benefits = [
    {
      icon: 'ri-compass-line',
      title: 'Net Hedefler',
      description: 'Kariyer hedefleriniz netleşir ve yol haritası oluşur'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Güçlü Yönler',
      description: 'Yeteneklerinizi ve ilgi alanlarınızı keşfedersiniz'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Motivasyon',
      description: 'İş motivasyonunuz ve doyumunuz artar'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Başarı',
      description: 'Kariyer başarınız ve memnuniyetiniz yükselir'
    }
  ];

  const issues = [
    'Kariyer seçimi ve yönelim belirsizliği',
    'İş değişikliği kararı',
    'Kariyer geçişi ve yeniden yönlenme',
    'İş-yaşam dengesi sorunları',
    'İş yerinde stres ve tükenmişlik',
    'Performans kaygısı',
    'Terfi ve ilerleme engelleri',
    'İşsizlik ve iş arama süreci',
    'Emeklilik planlaması',
    'Girişimcilik kararı',
    'Akademik kariyer planlaması',
    'Yetenek ve ilgi alanlarını keşfetme'
  ];

  const process = [
    {
      step: '01',
      title: 'Değerlendirme',
      description: 'Kişilik, yetenek, ilgi ve değerlerinizin kapsamlı analizi'
    },
    {
      step: '02',
      title: 'Keşif',
      description: 'Kariyer seçeneklerinin araştırılması ve değerlendirilmesi'
    },
    {
      step: '03',
      title: 'Planlama',
      description: 'Kısa ve uzun vadeli kariyer hedeflerinin belirlenmesi'
    },
    {
      step: '04',
      title: 'Strateji',
      description: 'Hedeflere ulaşmak için eylem planının oluşturulması'
    },
    {
      step: '05',
      title: 'Uygulama',
      description: 'Planın hayata geçirilmesi ve destek sağlanması'
    },
    {
      step: '06',
      title: 'Takip',
      description: 'İlerlemenin izlenmesi ve gerekli düzenlemelerin yapılması'
    }
  ];

  const services = [
    {
      icon: 'ri-user-search-line',
      title: 'Kişilik ve Yetenek Analizi',
      description: 'Bilimsel testler ve görüşmelerle güçlü yönlerinizi keşfedin'
    },
    {
      icon: 'ri-road-map-line',
      title: 'Kariyer Yol Haritası',
      description: 'Hedeflerinize ulaşmak için adım adım plan oluşturun'
    },
    {
      icon: 'ri-file-text-line',
      title: 'CV ve Mülakat Hazırlığı',
      description: 'Profesyonel CV hazırlama ve mülakat teknikleri öğrenin'
    },
    {
      icon: 'ri-exchange-line',
      title: 'Kariyer Geçişi Desteği',
      description: 'Yeni bir kariyere geçiş sürecinde rehberlik alın'
    },
    {
      icon: 'ri-scales-line',
      title: 'İş-Yaşam Dengesi',
      description: 'Kariyer ve özel yaşam dengesini sağlayın'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Kariyer Gelişimi',
      description: 'Mevcut kariyerinizde ilerleme stratejileri geliştirin'
    }
  ];

  const targetGroups = [
    {
      title: 'Lise ve Üniversite Öğrencileri',
      description: 'Bölüm seçimi ve kariyer planlaması'
    },
    {
      title: 'Yeni Mezunlar',
      description: 'İş hayatına başlangıç ve ilk adımlar'
    },
    {
      title: 'Kariyer Değişikliği Düşünenler',
      description: 'Yeni bir alana geçiş planlaması'
    },
    {
      title: 'Profesyoneller',
      description: 'Kariyer ilerlemesi ve gelişim'
    },
    {
      title: 'Girişimciler',
      description: 'İş kurma ve yönetme becerileri'
    },
    {
      title: 'Emeklilik Öncesi',
      description: 'Emeklilik sonrası yaşam planlaması'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-olive/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-gold/10 rounded-full mb-6">
                <span className="text-gold text-sm font-medium">Kariyer Danışmanlığı</span>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                Kariyerinizi Şekillendirin
              </h1>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Kariyer danışmanlığı, doğru kariyer seçimi yapmanıza, mevcut kariyerinizde
                ilerlemenize veya kariyer değişikliği sürecinizde size rehberlik eder.
                Yeteneklerinizi keşfedin, hedeflerinizi belirleyin ve başarılı bir kariyer
                yolculuğuna çıkın.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-olive text-white rounded-lg hover:bg-olive/90 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                  Randevu Alın
                </button>
                <button className="px-8 py-4 bg-white text-olive border-2 border-olive rounded-lg hover:bg-olive/5 transition-all duration-300 whitespace-nowrap">
                  Daha Fazla Bilgi
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20career%20counselor%20meeting%20with%20young%20client%20in%20modern%20bright%20office%20discussing%20career%20plans%20with%20documents%20and%20laptop%20on%20desk%20motivational%20atmosphere%20contemporary%20workspace%20natural%20lighting%20hopeful%20and%20inspiring%20mood%20clean%20minimalist%20design&width=600&height=700&seq=career001&orientation=portrait"
                  alt="Kariyer Danışmanlığı"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-olive/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Hangi Konularda Destek Veriyoruz?
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Kariyer yolculuğunuzun her aşamasında yanınızdayız
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {issues.map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-cream rounded-lg hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 bg-olive rounded-full flex-shrink-0"></div>
                <span className="text-charcoal">{issue}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Sunduğumuz Hizmetler
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Kariyer hedeflerinize ulaşmanız için kapsamlı destek
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-olive/20 transition-colors duration-300">
                  <i className={`${service.icon} text-3xl text-olive`}></i>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Danışmanlık Süreci
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Kariyer danışmanlığı süreci, ihtiyaçlarınıza göre şekillenir
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-olive text-white rounded-full flex items-center justify-center font-serif text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-serif text-2xl text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Kimler İçin Uygundur?
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Kariyer danışmanlığı, her yaştan ve her kariyer aşamasından kişi için uygundur
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {targetGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-serif text-lg text-charcoal mb-3">{group.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{group.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Kariyer Danışmanlığının Faydaları
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Profesyonel destek ile kariyer hedeflerinize ulaşın
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive/20 transition-colors duration-300">
                  <i className={`${benefit.icon} text-3xl text-olive`}></i>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{benefit.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl mb-6">
              Kariyer Yolculuğunuza Başlayın
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Kariyer danışmanlığı ile ilgili sorularınız için bizimle iletişime geçin.
              Uzman kariyer danışmanlarımız size yardımcı olmak için burada.
            </p>
            <button className="px-8 py-4 bg-white text-olive rounded-lg hover:bg-cream transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Hemen Randevu Alın
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerCounselingPage;

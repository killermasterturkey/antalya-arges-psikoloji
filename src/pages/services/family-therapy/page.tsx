import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const FamilyTherapyPage = () => {
  const benefits = [
    {
      icon: 'ri-heart-line',
      title: 'İletişim Güçlenir',
      description: 'Aile bireyleri arasında sağlıklı iletişim kurulur'
    },
    {
      icon: 'ri-team-line',
      title: 'Bağlar Kuvvetlenir',
      description: 'Aile bağları ve dayanışma güçlenir'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Sorunlar Çözülür',
      description: 'Aile içi çatışmalar yapıcı şekilde çözümlenir'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Sınırlar Belirlenir',
      description: 'Sağlıklı sınırlar ve roller netleşir'
    }
  ];

  const issues = [
    'Aile içi iletişim sorunları',
    'Ebeveyn-çocuk çatışmaları',
    'Kardeş rekabeti',
    'Boşanma ve ayrılık süreçleri',
    'Üvey aile uyumu',
    'Ergen sorunları',
    'Kayıp ve yas süreçleri',
    'Aile içi şiddet',
    'Madde bağımlılığı',
    'Nesiller arası çatışmalar'
  ];

  const process = [
    {
      step: '01',
      title: 'İlk Görüşme',
      description: 'Tüm aile bireyleriyle tanışma ve sorunların dinlenmesi'
    },
    {
      step: '02',
      title: 'Değerlendirme',
      description: 'Aile dinamiklerinin ve ilişki örüntülerinin analizi'
    },
    {
      step: '03',
      title: 'Hedef Belirleme',
      description: 'Ailenin ortak hedeflerinin ve beklentilerinin netleştirilmesi'
    },
    {
      step: '04',
      title: 'Terapi Süreci',
      description: 'Düzenli seanslarla aile dinamiklerinin iyileştirilmesi'
    },
    {
      step: '05',
      title: 'Takip',
      description: 'Değişimlerin kalıcılığının desteklenmesi'
    }
  ];

  const approaches = [
    {
      name: 'Sistemik Aile Terapisi',
      description: 'Aileyi bir sistem olarak ele alır ve etkileşimleri inceler'
    },
    {
      name: 'Yapısal Aile Terapisi',
      description: 'Aile yapısını ve hiyerarşisini düzenlemeye odaklanır'
    },
    {
      name: 'Stratejik Aile Terapisi',
      description: 'Sorun odaklı, çözüm merkezli yaklaşım kullanır'
    },
    {
      name: 'Anlatı Terapisi',
      description: 'Ailenin hikayesini yeniden yapılandırır'
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
                <span className="text-gold text-sm font-medium">Aile Terapisi</span>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                Ailenizi Bir Araya Getirin
              </h1>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Aile terapisi, aile bireylerinin birbirleriyle olan ilişkilerini iyileştirmeyi,
                sağlıklı iletişim kurmayı ve aile içi sorunları çözmeyi amaçlar. Ailenizi daha
                güçlü ve mutlu bir birim haline getirmek için yanınızdayız.
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
                  src="https://readdy.ai/api/search-image?query=warm%20happy%20family%20sitting%20together%20in%20cozy%20living%20room%20having%20meaningful%20conversation%20soft%20natural%20lighting%20peaceful%20atmosphere%20modern%20interior%20design%20emotional%20connection%20between%20family%20members%20comfortable%20home%20environment%20therapeutic%20setting%20pastel%20tones&width=600&height=700&seq=family001&orientation=portrait"
                  alt="Aile Terapisi"
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
              Hangi Durumlarda Yardımcı Oluruz?
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Aile terapisi, birçok farklı durumda ailelere destek sağlar
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

      {/* Benefits Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Aile Terapisinin Faydaları
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Aile terapisi, tüm aile bireylerinin yaşam kalitesini artırır
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
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
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
              Terapi Süreci Nasıl İşler?
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Aile terapisi süreci, ailenizin ihtiyaçlarına göre şekillenir
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

      {/* Approaches Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Kullandığımız Yaklaşımlar
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Bilimsel temelli ve kanıtlanmış terapi yöntemleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-serif text-xl text-charcoal mb-3">{approach.name}</h3>
                <p className="text-charcoal/60 leading-relaxed">{approach.description}</p>
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
              Aileniz İçin İlk Adımı Atın
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Aile terapisi ile ilgili sorularınız için bizimle iletişime geçin.
              Uzman psikologlarımız size yardımcı olmak için burada.
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

export default FamilyTherapyPage;

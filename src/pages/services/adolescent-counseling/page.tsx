import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const AdolescentCounselingPage = () => {
  const benefits = [
    {
      icon: 'ri-user-heart-line',
      title: 'Kimlik Gelişimi',
      description: 'Sağlıklı kimlik oluşumu ve benlik saygısı gelişimi'
    },
    {
      icon: 'ri-emotion-line',
      title: 'Duygusal Denge',
      description: 'Duyguları tanıma ve yönetme becerileri kazanma'
    },
    {
      icon: 'ri-group-line',
      title: 'Sosyal Beceriler',
      description: 'Akran ilişkileri ve sosyal uyum güçlenir'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Akademik Başarı',
      description: 'Motivasyon artışı ve okul başarısında iyileşme'
    }
  ];

  const issues = [
    'Ergenlik dönemi uyum sorunları',
    'Okul başarısızlığı ve motivasyon kaybı',
    'Akran zorbalığı',
    'Sosyal medya bağımlılığı',
    'Özgüven eksikliği',
    'Aile içi çatışmalar',
    'Kaygı ve depresyon',
    'Öfke kontrolü sorunları',
    'Kimlik karmaşası',
    'Madde kullanımı riski',
    'Yeme bozuklukları',
    'Uyku sorunları'
  ];

  const process = [
    {
      step: '01',
      title: 'Tanışma',
      description: 'Ergenle güven ilişkisi kurma ve rahat bir ortam oluşturma'
    },
    {
      step: '02',
      title: 'Değerlendirme',
      description: 'Ergenlerin duygusal, sosyal ve akademik durumunun analizi'
    },
    {
      step: '03',
      title: 'Hedef Belirleme',
      description: 'Ergen ve ailenin beklentilerinin netleştirilmesi'
    },
    {
      step: '04',
      title: 'Danışmanlık Süreci',
      description: 'Bireysel seanslar ve gerektiğinde aile görüşmeleri'
    },
    {
      step: '05',
      title: 'Takip ve Destek',
      description: 'Gelişimin izlenmesi ve sürekli destek sağlanması'
    }
  ];

  const topics = [
    {
      icon: 'ri-mental-health-line',
      title: 'Duygusal Gelişim',
      description: 'Duyguları tanıma, ifade etme ve yönetme becerileri'
    },
    {
      icon: 'ri-team-line',
      title: 'Sosyal İlişkiler',
      description: 'Arkadaşlık ilişkileri, romantik ilişkiler ve sosyal beceriler'
    },
    {
      icon: 'ri-parent-line',
      title: 'Aile İletişimi',
      description: 'Ebeveynlerle sağlıklı iletişim ve bağımsızlık dengesi'
    },
    {
      icon: 'ri-compass-line',
      title: 'Gelecek Planlaması',
      description: 'Kariyer seçimi, hedef belirleme ve karar verme becerileri'
    },
    {
      icon: 'ri-shield-line',
      title: 'Riskli Davranışlar',
      description: 'Madde kullanımı, cinsellik ve güvenlik konularında farkındalık'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Stres Yönetimi',
      description: 'Sınav kaygısı, performans baskısı ve stresle başa çıkma'
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
                <span className="text-gold text-sm font-medium">Ergen Danışmanlığı</span>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                Ergenlik Yolculuğunda Yanınızdayız
              </h1>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Ergenlik dönemi, fiziksel, duygusal ve sosyal değişimlerin yoğun yaşandığı
                zorlu bir süreçtir. Ergen danışmanlığı, bu dönemde gençlerin kendilerini
                keşfetmelerine, zorluklarla başa çıkmalarına ve sağlıklı bir kimlik
                geliştirmelerine yardımcı olur.
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
                  src="https://readdy.ai/api/search-image?query=confident%20teenage%20student%20sitting%20in%20modern%20counseling%20room%20having%20positive%20conversation%20with%20therapist%20bright%20natural%20lighting%20comfortable%20atmosphere%20hopeful%20expression%20contemporary%20office%20setting%20warm%20colors%20professional%20environment%20supportive%20mood&width=600&height=700&seq=adolescent001&orientation=portrait"
                  alt="Ergen Danışmanlığı"
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
              Ergenlik döneminde karşılaşılan çeşitli zorluklarda yanınızdayız
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

      {/* Topics Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Çalıştığımız Ana Konular
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Ergen danışmanlığında odaklandığımız temel alanlar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-olive/20 transition-colors duration-300">
                  <i className={`${topic.icon} text-3xl text-olive`}></i>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{topic.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{topic.description}</p>
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
              Danışmanlığın Faydaları
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Ergen danışmanlığı, gençlerin yaşam kalitesini artırır
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

      {/* Process Section */}
      <section className="py-20 bg-cream">
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
              Ergen danışmanlığı süreci, gencin ihtiyaçlarına göre şekillenir
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

      {/* CTA Section */}
      <section className="py-20 bg-olive text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl mb-6">
              Ergeniniz İçin Destek Alın
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ergen danışmanlığı ile ilgili sorularınız için bizimle iletişime geçin.
              Uzman psikologlarımız size ve ergeninize yardımcı olmak için burada.
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

export default AdolescentCounselingPage;

import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const SexualTherapyPage = () => {
  const benefits = [
    {
      icon: 'ri-heart-line',
      title: 'İlişki Kalitesi',
      description: 'Cinsel yaşam ve ilişki kalitesi artar'
    },
    {
      icon: 'ri-chat-heart-line',
      title: 'İletişim',
      description: 'Cinsellik hakkında açık iletişim kurulur'
    },
    {
      icon: 'ri-user-smile-line',
      title: 'Özgüven',
      description: 'Cinsel özgüven ve memnuniyet artar'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Güven',
      description: 'Partnerler arası güven ve yakınlık güçlenir'
    }
  ];

  const issues = [
    'Cinsel isteksizlik',
    'Erektil disfonksiyon',
    'Erken boşalma',
    'Orgazm sorunları',
    'Vajinismus',
    'Disparoni (ağrılı cinsel ilişki)',
    'Cinsel kaygı ve performans baskısı',
    'Cinsel kimlik ve yönelim sorunları',
    'Cinsel travma sonrası sorunlar',
    'İlişkide cinsel uyumsuzluk',
    'Cinsel bağımlılık',
    'Doğum sonrası cinsel sorunlar'
  ];

  const process = [
    {
      step: '01',
      title: 'Değerlendirme',
      description: 'Cinsel sağlık geçmişi ve mevcut sorunların detaylı değerlendirilmesi'
    },
    {
      step: '02',
      title: 'Eğitim',
      description: 'Cinsel sağlık, anatomi ve fizyoloji hakkında bilgilendirme'
    },
    {
      step: '03',
      title: 'İletişim Becerileri',
      description: 'Cinsellik hakkında sağlıklı iletişim kurma becerilerinin geliştirilmesi'
    },
    {
      step: '04',
      title: 'Davranışsal Teknikler',
      description: 'Cinsel işlev sorunlarına yönelik özel egzersizler ve teknikler'
    },
    {
      step: '05',
      title: 'Takip',
      description: 'İlerlemenin izlenmesi ve gerektiğinde planın güncellenmesi'
    }
  ];

  const approaches = [
    {
      icon: 'ri-mind-map',
      title: 'Bilişsel Davranışçı Terapi',
      description: 'Cinsel işlev bozukluklarına yol açan düşünce ve davranış kalıplarının değiştirilmesi'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Duyusal Odaklanma',
      description: 'Performans kaygısını azaltmak için dokunma ve yakınlık egzersizleri'
    },
    {
      icon: 'ri-team-line',
      title: 'Çift Terapisi',
      description: 'İlişki dinamiklerinin ve cinsel uyumun iyileştirilmesi'
    },
    {
      icon: 'ri-mental-health-line',
      title: 'Psikodinamik Yaklaşım',
      description: 'Geçmiş yaşantıların cinsel yaşam üzerindeki etkilerinin anlaşılması'
    }
  ];

  const topics = [
    'Cinsel istek ve uyarılma',
    'Cinsel işlev bozuklukları',
    'İlişkide cinsel doyum',
    'Cinsel kimlik ve yönelim',
    'Cinsel travma ve iyileşme',
    'Cinsel sağlık ve hijyen'
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
                <span className="text-gold text-sm font-medium">Cinsel Terapi</span>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                Sağlıklı Cinsel Yaşam
              </h1>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Cinsel terapi, cinsel sağlık sorunlarının çözümüne yardımcı olan profesyonel
                bir psikoterapi yaklaşımıdır. Bireysel veya çift olarak alınabilir. Cinsel
                yaşamınızla ilgili endişelerinizi güvenli ve gizli bir ortamda paylaşabilir,
                sağlıklı bir cinsel yaşam için destek alabilirsiniz.
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
                  src="https://readdy.ai/api/search-image?query=intimate%20couple%20holding%20hands%20sitting%20together%20in%20peaceful%20therapy%20room%20soft%20warm%20lighting%20comfortable%20atmosphere%20modern%20minimalist%20interior%20emotional%20connection%20trust%20and%20support%20professional%20counseling%20setting%20serene%20environment%20pastel%20neutral%20colors&width=600&height=700&seq=sexual001&orientation=portrait"
                  alt="Cinsel Terapi"
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
              Hangi Sorunlarda Yardımcı Oluruz?
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Cinsel terapi, çeşitli cinsel sağlık sorunlarında destek sağlar
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
              Bilimsel temelli ve etkili terapi yöntemleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive/20 transition-colors duration-300">
                  <i className={`${approach.icon} text-3xl text-olive`}></i>
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-3">{approach.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{approach.description}</p>
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
              Terapi Süreci
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Cinsel terapi süreci, ihtiyaçlarınıza göre kişiselleştirilir
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
              Cinsel Terapinin Faydaları
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Cinsel terapi, yaşam kalitenizi artırır
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

      {/* Privacy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-lock-line text-4xl text-olive"></i>
            </div>
            <h2 className="font-serif text-3xl text-charcoal mb-4">
              Gizlilik ve Güvenlik
            </h2>
            <p className="text-charcoal/60 leading-relaxed mb-6">
              Cinsel terapi seanslarınız tamamen gizlidir. Paylaştığınız tüm bilgiler
              profesyonel etik kurallar çerçevesinde korunur. Rahat ve güvenli bir ortamda,
              yargılanmadan endişelerinizi paylaşabilirsiniz.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {topics.map((topic, index) => (
                <div key={index} className="p-4 bg-cream rounded-lg">
                  <p className="text-charcoal text-sm">{topic}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
              Sağlıklı Cinsel Yaşam İçin İlk Adımı Atın
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Cinsel terapi ile ilgili sorularınız için bizimle iletişime geçin.
              Uzman terapistlerimiz size yardımcı olmak için burada.
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

export default SexualTherapyPage;

import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const EMDRTherapyPage = () => {
  const benefits = [
    {
      icon: 'ri-flashlight-line',
      title: 'Hızlı Etki',
      description: 'Travmatik anıların etkisi kısa sürede azalır'
    },
    {
      icon: 'ri-brain-line',
      title: 'Beyin Yeniden İşler',
      description: 'Travmatik anılar sağlıklı şekilde işlenir'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Semptomlar Azalır',
      description: 'Kaygı, panik ve fobiler belirgin şekilde azalır'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Kalıcı Çözüm',
      description: 'Travmanın etkisi kalıcı olarak azaltılır'
    }
  ];

  const conditions = [
    {
      title: 'Travma Sonrası Stres Bozukluğu (TSSB)',
      description: 'Travmatik olayların ardından yaşanan yoğun stres tepkileri'
    },
    {
      title: 'Panik Atak ve Anksiyete',
      description: 'Ani korku nöbetleri ve sürekli kaygı durumları'
    },
    {
      title: 'Fobiler',
      description: 'Belirli durum veya nesnelere karşı aşırı korku'
    },
    {
      title: 'Depresyon',
      description: 'Travmatik yaşantılardan kaynaklanan depresif belirtiler'
    },
    {
      title: 'Kayıp ve Yas',
      description: 'Sevilen birinin kaybı sonrası yaşanan zorlu süreç'
    },
    {
      title: 'Çocukluk Travmaları',
      description: 'Geçmişte yaşanan istismar veya ihmal deneyimleri'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Hazırlık',
      description: 'EMDR terapisi hakkında bilgilendirme ve güvenli ortam oluşturma'
    },
    {
      step: '02',
      title: 'Değerlendirme',
      description: 'Travmatik anıların ve hedef belirtilerin belirlenmesi'
    },
    {
      step: '03',
      title: 'Duyarsızlaştırma',
      description: 'Göz hareketleri ile travmatik anıların yeniden işlenmesi'
    },
    {
      step: '04',
      title: 'Yerleştirme',
      description: 'Olumlu inançların güçlendirilmesi'
    },
    {
      step: '05',
      title: 'Beden Taraması',
      description: 'Bedensel gerilimlerin gözden geçirilmesi'
    },
    {
      step: '06',
      title: 'Kapanış',
      description: 'Seans sonunda dengelenme ve rahatlatma'
    },
    {
      step: '07',
      title: 'Yeniden Değerlendirme',
      description: 'İlerlemenin değerlendirilmesi ve yeni hedeflerin belirlenmesi'
    }
  ];

  const phases = [
    {
      icon: 'ri-eye-line',
      title: 'Göz Hareketleri',
      description: 'Terapist parmağını takip ederek sağa-sola göz hareketleri yapılır'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Bilateral Uyarım',
      description: 'Alternatif olarak dokunma veya ses uyarımları kullanılabilir'
    },
    {
      icon: 'ri-mind-map',
      title: 'Yeniden İşleme',
      description: 'Travmatik anılar beynin doğal iyileşme süreciyle işlenir'
    },
    {
      icon: 'ri-emotion-happy-line',
      title: 'Duygusal Rahatlama',
      description: 'Travmatik anıların duygusal yükü azalır'
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
                <span className="text-gold text-sm font-medium">EMDR Terapisi</span>
              </div>
              <h1 className="font-serif text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                Travmalardan Kurtulun
              </h1>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                EMDR (Eye Movement Desensitization and Reprocessing - Göz Hareketleri ile
                Duyarsızlaştırma ve Yeniden İşleme), travmatik anıların etkisini azaltmak
                için kullanılan bilimsel olarak kanıtlanmış bir terapi yöntemidir. Dünya
                Sağlık Örgütü tarafından travma tedavisinde önerilen etkili bir yaklaşımdır.
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
                  src="https://readdy.ai/api/search-image?query=peaceful%20therapy%20session%20with%20professional%20psychologist%20and%20client%20in%20modern%20calming%20office%20soft%20natural%20lighting%20comfortable%20seating%20serene%20atmosphere%20healing%20environment%20contemporary%20interior%20design%20warm%20neutral%20tones%20therapeutic%20setting%20hope%20and%20recovery&width=600&height=700&seq=emdr001&orientation=portrait"
                  alt="EMDR Terapisi"
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

      {/* Conditions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              EMDR Hangi Durumlarda Kullanılır?
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              EMDR terapisi, çeşitli psikolojik sorunların tedavisinde etkilidir
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-serif text-lg text-charcoal mb-3">{condition.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{condition.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              EMDR Nasıl Çalışır?
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              EMDR terapisinin temel çalışma prensipleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-olive/20 transition-colors duration-300">
                  <i className={`${phase.icon} text-3xl text-olive`}></i>
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{phase.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{phase.description}</p>
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
              EMDR Terapi Süreci
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              EMDR terapisi 8 aşamalı standart bir protokol izler
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
              EMDR Terapisinin Faydaları
            </h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">
              Bilimsel araştırmalarla kanıtlanmış etkili sonuçlar
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

      {/* CTA Section */}
      <section className="py-20 bg-olive text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl mb-6">
              Travmalarınızdan Kurtulun
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              EMDR terapisi ile ilgili sorularınız için bizimle iletişime geçin.
              Sertifikalı EMDR terapistlerimiz size yardımcı olmak için burada.
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

export default EMDRTherapyPage;

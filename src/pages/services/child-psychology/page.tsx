import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const ChildPsychologyPage = () => {
  const issues = [
    {
      icon: 'ri-emotion-unhappy-line',
      title: 'Davranış Sorunları',
      description: 'Öfke patlamaları, saldırganlık, kurallara uymama',
    },
    {
      icon: 'ri-book-open-line',
      title: 'Okul Başarısızlığı',
      description: 'Akademik zorluklar, okula gitmek istememe',
    },
    {
      icon: 'ri-focus-line',
      title: 'Dikkat Eksikliği',
      description: 'Konsantrasyon güçlüğü, hiperaktivite',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Kaygı Bozuklukları',
      description: 'Ayrılık kaygısı, sosyal kaygı, fobiler',
    },
    {
      icon: 'ri-moon-line',
      title: 'Uyku Sorunları',
      description: 'Uyuyamama, kabuslar, gece korkuları',
    },
    {
      icon: 'ri-team-line',
      title: 'Sosyal Uyum',
      description: 'Arkadaşlık kuramama, utangaçlık',
    },
  ];

  const playTherapy = [
    {
      icon: 'ri-palette-line',
      title: 'Sanat Terapisi',
      description: 'Resim, boyama ve yaratıcı aktivitelerle duygusal ifade',
    },
    {
      icon: 'ri-gamepad-line',
      title: 'Oyun Terapisi',
      description: 'Oyuncaklar ve oyunlar aracılığıyla iletişim',
    },
    {
      icon: 'ri-book-read-line',
      title: 'Hikaye Anlatımı',
      description: 'Masallar ve hikayelerle duygusal işleme',
    },
    {
      icon: 'ri-music-line',
      title: 'Müzik Terapisi',
      description: 'Müzik ve ritim ile duygusal düzenleme',
    },
  ];

  const parentGuidance = [
    'Çocuğunuzun duygusal ihtiyaçlarını anlama',
    'Etkili disiplin stratejileri',
    'Olumlu ebeveynlik becerileri',
    'Kardeş rekabeti yönetimi',
    'Okul ile işbirliği',
    'Ev ortamında destek sağlama',
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-olive/5 via-transparent to-gold/5"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2 bg-white border border-darkgray/20 px-4 py-2 rounded-full">
                  <i className="ri-bear-smile-line text-olive"></i>
                  <span className="font-sans text-sm text-darkgray">Çocuk &amp; Ergen</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Çocuk Psikolojisi
                </h1>

                <p className="font-sans text-xl text-darkgray/70 leading-relaxed">
                  3-12 yaş arası çocukların duygusal, davranışsal ve gelişimsel sorunlarına profesyonel destek.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://wa.me/905403251525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-calendar-check-line"></i>
                    <span>Randevu Al</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-white text-darkgray px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-darkgray hover:text-white transition-all duration-300 border border-darkgray/20 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-question-line"></i>
                    <span>Soru Sor</span>
                  </Link>
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
                    src="https://readdy.ai/api/search-image?query=happy%20child%20playing%20with%20colorful%20toys%20in%20bright%20cheerful%20child%20psychology%20therapy%20room%20with%20soft%20cushions%20educational%20games%20art%20supplies%20creating%20safe%20playful%20environment%20for%20emotional%20expression%20child%20psychologist%20observing%20supportive%20warm%20lighting%20neutral%20calming%20background%20colors&width=800&height=1000&seq=child-psychology-hero&orientation=portrait"
                    alt="Çocuk Psikolojisi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-olive/20 rounded-xl flex items-center justify-center">
                      <i className="ri-user-line text-2xl text-olive"></i>
                    </div>
                    <div>
                      <p className="font-sans text-sm text-darkgray/60">Yaş Aralığı</p>
                      <p className="font-sans text-lg font-bold text-darkgray">3-12 Yaş</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
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
                Hangi Sorunlarda Destek Veriyoruz?
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Çocuğunuzun yaşadığı duygusal ve davranışsal zorluklarda yanınızdayız.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {issues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-cream rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-olive/20 rounded-2xl flex items-center justify-center">
                    <i className={`${issue.icon} text-2xl text-olive`}></i>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-darkgray">{issue.title}</h3>
                  <p className="font-sans text-sm text-darkgray/70">{issue.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Play Therapy */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                  Oyun Terapisi ile Çalışıyoruz
                </h2>
                <p className="font-sans text-lg text-darkgray/70 leading-relaxed">
                  Çocuklar duygularını kelimelerle ifade etmekte zorlanabilirler. Oyun terapisi, çocukların doğal iletişim dili olan oyun aracılığıyla kendilerini ifade etmelerine olanak tanır.
                </p>
                <p className="font-sans text-lg text-darkgray/70 leading-relaxed">
                  Oyuncaklar, sanat malzemeleri ve yaratıcı aktiviteler kullanarak çocuğunuzun iç dünyasını anlar ve duygusal iyileşmeyi destekleriz.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {playTherapy.map((method, index) => (
                    <div key={index} className="bg-white rounded-2xl p-4 space-y-2">
                      <div className="w-10 h-10 bg-olive/20 rounded-xl flex items-center justify-center">
                        <i className={`${method.icon} text-xl text-olive`}></i>
                      </div>
                      <h4 className="font-sans text-sm font-bold text-darkgray">{method.title}</h4>
                      <p className="font-sans text-xs text-darkgray/70">{method.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=child%20engaged%20in%20play%20therapy%20with%20colorful%20building%20blocks%20art%20materials%20puppets%20in%20bright%20therapy%20room%20psychologist%20sitting%20on%20floor%20interacting%20with%20child%20creating%20safe%20space%20for%20emotional%20expression%20through%20play%20natural%20lighting%20warm%20inviting%20atmosphere%20neutral%20background&width=800&height=1000&seq=play-therapy-session&orientation=portrait"
                  alt="Oyun Terapisi"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Parent Guidance */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://readdy.ai/api/search-image?query=parent%20consultation%20session%20with%20child%20psychologist%20in%20professional%20office%20setting%20parents%20sitting%20comfortably%20discussing%20child%20development%20strategies%20psychologist%20providing%20guidance%20with%20notes%20and%20resources%20warm%20supportive%20atmosphere%20natural%20lighting%20neutral%20calming%20colors&width=800&height=1000&seq=parent-guidance&orientation=portrait"
                  alt="Ebeveyn Rehberliği"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                  Ebeveyn Rehberliği
                </h2>
                <p className="font-sans text-lg text-darkgray/70 leading-relaxed">
                  Çocuk terapisinin başarısı için aile desteği çok önemlidir. Ebeveynlerle düzenli görüşmeler yaparak çocuğunuzun gelişimini desteklemeniz için stratejiler geliştiriyoruz.
                </p>

                <div className="space-y-3">
                  {parentGuidance.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-3 bg-cream rounded-xl p-4"
                    >
                      <div className="w-6 h-6 bg-olive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-olive text-sm"></i>
                      </div>
                      <p className="font-sans text-base text-darkgray">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Terapi Süreci Nasıl İşler?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 space-y-4"
              >
                <div className="w-16 h-16 bg-olive rounded-2xl flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-darkgray">Ebeveyn Görüşmesi</h3>
                <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                  İlk olarak ebeveynlerle görüşerek çocuğun geçmişi, mevcut sorunlar ve aile dinamikleri hakkında bilgi alırız.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 space-y-4"
              >
                <div className="w-16 h-16 bg-olive rounded-2xl flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-darkgray">Çocukla Tanışma</h3>
                <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                  Çocukla oyun ve aktiviteler aracılığıyla tanışır, güven ilişkisi kurar ve değerlendirme yaparız.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 space-y-4"
              >
                <div className="w-16 h-16 bg-olive rounded-2xl flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-darkgray">Terapi Seansları</h3>
                <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                  Haftalık oyun terapisi seansları ve düzenli ebeveyn görüşmeleri ile terapi sürecini yürütürüz.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-6">
                Çocuğunuzun Mutluluğu İçin
              </h2>
              <p className="font-sans text-lg text-darkgray/70 mb-8">
                Çocuğunuzun duygusal ve davranışsal sorunlarında profesyonel destek alın. Uzman çocuk psikologlarımız sizinle birlikte.
              </p>
              <a
                href="https://wa.me/905403251525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-check-line"></i>
                <span>Hemen Randevu Al</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChildPsychologyPage;

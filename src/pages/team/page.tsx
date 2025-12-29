import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

const TeamPage = () => {
  const team = [
    {
      name: 'Psk. Nur Deniz Yüksel',
      title: 'Psikolog',
      specialties: ['Bireysel Terapi', 'Çift Terapisi', 'Cinsel Terapi', 'EMDR', 'Ergen Danışmanlığı'],
      education: 'Nuh Naci Yazgan Üniversitesi Psikoloji Bölümü',
      experience: '2019\'dan beri',
      description: 'Psikoterapi sürecinde ağırlıklı olarak Şema Terapi, Bilişsel Davranışçı Terapi, EMDR Terapisi; cinsel terapi süreçlerinde Seksofonksiyonel Cinsel Terapi ekollerini kullanmaktadır. Halihazırda terapi eğitimlerine ve süpervizyonlara devam etmektedir.',
      image: '/images/team/nur-deniz-yuksel.png',
    },
    {
      name: 'Psk. Nezihi Ünal',
      title: 'Psikolog',
      specialties: ['Çocuk Terapisi', 'Ergen Terapisi', 'Oyun Terapisi', 'EMDR', 'Dikkat Geliştirme Programları'],
      education: 'Nuh Naci Yazgan Üniversitesi Psikoloji Bölümü',
      experience: '2019\'dan beri',
      description: 'Psikoterapi sürecinde yoğun olarak Deneyimsel Oyun Terapisi, Çocuk ve Ergenlerde Bilişsel Davranışçı Terapi, Çocuk ve Ergenlerde EMDR Terapisi ekollerini kullanmaktadır. İhtiyaç duyulması halinde dikkat geliştirme programları da uygulamaktadır.',
      image: '/images/team/nezihi-unal.png',
    },
    {
      name: 'Psk. Büşra Demirbaş',
      title: 'Psikolog',
      specialties: ['Çocuk Terapisi', 'Ergen Terapisi', 'Yetişkin Terapisi', 'Bilişsel Davranışçı Terapi', 'Oyun Terapisi', 'Dikkat Testi ve Geliştirme'],
      education: 'Akdeniz Üniversitesi Psikoloji Bölümü (Onur Derecesi)',
      experience: 'Aktif olarak çalışmakta',
      description: 'Bilişsel Davranışçı Terapi eğitim sürecini Prof. Dr. Hakan Türkçapar ile tamamlamıştır. Çocuk Merkezli Oyun Terapisi eğitimini Klinik Psikolog Mehmet Teber ile almıştır. MOXO Dikkat Testi ve Attentioner Dikkat Geliştirme Uygulayıcı sertifikalarına sahiptir.',
      image: '/images/team/busra-demirbas.png',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-10 w-96 h-96 bg-olive rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-olive/10 px-6 py-3 rounded-full mb-4">
                <i className="ri-team-fill text-olive text-xl"></i>
                <span className="font-sans text-sm font-medium text-darkgray">
                  Uzman Kadromuz
                </span>
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                Ekibimiz
              </h1>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto leading-relaxed mb-4">
                Sizin için Buradayız
              </p>
              <p className="font-sans text-base text-darkgray/60 max-w-4xl mx-auto leading-relaxed">
                Arges Psikoloji, psikoloji biliminin etik ilkelerine bağlı, akademik donanıma sahip ve alanında uzmanlaşmış profesyonellerden oluşan bir ekip ile hizmet sunar. Her bir uzmanımız; danışanlarımızın ihtiyaçlarını bilimsel temelli yöntemlerle değerlendirmekte, güvenilir ve etkili çözümler üretmektedir.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkgray/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-serif text-2xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="font-sans text-sm text-white/90">
                        {member.title}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6">
                    {/* Education & Experience */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <i className="ri-graduation-cap-line text-olive text-lg mt-1"></i>
                        <div>
                          <p className="font-sans text-xs font-semibold text-darkgray/60 uppercase tracking-wide">
                            Eğitim
                          </p>
                          <p className="font-sans text-sm text-darkgray">
                            {member.education}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <i className="ri-briefcase-line text-olive text-lg mt-1"></i>
                        <div>
                          <p className="font-sans text-xs font-semibold text-darkgray/60 uppercase tracking-wide">
                            Deneyim
                          </p>
                          <p className="font-sans text-sm text-darkgray">
                            {member.experience}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Specialties */}
                    <div className="space-y-3">
                      <p className="font-sans text-xs font-semibold text-darkgray/60 uppercase tracking-wide">
                        Uzmanlık Alanları
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1 bg-olive/10 text-darkgray rounded-full font-sans text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="https://wa.me/905403251525"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-darkgray text-white text-center px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-olive transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      Randevu Al
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6 mb-16"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Ekip Değerlerimiz
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Tüm ekibimiz aynı değerler etrafında birleşerek size en iyi hizmeti sunmak için çalışıyor.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'ri-heart-3-line',
                  title: 'Empati',
                  description: 'Her danışanımızı anlamak ve onların duygularını hissetmek için çaba gösteriyoruz.',
                },
                {
                  icon: 'ri-shield-check-line',
                  title: 'Gizlilik',
                  description: 'Tüm görüşmeler tamamen gizli tutulur ve etik kurallara uygun şekilde yürütülür.',
                },
                {
                  icon: 'ri-book-open-line',
                  title: 'Bilimsellik',
                  description: 'Kanıta dayalı terapi yöntemleri kullanarak profesyonel destek sunuyoruz.',
                },
                {
                  icon: 'ri-user-heart-line',
                  title: 'Kişiye Özel',
                  description: 'Her danışanımıza özel terapi planları oluşturarak bireysel ihtiyaçlara cevap veriyoruz.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-olive/10 rounded-2xl flex items-center justify-center mx-auto">
                    <i className={`${value.icon} text-3xl text-olive`}></i>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-darkgray">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-calendar-check-line text-4xl text-olive"></i>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-6">
                Hangi Uzmanımızla Görüşmek İstersiniz?
              </h2>
              <p className="font-sans text-lg text-darkgray/70 mb-8">
                Size en uygun uzmanı belirlemek için bizimle iletişime geçin. İlk görüşmenizi ücretsiz yapabilirsiniz.
              </p>
              <a
                href="https://wa.me/905403251525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>Ücretsiz Ön Görüşme</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;

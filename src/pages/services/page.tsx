import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import CallBanner from '../../components/feature/CallBanner';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      icon: 'ri-user-line',
      title: 'Bireysel Terapi',
      description: 'Depresyon, anksiyete, stres yönetimi, öfke kontrolü, travma, düşük benlik saygısı ve kişisel gelişim konularında profesyonel destek.',
      suitable: 'Yetişkinler için',
      process: 'Haftalık 50 dakikalık seanslar',
      color: 'bg-olive/20',
      link: '/services/individual-therapy',
    },
    {
      icon: 'ri-heart-2-line',
      title: 'Çift Terapisi',
      description: 'İletişim sorunları, güven problemleri, cinsel uyumsuzluk, boşanma süreci ve ilişki dinamiklerinin güçlendirilmesi.',
      suitable: 'Evli veya birlikte olan çiftler',
      process: 'Haftalık 60 dakikalık seanslar',
      color: 'bg-gold/20',
      link: '/services/couple-therapy',
    },
    {
      icon: 'ri-team-line',
      title: 'Aile Terapisi',
      description: 'Aile içi iletişim sorunları, ebeveyn-çocuk ilişkisi, kardeş çatışmaları ve aile dinamiklerinin iyileştirilmesi.',
      suitable: 'Tüm aile bireyleri',
      process: 'Haftalık 60-75 dakikalık seanslar',
      color: 'bg-olive/20',
      link: '/services',
    },
    {
      icon: 'ri-bear-smile-line',
      title: 'Çocuk Psikolojisi',
      description: 'Davranış sorunları, okul başarısızlığı, dikkat eksikliği, kaygı bozuklukları, uyku sorunları ve sosyal uyum problemleri.',
      suitable: '3-12 yaş arası çocuklar',
      process: 'Oyun terapisi ve aile görüşmeleri',
      color: 'bg-gold/20',
      link: '/services/child-psychology',
    },
    {
      icon: 'ri-user-smile-line',
      title: 'Ergen Danışmanlığı',
      description: 'Kimlik gelişimi, akran ilişkileri, okul sorunları, madde kullanımı, depresyon ve kaygı bozuklukları.',
      suitable: '13-18 yaş arası ergenler',
      process: 'Haftalık 50 dakikalık seanslar',
      color: 'bg-olive/20',
      link: '/services',
    },
    {
      icon: 'ri-brain-line',
      title: 'EMDR Terapisi',
      description: 'Travma sonrası stres bozukluğu, fobiler, panik atak, kayıp ve yas süreçleri için etkili göz hareketleri ile duyarsızlaştırma ve yeniden işleme terapisi.',
      suitable: 'Travma yaşamış bireyler',
      process: '8-12 seanslık terapi programı',
      color: 'bg-gold/20',
      link: '/services',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Cinsel Terapi',
      description: 'Cinsel işlev bozuklukları, cinsel isteksizlik, erken boşalma, vajinismus ve cinsel kimlik konularında profesyonel destek.',
      suitable: 'Bireyler ve çiftler',
      process: 'Kişiye özel terapi planı',
      color: 'bg-olive/20',
      link: '/services',
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Kariyer Danışmanlığı',
      description: 'Meslek seçimi, kariyer değişimi, iş stresi, tükenmişlik sendromu ve iş-yaşam dengesi konularında rehberlik.',
      suitable: 'Çalışanlar ve öğrenciler',
      process: 'Değerlendirme ve yönlendirme seansları',
      color: 'bg-gold/20',
      link: '/services',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <CallBanner />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                Hizmetlerimiz
              </h1>
              <p className="font-sans text-xl text-darkgray/70 max-w-3xl mx-auto leading-relaxed">
                Size özel psikolojik destek hizmetlerimizle yanınızdayız. Her danışanımıza özel, bilimsel ve etik yaklaşımlarla destek sunuyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 space-y-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                    <i className={`${service.icon} text-3xl text-darkgray`}></i>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-darkgray">
                      {service.title}
                    </h3>
                    <p className="font-sans text-base text-darkgray/70 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 pt-4 border-t border-darkgray/10">
                      <div className="flex items-start space-x-2">
                        <i className="ri-user-line text-olive mt-1"></i>
                        <div>
                          <p className="font-sans text-sm font-semibold text-darkgray">
                            Kimler İçin?
                          </p>
                          <p className="font-sans text-sm text-darkgray/70">
                            {service.suitable}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <i className="ri-time-line text-olive mt-1"></i>
                        <div>
                          <p className="font-sans text-sm font-semibold text-darkgray">
                            Süreç
                          </p>
                          <p className="font-sans text-sm text-darkgray/70">
                            {service.process}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-cream text-darkgray text-center px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-olive hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      Detaylı Bilgi
                    </Link>
                    <a
                      href="https://wa.me/905403251525"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-darkgray text-white text-center px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-olive transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      Randevu Al
                    </a>
                  </div>
                </motion.div>
              ))}
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
                Hangi Hizmeti Seçeceğinizden Emin Değil Misiniz?
              </h2>
              <p className="font-sans text-lg text-darkgray/70 mb-8">
                Uzman psikologlarımız size en uygun terapi yöntemini belirlemek için ücretsiz ön görüşme yapabilir.
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

export default ServicesPage;

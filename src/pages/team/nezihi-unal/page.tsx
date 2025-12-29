import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const NezihiUnalPage = () => {
  const member = {
    name: 'Psk. Nezihi Ünal',
    title: 'Psikolog',
    specialties: ['Çocuk Terapisi', 'Ergen Terapisi', 'Oyun Terapisi', 'EMDR', 'Dikkat Geliştirme Programları'],
    education: 'Nuh Naci Yazgan Üniversitesi Psikoloji Bölümü (2019)',
    experience: "2019'dan beri",
    description: "Lisans eğitimi sürecinde öğretim üyesi hocaları eşliğinde saha çalışmalarında bulunmuş; insan hakları, toplumsal cinsiyet konularında çalışmalar yapmıştır. Başta Manisa Ruh ve Sinir Hastalıkları Hastanesi, Manisa Toplum Ruh Sağlığı Merkezi olmak üzere farklı kurumlarda staj yapmıştır. Bunun yanı sıra çeşitli özel danışmanlık merkezlerinde ve kreşlerde uzman psikologlar ve psikiyatristler eşliğinde gerekli süpervizyonları alarak danışan kabul etmiştir. Mesleki yaşantısına Arges Psikoloji bünyesinde Çocuk ve Ergen Psikolojik Danışmanlık Hizmeti vererek devam etmektedir. Psikoterapi sürecinde yoğun olarak Deneyimsel Oyun Terapisi, Çocuk ve Ergenlerde Bilişsel Davranışçı Terapi, Çocuk ve Ergenlerde EMDR Terapisi ekollerini kullanmaktadır. İhtiyaç duyulması halinde terapi süreçlerinin yanı sıra dikkat geliştirme programları da uygulamaktadır.",
    image: '/images/team/nezihi-unal.png',
    certificates: [
      'Bilişsel Davranışçı Terapi',
      'Çocuk ve Ergenlerde Bilişsel Davranışçı Terapi',
      'Deneyimsel Oyun Terapisi (DOT)',
      'EMDR Eğitimi',
      'Çocuk ve Yetişkin Değerlendirmede Objektif Testler',
      'Çocuk Değerlendirmede Projektif Testler',
      'Filial Terapi',
      'Resim Analizi Eğitimi',
      'Çocuk İhmal ve İstismarı Eğitimi',
      'Çocuklarda Travma Eğitimi',
      'Çocuk ve Ekran Bağımlılığı',
      'Masal Terapisi',
    ],
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-2">
                    {member.name}
                  </h1>
                  <p className="font-sans text-lg text-olive font-medium">
                    {member.title}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-graduation-cap-line text-olive text-xl mt-1"></i>
                    <div>
                      <p className="font-sans text-sm font-semibold text-darkgray/60 uppercase tracking-wide">
                        Eğitim
                      </p>
                      <p className="font-sans text-base text-darkgray">
                        {member.education}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-briefcase-line text-olive text-xl mt-1"></i>
                    <div>
                      <p className="font-sans text-sm font-semibold text-darkgray/60 uppercase tracking-wide">
                        Deneyim
                      </p>
                      <p className="font-sans text-base text-darkgray">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-sans text-base text-darkgray/80 leading-relaxed">
                  {member.description}
                </p>

                <div className="space-y-3">
                  <p className="font-sans text-sm font-semibold text-darkgray/60 uppercase tracking-wide">
                    Uzmanlık Alanları
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-4 py-2 bg-olive/10 text-darkgray rounded-full font-sans text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-sans text-sm font-semibold text-darkgray/60 uppercase tracking-wide">
                    Sertifikalar ve Eğitimler
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.certificates.map((cert, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 bg-gold/10 text-darkgray rounded-full font-sans text-xs"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/905403251525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Randevu Al</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NezihiUnalPage;

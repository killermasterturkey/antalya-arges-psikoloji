import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'individual', name: 'Bireysel Terapi' },
    { id: 'couple', name: 'Çift Terapisi' },
    { id: 'family', name: 'Aile Terapisi' },
    { id: 'child', name: 'Çocuk Psikolojisi' },
    { id: 'emdr', name: 'EMDR' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ayşe K.',
      category: 'individual',
      service: 'Bireysel Terapi',
      rating: 5,
      text: 'Uzun süredir depresyon ve anksiyete ile mücadele ediyordum. Arges Psikoloji\'deki terapistim sayesinde hayatım tamamen değişti. Kendimi daha güçlü ve mutlu hissediyorum. Profesyonel yaklaşımları ve samimi ilgileri için çok teşekkür ederim.',
      date: '2 hafta önce',
      image: 'https://readdy.ai/api/search-image?query=professional%20turkish%20woman%20smiling%20warmly%20in%20soft%20natural%20light%20with%20calm%20peaceful%20expression%20wearing%20casual%20elegant%20clothing%20against%20simple%20cream%20background%20portrait%20photography%20style&width=400&height=400&seq=test001&orientation=squarish',
    },
    {
      id: 2,
      name: 'Mehmet ve Zeynep A.',
      category: 'couple',
      service: 'Çift Terapisi',
      rating: 5,
      text: 'Evliliğimizde ciddi iletişim sorunları yaşıyorduk. Çift terapisi sayesinde birbirimizi daha iyi anlamayı ve empati kurmayı öğrendik. Şimdi ilişkimiz çok daha sağlıklı ve mutluyuz. Terapistimize sonsuz teşekkürler.',
      date: '1 ay önce',
      image: 'https://readdy.ai/api/search-image?query=happy%20turkish%20couple%20smiling%20together%20in%20warm%20natural%20lighting%20showing%20love%20and%20connection%20casual%20elegant%20style%20against%20soft%20cream%20background%20portrait%20photography&width=400&height=400&seq=test002&orientation=squarish',
    },
    {
      id: 3,
      name: 'Elif Y.',
      category: 'emdr',
      service: 'EMDR Terapisi',
      rating: 5,
      text: 'Geçmişte yaşadığım travmatik bir olayın etkilerinden kurtulamıyordum. EMDR terapisi gerçekten mucize gibi çalıştı. Artık o anılar beni esir almıyor ve hayatımı özgürce yaşayabiliyorum. Bu terapi yöntemini herkese tavsiye ederim.',
      date: '3 hafta önce',
      image: 'https://readdy.ai/api/search-image?query=confident%20turkish%20woman%20with%20peaceful%20serene%20expression%20in%20soft%20natural%20light%20wearing%20modern%20casual%20clothing%20against%20minimalist%20cream%20background%20portrait%20style&width=400&height=400&seq=test003&orientation=squarish',
    },
    {
      id: 4,
      name: 'Ahmet B.',
      category: 'individual',
      service: 'Bireysel Terapi',
      rating: 5,
      text: 'İş hayatındaki stres ve tükenmişlik sendromu ile başa çıkamıyordum. Terapistim bana stres yönetimi teknikleri öğretti ve kendimi tanımama yardımcı oldu. Artık daha dengeli ve huzurlu bir hayat sürüyorum.',
      date: '1 ay önce',
      image: 'https://readdy.ai/api/search-image?query=professional%20turkish%20man%20smiling%20confidently%20in%20natural%20soft%20lighting%20wearing%20business%20casual%20attire%20against%20simple%20cream%20background%20portrait%20photography%20style&width=400&height=400&seq=test004&orientation=squarish',
    },
    {
      id: 5,
      name: 'Fatma ve Ailesi',
      category: 'family',
      service: 'Aile Terapisi',
      rating: 5,
      text: 'Ergen çocuğumuzla yaşadığımız iletişim sorunları aile içi huzurumuzu bozmuştu. Aile terapisi sayesinde birbirimizi dinlemeyi ve anlamayı öğrendik. Evimizde artık çok daha huzurlu bir ortam var. Çok minnettarız.',
      date: '2 ay önce',
      image: 'https://readdy.ai/api/search-image?query=happy%20turkish%20family%20mother%20smiling%20warmly%20in%20soft%20natural%20light%20showing%20peace%20and%20harmony%20casual%20elegant%20clothing%20against%20cream%20background%20portrait%20style&width=400&height=400&seq=test005&orientation=squarish',
    },
    {
      id: 6,
      name: 'Deniz K.',
      category: 'child',
      service: 'Çocuk Psikolojisi',
      rating: 5,
      text: '7 yaşındaki oğlumun okul başarısızlığı ve davranış sorunları vardı. Oyun terapisi sayesinde çocuğumuz kendini ifade etmeyi öğrendi ve okul başarısı arttı. Çocuk psikologumuz gerçekten harika bir iş çıkardı.',
      date: '3 hafta önce',
      image: 'https://readdy.ai/api/search-image?query=caring%20turkish%20mother%20with%20gentle%20warm%20smile%20in%20natural%20soft%20lighting%20showing%20love%20and%20care%20wearing%20casual%20modern%20clothing%20against%20cream%20background%20portrait&width=400&height=400&seq=test006&orientation=squarish',
    },
    {
      id: 7,
      name: 'Can ve Selin T.',
      category: 'couple',
      service: 'Çift Terapisi',
      rating: 5,
      text: 'Boşanma aşamasındaydık ama son bir şans vermek istedik. Çift terapisi ilişkimizi kurtardı. Sorunlarımızın kökenini anladık ve birlikte çözüm yolları bulduk. Şimdi ilişkimiz eskisinden çok daha güçlü.',
      date: '1 ay önce',
      image: 'https://readdy.ai/api/search-image?query=loving%20turkish%20couple%20embracing%20with%20genuine%20smiles%20in%20warm%20natural%20light%20showing%20connection%20and%20happiness%20elegant%20casual%20style%20cream%20background%20portrait&width=400&height=400&seq=test007&orientation=squarish',
    },
    {
      id: 8,
      name: 'Burcu M.',
      category: 'individual',
      service: 'Bireysel Terapi',
      rating: 5,
      text: 'Düşük benlik saygısı ve sosyal anksiyete ile yıllarca mücadele ettim. Terapistim bana kendimi sevmeyi ve değerli hissetmeyi öğretti. Artık sosyal ortamlarda rahatım ve hayattan keyif alıyorum. Çok teşekkür ederim.',
      date: '2 hafta önce',
      image: 'https://readdy.ai/api/search-image?query=confident%20young%20turkish%20woman%20with%20bright%20smile%20in%20soft%20natural%20lighting%20showing%20self%20assurance%20wearing%20stylish%20casual%20outfit%20against%20cream%20background%20portrait&width=400&height=400&seq=test008&orientation=squarish',
    },
    {
      id: 9,
      name: 'Emre Y.',
      category: 'emdr',
      service: 'EMDR Terapisi',
      rating: 5,
      text: 'Panik atak ve fobilerle hayatım kâbusa dönmüştü. EMDR terapisi sayesinde bu sorunlardan tamamen kurtuldum. Artık özgürce seyahat edebiliyor ve hayallerimi gerçekleştirebiliyorum. Bu terapi gerçekten işe yarıyor.',
      date: '1 ay önce',
      image: 'https://readdy.ai/api/search-image?query=relaxed%20turkish%20man%20with%20peaceful%20calm%20expression%20in%20natural%20soft%20light%20wearing%20comfortable%20casual%20clothing%20against%20simple%20cream%20background%20portrait%20photography&width=400&height=400&seq=test009&orientation=squarish',
    },
  ];

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={`ri-star-${index < rating ? 'fill' : 'line'} text-gold`}
      ></i>
    ));
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 bg-olive rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-olive/10 px-6 py-3 rounded-full mb-4">
                <i className="ri-heart-3-fill text-olive text-xl"></i>
                <span className="font-sans text-sm font-medium text-darkgray">
                  Danışanlarımızın Deneyimleri
                </span>
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                Danışan Yorumları
              </h1>
              <p className="font-sans text-xl text-darkgray/70 max-w-3xl mx-auto leading-relaxed">
                Arges Psikoloji ile yolculuklarına başlayan danışanlarımızın gerçek hikayeleri ve deneyimleri.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: 'ri-user-heart-line', number: '500+', label: 'Mutlu Danışan' },
                { icon: 'ri-star-fill', number: '4.9/5', label: 'Ortalama Puan' },
                { icon: 'ri-thumb-up-line', number: '%98', label: 'Memnuniyet Oranı' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center space-y-3 shadow-sm"
                >
                  <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto">
                    <i className={`${stat.icon} text-2xl text-olive`}></i>
                  </div>
                  <div className="font-serif text-3xl font-bold text-darkgray">
                    {stat.number}
                  </div>
                  <div className="font-sans text-sm text-darkgray/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeCategory === category.id
                      ? 'bg-darkgray text-white shadow-lg'
                      : 'bg-white text-darkgray hover:bg-olive/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 space-y-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <h3 className="font-sans text-base font-semibold text-darkgray">
                          {testimonial.name}
                        </h3>
                        <p className="font-sans text-sm text-darkgray/60">
                          {testimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Text */}
                  <p className="font-sans text-sm text-darkgray/80 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Date */}
                  <div className="flex items-center space-x-2 text-darkgray/50">
                    <i className="ri-time-line text-sm"></i>
                    <span className="font-sans text-xs">{testimonial.date}</span>
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
              <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-chat-smile-3-line text-4xl text-olive"></i>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-6">
                Siz de Hikayenizi Yazın
              </h2>
              <p className="font-sans text-lg text-darkgray/70 mb-8">
                Profesyonel psikolojik destek ile hayatınızı dönüştürmeye bugün başlayın.
              </p>
              <a
                href="https://wa.me/905403251525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>Randevu Almak İstiyorum</span>
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

export default TestimonialsPage;

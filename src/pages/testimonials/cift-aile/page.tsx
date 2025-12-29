import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const TestimonialsCiftAilePage = () => {
  const testimonials = [
    { initials: 'A&E', rating: 5, text: 'Deniz Hanım\'dan evliliğimiz hakkında destek aldık. Eşim ilk etapta terapiye gitme konusunda isteksizdi ama Deniz Hanım\'ın yaklaşımı onu rahatlatınca istekle gitmeye başladı. Nur Deniz Hanım\'la birlikte sorunlarımızı etkili bir biçimde çözdük ve seanslarla çözmeye devam ediyoruz. Çok güler yüzlü, samimi ve işinde çok başarılı biri. İnsana güven veriyor ve sıkıntınızı rahatça paylaşabiliyorsunuz. Kesinlikle tavsiye ederim. Eşimle paylaşamadığım birçok sorunu orada daha rahat bir biçimde dile getirebildim. Kendisine çok teşekkür ederim.', service: 'Çift Terapisi' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-olive/10 px-6 py-3 rounded-full">
                <i className="ri-heart-2-line text-olive text-xl"></i>
                <span className="font-sans text-sm font-medium text-darkgray">Çift & Aile Terapisi</span>
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                Çift ve Aile Terapisi Yorumları
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-olive/10 flex items-center justify-center">
                      <span className="font-serif text-lg font-bold text-darkgray">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-darkgray">Anonim</p>
                      <p className="font-sans text-xs text-darkgray/60">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-gold"></i>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-darkgray/80">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-darkgray mb-6">Çift/Aile Terapisi İçin Randevu Alın</h2>
            <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full hover:bg-olive transition-all duration-300">
              <i className="ri-whatsapp-line"></i>
              <span>WhatsApp ile Randevu</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TestimonialsCiftAilePage;

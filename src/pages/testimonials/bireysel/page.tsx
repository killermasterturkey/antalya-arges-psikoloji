import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const TestimonialsBireyselPage = () => {
  const testimonials = [
    { initials: 'M.K.', rating: 5, text: 'Deniz Hanım\'a sosyal medya üzerinde ulaştım. Ortalama 8 seans görüştük. İlişkimle alakalı kıskançlığım beni zorluyordu ve her şeyi gereğinden fazla sorguluyordum. Artık bazı durumların bana ve hayatıma zarar verdiğini fark edip destek almaya başladım. Danışmanlık sürecim çok güzel ilerledi ve çok güzel sonuçlar aldım. Benim için çok güzel bir deneyimdi. Deniz Hanım\'ın ilgisi ve anlayışı daha da güzeldi. Her şeyden çok memnun kaldım.', service: 'Bireysel Terapi' },
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
                <i className="ri-user-heart-line text-olive text-xl"></i>
                <span className="font-sans text-sm font-medium text-darkgray">Bireysel Terapi</span>
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                Bireysel Terapi Yorumları
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
                      <p className="font-sans text-sm font-semibold text-darkgray">Anonim Danışan</p>
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
            <h2 className="font-serif text-4xl font-bold text-darkgray mb-6">Bireysel Terapi İçin Randevu Alın</h2>
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

export default TestimonialsBireyselPage;

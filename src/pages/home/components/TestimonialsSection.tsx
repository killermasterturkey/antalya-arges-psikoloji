import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      title: 'Hayatımı Değiştirdi',
      text: 'Arges Psikoloji ile başladığım terapi süreci hayatıma yeni bir anlam kattı. Uzman psikologum sayesinde kendimi daha iyi tanıdım ve sorunlarımla başa çıkmayı öğrendim.',
      name: 'Elif K.',
      info: '32 yaşında, İstanbul',
      avatar: 'https://ui-avatars.com/api/?name=Elif+K&background=8A9A5B&color=fff',
    },
    {
      rating: 5,
      title: 'Profesyonel ve Güvenilir',
      text: 'Çift terapisi almaya başladığımızda ilişkimiz çok zordu. Şimdi eşimle daha sağlıklı iletişim kuruyoruz ve birbirimizi daha iyi anlıyoruz. Teşekkürler Arges Psikoloji.',
      name: 'Ahmet ve Zehra Y.',
      info: 'Evli çift, Ankara',
      avatar: 'https://ui-avatars.com/api/?name=Ahmet+Y&background=C8B560&color=fff',
    },
    {
      rating: 5,
      title: 'Çocuğum İçin En Doğru Karar',
      text: 'Oğlumun okul başarısı düşmüştü ve sosyal ilişkilerinde sorunlar yaşıyordu. Çocuk psikologu sayesinde çok ilerleme kaydetti. Kendine güveni arttı ve mutlu bir çocuk oldu.',
      name: 'Ayşe M.',
      info: 'Anne, İzmir',
      avatar: 'https://ui-avatars.com/api/?name=Ayse+M&background=8A9A5B&color=fff',
    },
    {
      rating: 5,
      title: 'EMDR Terapisi Mucizevi',
      text: 'Yıllardır taşıdığım travmalardan EMDR terapisi ile kurtuldum. İlk seanstan sonra bile fark ettim. Artık geçmişim beni esir almıyor.',
      name: 'Can T.',
      info: '28 yaşında, Bursa',
      avatar: 'https://ui-avatars.com/api/?name=Can+T&background=C8B560&color=fff',
    },
    {
      rating: 5,
      title: 'Güvenli ve Rahat Ortam',
      text: 'İlk kez terapiye gittiğimde çok gergindim. Ama psikologumun sıcak yaklaşımı ve ofisteki rahat ortam sayesinde kendimi güvende hissettim. Her seans sonrası daha hafif hissediyorum.',
      name: 'Deniz S.',
      info: '25 yaşında, Antalya',
      avatar: 'https://ui-avatars.com/api/?name=Deniz+S&background=8A9A5B&color=fff',
    },
    {
      rating: 5,
      title: 'Ergen Kızım Değişti',
      text: 'Ergenlik döneminde kızımla iletişim kuramıyorduk. Arges Psikoloji\'deki ergen danışmanı hem kızıma hem bize çok yardımcı oldu. Artık daha sağlıklı bir aile ilişkimiz var.',
      name: 'Mehmet B.',
      info: 'Baba, Adana',
      avatar: 'https://ui-avatars.com/api/?name=Mehmet+B&background=C8B560&color=fff',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-4">
            Danışanlarımız Ne Diyor?
          </h2>
          <p className="font-sans text-lg text-darkgray/60">
            Binlerce danışanımızın hayatına dokunduk
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-cream rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all duration-300 ${
                index >= 3 ? 'opacity-80' : ''
              }`}
            >
              {/* Stars */}
              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-gold text-lg"></i>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-semibold text-darkgray">
                {testimonial.title}
              </h3>

              {/* Text */}
              <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                {testimonial.text}
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-3 pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-sans text-sm font-semibold text-darkgray">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-xs text-darkgray/60">
                    {testimonial.info}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

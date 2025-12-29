import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      icon: 'ri-phone-line',
      title: 'İletişime Geçin',
      description: 'Bize telefon, WhatsApp ya da web sitemiz üzerinden kolayca ulaşabilirsiniz. Sorununuz ya da ihtiyacınız ne olursa olsun, ilk adımı atmak için bizimle iletişime geçmeniz yeterlidir.',
      color: 'bg-olive/20',
      buttonStyle: 'bg-darkgray text-white',
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Bilgi & Randevu',
      description: 'Destek almak istediğiniz konuya göre en uygun uzman belirlenir. Uygunluk durumunuza göre ilk görüşme planlanır ve size özel bir randevu oluşturulur.',
      color: 'bg-gold/20',
      buttonStyle: 'bg-white text-darkgray border-2 border-darkgray',
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Destek Süreci',
      description: 'Belirlenen uzmanla yapılan görüşmeler, gizlilik ve güven ilkesiyle yürütülür. Seanslar boyunca ihtiyacınıza yönelik bilimsel temelli yöntemler uygulanır.',
      color: 'bg-cream',
      buttonStyle: 'bg-white text-darkgray border-2 border-darkgray',
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
          className="mb-16"
        >
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-darkgray mb-4">
            Sadece 3 Adımda Başlayın
          </h2>
          <p className="font-sans text-lg text-darkgray/60">
            Arges'te Süreç Nasıl İlerliyor?
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-cream rounded-3xl p-8 space-y-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center`}>
                <i className={`${step.icon} text-4xl text-darkgray`}></i>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-darkgray">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Button */}
              <button className={`${step.buttonStyle} px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 hover:shadow-md w-full cursor-pointer whitespace-nowrap`}>
                Adım {index + 1}
              </button>

              <p className="font-sans text-xs text-darkgray/50 text-center">
                Hızlı ve kolay süreç
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

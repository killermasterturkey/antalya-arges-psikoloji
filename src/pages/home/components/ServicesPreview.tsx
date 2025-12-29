import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    { icon: 'ri-heart-2-line', name: 'Çift Terapisi' },
    { icon: 'ri-brain-line', name: 'EMDR' },
    { icon: 'ri-bear-smile-line', name: 'Çocuk Psikolojisi' },
    { icon: 'ri-user-smile-line', name: 'Ergen Danışmanlığı' },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="inline-flex items-center space-x-2 border border-darkgray/20 px-4 py-2 rounded-full">
              <span className="font-sans text-sm text-darkgray">Hizmetlerimiz</span>
            </div>

            <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20therapy%20session%20in%20modern%20counseling%20office%2C%20psychologist%20and%20client%20in%20comfortable%20setting%2C%20warm%20lighting%2C%20plants%2C%20books%20on%20shelves%2C%20creating%20atmosphere%20of%20trust%20and%20professionalism%20with%20neutral%20calming%20colors&width=800&height=900&seq=therapy-session-professional&orientation=portrait"
                alt="Psikolojik Danışmanlık Hizmetleri"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray leading-tight">
              Size Özel Psikolojik Destek Hizmetleri
            </h2>

            <p className="font-sans text-lg text-darkgray/70 leading-relaxed">
              Bireysel terapi, çift terapisi, çocuk ve ergen psikolojisi, EMDR ve daha fazlası ile yanınızdayız. Her danışanımıza özel, bilimsel ve etik yaklaşımlarla destek sunuyoruz.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
            >
              <span>Tüm Hizmetleri Görüntüle</span>
              <i className="ri-arrow-right-line"></i>
            </Link>

            {/* Service Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-cream rounded-2xl p-6 text-center space-y-3 cursor-pointer"
                >
                  <div className="text-olive text-3xl">
                    <i className={service.icon}></i>
                  </div>
                  <p className="font-sans text-sm text-darkgray font-medium">
                    {service.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

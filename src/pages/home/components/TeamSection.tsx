import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  const team = [
    {
      name: 'Psk. Nur Deniz Yüksel',
      specialty: 'Bireysel Danışmanlık, Çift Danışmanlığı, Cinsel Danışmanlık',
      image: '/images/team/nur-deniz-yuksel.png',
    },
    {
      name: 'Psk. Nezihi Ünal',
      specialty: 'Çocuk ve Ergen Danışmanlığı, Oyunla Danışmanlık',
      image: '/images/team/nezihi-unal.png',
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-6"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
            Psikolog Ekibimiz
          </h2>
          <p className="font-sans text-lg text-darkgray/60">
            Alanında deneyimli psikologlarımızla tanışın
          </p>
          <Link
            to="/team"
            className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
          >
            <span>Tüm Ekibi Görüntüle</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-center space-y-2">
                <h3 className="font-serif text-xl font-semibold text-darkgray">
                  {member.name}
                </h3>
                <p className="font-sans text-sm text-olive">
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

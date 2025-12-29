import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import { blogPosts } from '../../mocks/blogPosts';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tumu');

  const categories = ['Tumu', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = selectedCategory === 'Tumu' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-b from-olive/5 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-darkgray">Blog & </span>
                <span className="text-olive">Haberler</span>
              </h1>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Ruh sagligi, psikoloji ve kisisel gelisim hakkinda guncel yazilar, uzman gorusleri ve bilimsel arastirmalar
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6 lg:px-12 sticky top-20 bg-cream/95 backdrop-blur-md z-10 border-b border-darkgray/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-olive text-white shadow-md'
                      : 'bg-white text-darkgray hover:bg-olive/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl mb-6 h-64 w-full">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-olive text-white px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-3 text-xs text-darkgray/60">
                        <div className="flex items-center gap-1.5">
                          <i className="ri-calendar-line"></i>
                          <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <i className="ri-time-line"></i>
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-semibold text-darkgray mb-3 group-hover:text-olive transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-sans text-sm text-darkgray/70 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-8 h-8 bg-olive/10 rounded-full flex items-center justify-center">
                          <i className="ri-user-line text-olive text-sm"></i>
                        </div>
                        <span className="text-darkgray/80 font-medium">{post.author}</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl text-darkgray/20 mb-4">
                  <i className="ri-file-search-line"></i>
                </div>
                <p className="text-darkgray/60 text-lg">Bu kategoride henuz yazi bulunmuyor.</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
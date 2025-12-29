import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { blogPosts } from '../../../mocks/blogPosts';

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Ilgili yazilar (ayni kategoriden)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-darkgray/60 mb-6">
                <Link to="/" className="hover:text-olive transition-colors">Anasayfa</Link>
                <i className="ri-arrow-right-s-line"></i>
                <Link to="/blog" className="hover:text-olive transition-colors">Blog</Link>
                <i className="ri-arrow-right-s-line"></i>
                <span className="text-darkgray">{post.category}</span>
              </div>

              {/* Category Badge */}
              <div className="mb-6">
                <span className="bg-olive text-white px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-darkgray/70 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-olive/10 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-olive"></i>
                  </div>
                  <span className="font-medium text-darkgray">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-calendar-line text-olive"></i>
                  <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-time-line text-olive"></i>
                  <span>{post.readTime} okuma</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-3xl mb-12 h-96 lg:h-[500px] w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
            >
              {/* Excerpt */}
              <div className="mb-8 pb-8 border-b border-darkgray/10">
                <p className="font-sans text-lg text-darkgray/80 leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <div className="font-sans text-base text-darkgray/80 leading-relaxed space-y-6">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-darkgray/10">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-olive/10 text-olive px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t border-darkgray/10">
                <p className="text-sm font-medium text-darkgray mb-4">Bu yaziyi paylas:</p>
                <div className="flex gap-3">
                  <button className="w-10 h-10 bg-olive/10 hover:bg-olive text-olive hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <i className="ri-facebook-fill"></i>
                  </button>
                  <button className="w-10 h-10 bg-olive/10 hover:bg-olive text-olive hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <i className="ri-twitter-x-fill"></i>
                  </button>
                  <button className="w-10 h-10 bg-olive/10 hover:bg-olive text-olive hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <i className="ri-linkedin-fill"></i>
                  </button>
                  <button className="w-10 h-10 bg-olive/10 hover:bg-olive text-olive hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <i className="ri-whatsapp-fill"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-6 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-darkgray mb-4">
                  Ilgili Yazilar
                </h2>
                <p className="font-sans text-base text-darkgray/60">
                  Bu konuyla ilgili diger yazilarimiz
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${relatedPost.slug}`} className="block">
                      <div className="relative overflow-hidden rounded-2xl mb-6 h-64 w-full">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-darkgray mb-3 group-hover:text-olive transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="font-sans text-sm text-darkgray/70 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-olive/10 via-cream to-gold/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-darkgray mb-6">
                Profesyonel Destek Almak Ister misiniz?
              </h2>
              <p className="font-sans text-base text-darkgray/70 mb-8 max-w-2xl mx-auto">
                Uzman psikologlarimizla gorusmek ve size ozel terapi plani olusturmak icin hemen randevu alin
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-olive text-white px-8 py-4 rounded-full font-medium hover:bg-olive/90 transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
              >
                <span>Hemen Randevu Al</span>
                <i className="ri-calendar-check-line"></i>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
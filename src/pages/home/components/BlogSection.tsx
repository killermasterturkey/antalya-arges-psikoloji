import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../../mocks/blogPosts';

const BlogSection = () => {
  // Son 3 blog yazisini goster
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-darkgray">Blog & </span>
            <span className="text-olive">Haberler</span>
          </h2>
          <p className="font-sans text-base text-darkgray/60 max-w-2xl mx-auto">
            Ruh sagligi, psikoloji ve kisisel gelisim hakkinda guncel yazilar ve uzman gorusleri
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post, index) => (
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-olive text-white px-8 py-3.5 rounded-full font-medium hover:bg-olive/90 transition-all duration-300 hover:shadow-lg whitespace-nowrap cursor-pointer"
          >
            <span>Tum Yazilari Goruntule</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
import React from 'react';
import { motion } from 'framer-motion';
import img5 from '../photos/img5.avif';
import img6 from '../photos/img6.avif';

function Aboutus() {
  return (
    <div className="w-full bg-green-900 py-16 px-8 text-white">
      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-10"
      >
        <img
          src={img5}
          alt="flower arrangement"
          className="rounded-3xl shadow-lg"
          style={{ width: 300, height: 400 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-yellow-200">Who We Are</h2>
          <p>
            Since 2015, we’ve been bringing the beauty of nature into your life. Every bouquet is made with care to celebrate life’s precious moments.
          </p>
          <p>
            Whether it's weddings, birthdays, or simple gestures of love, we’re here to help you express your emotions with flowers.
          </p>
        </motion.div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-10 mt-20"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-yellow-200">Why Choose Us?</h2>
          <p>
            Our flowers are fresh, locally sourced, and arranged with love and detail. Every stem tells a story.
          </p>
          <p>
            Our friendly team is here to make your experience joyful, smooth, and memorable. Flowers are not just gifts—they're emotions.
          </p>
        </motion.div>
        <img
          src={img6}
          alt="our team"
          className="rounded-3xl shadow-lg"
          style={{ width: 300, height: 400 }}
        />
      </motion.div>
    </div>
  );
}

export default Aboutus;

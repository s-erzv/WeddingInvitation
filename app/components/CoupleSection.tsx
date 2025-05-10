'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CoupleSection = () => {
  return (
    <section className="py-20 px-4 text-center flex flex-col items-center justify-center bg-white">
      {/* Logo / Gambar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mb-8 flex items-center justify-center gap-4"
      >
        <Image
          src="/bride.png"
          alt="Z"
          width={250}
          height={250}
          className="sm:w-[300px] md:w-[400px] h-auto"
        />
      </motion.div>

      {/* Judul */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#4A1C2D] mb-4"
      >
        The Couple
      </motion.h2>

      {/* Ayat pengantar */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-sm sm:text-base md:text-lg max-w-3xl text-[#4A1C2D] mb-8 leading-relaxed"
      >
        Dengan segala puji bagi Allah yang telah menciptakan makhluk-Nya berpasang-pasangan, Ya Allah izinkanlah kami merangkai ikatan cinta yang Engkau berkahi dalam ikatan pernikahan.
      </motion.p>

      {/* Nama pasangan */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-[#4A1C2D] text-center"
      >
        <p className="mb-2 text-4xl sm:text-5xl md:text-6xl font-semibold">Zulha Hidayati</p>
        <p className="text-sm sm:text-base mb-6 font-light">Putri pertama Bapak Suprapto & Ibu Tuminah</p>

        <p className="text-4xl font-medium mb-6">&</p>

        <p className="mb-2 text-4xl sm:text-5xl md:text-6xl font-semibold">Anas Mahfud</p>
        <p className="text-sm sm:text-base font-light">Putra keempat Bapak Mohammad Diram & Ibu Sukarsih</p>
      </motion.div>
    </section>
  );
};

export default CoupleSection;

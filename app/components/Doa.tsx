'use client';
import Image from "next/image";
import { motion } from "framer-motion";


const Doa = () => {
  return ( 
  <section className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg-doa.png"
          alt="Background Bunga"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
        {/* Overlay warna ungu transparan */}
        <div className="absolute inset-0 bg-[#4A1A34]/70" />
      </div>

      {/* Teks di atas gambar */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-medium leading-relaxed"
        >
          بَارَكَ ٱللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 text-base md:text-2xl text-[#FBE8E7] font-light leading-relaxed"
        >
          Semoga Allah memberkahimu di saat bahagia maupun di saat sulit, serta mempersatukan kalian berdua dalam kebaikan.
        </motion.p>
      </div>
    </section>
     )
}

export default Doa;

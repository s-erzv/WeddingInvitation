'use client';
import { motion } from 'framer-motion';

const AyatQuran = () => {
  return (
    <section className="relative bg-quran bg-cover bg-no-repeat py-20 px-4 flex justify-center">
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="bg-[#FBE8E7] rounded-xl shadow-md p-4 sm:p-6 md:p-8 md:mt-10 max-w-2xl sm:max-w-3xl w-full text-center relative z-20"
      >
        <p className="text-sm sm:text-base leading-relaxed font-medium text-[#632C45] mb-3">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
          لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
        </p>
        <p className="text-xs sm:text-sm text-[#4B3A3A] leading-snug">
          &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
          untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya,
          dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
          benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir&quot;.
        </p>
        <p className="font-semibold text-[#3D2D2D] mt-3 text-xs sm:text-sm">
          <span className="italic">Qs. Ar-Rum : Ayat 21</span>
        </p>
      </motion.div>
    </section>
  );
};

export default AyatQuran;

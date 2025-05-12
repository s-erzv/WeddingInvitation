'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OpeningPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/main'); // arahkan ke halaman utama kamu
  };

  return (
    <div className="w-full h-screen bg-[#FBE8E7] flex items-center justify-center px-4">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        onClick={handleClick}
        className="cursor-pointer max-w-3xl w-full"
      >
        <Image
          src="/invitation.svg"
          alt="Undangan"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          priority
        />
      </motion.div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

const accountData = [
  {
    bank: 'BSI',
    number: '7167328096',
    name: 'Zulha Hidayati',
  },
  {
    bank: 'Mandiri',
    number: '1560006450904',
    name: 'Anas Mahfud',
  },
  {
    bank: 'Alamat',
    number: 'Kp. Pabuaran RT 01/25 No. 129, Kel. Cicadas, Kec. Gunungputri, Kab. Bogor 16964',
    name: '',
  },
];

export default function WeddingGift() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // hide after 2 seconds
  };

  return (
    <section className="py-16 bg-white text-center px-4 text-[#4A1C2D]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-heading mb-2">Wedding Gift</h2>
        <p className="text-md max-w-4xl mx-auto">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
          Namun, jika memberi adalah ungkapan tanda kasih Anda, kami akan senang hati menerimanya
          yang tentu akan semakin melengkapi kebahagiaan kami.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6">
        {accountData.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * idx }}
            className="bg-pink-50 rounded-xl px-8 py-6 w-full max-w-sm text-left shadow-md min-h-[200px] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold">{item.bank}</h3>
              <div className="flex items-start mt-2 mb-1 text-lg font-semibold break-words">
                <span className="flex-1 line-clamp-3">{item.number}</span>
                <button
                  className="ml-2 mt-1"
                  onClick={() => handleCopy(item.number, idx)}
                >
                  {copiedIndex === idx ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>
            {item.bank !== 'Alamat' && (
              <p className="text-sm text-gray-700">a/n {item.name}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    title: 'Akad Nikah',
    date: 'Rabu, 11 Juni 2025',
    location: null, // tidak ada lokasi / maps
  },
  {
    title: 'Resepsi',
    date: 'Sabtu, 14 Juni 2025 | 09.00 - selesai',
    location: {
      label: 'Kediaman Mempelai Wanita',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3964.741265202123!2d106.9260833!3d-6.4272778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjUnMzguMiJTIDEwNsKwNTUnMzMuOSJF!5e0!3m2!1sid!2sid!4v1746854676274!5m2!1sid!2sid',
    },
  },
];

const EventSection = () => {
  return (
    <section className="py-20 px-4 flex flex-col gap-10 items-center">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-[#FBE8E7] rounded-2xl shadow-md w-full max-w-5xl px-6 py-10"
        >
          <h3 className="text-4xl font-semibold text-center text-[#4A1C2D]">{event.title}</h3>
          <div className="flex justify-center my-4">
            <Image src="/divider.png" alt="Event Divider" width={500} height={50} />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {/* Date */}
            <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm w-full md:w-1/2">
              <div className="bg-[#FCCFC3] p-2 rounded-full">
                <Image src="/calendar.svg" alt="Calendar Icon" width={20} height={20} />
              </div>
              <span className="text-[#4A1C2D] font-medium text-base">{event.date}</span>
            </div>

            {/* Location & Map */}
            {event.location && (
              <div className="bg-white p-3 rounded-xl shadow-sm w-full md:w-1/2 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FCCFC3] p-2 rounded-full">
                    <Image src="/map-pin.svg" alt="Location Icon" width={20} height={20} />
                  </div>
                  <span className="text-[#4A1C2D] font-medium text-base">{event.location.label}</span>
                </div>
                <div className="w-full h-40 rounded-md overflow-hidden">
                  <iframe
                    src={event.location.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default EventSection;

'use client';

import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    // Pause saat pindah tab
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      }
    };

    // Pause sebelum unload (misalnya tutup tab atau refresh)
    const handleBeforeUnload = () => {
      audio.pause();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-full shadow-md">
      <audio ref={audioRef} src="/audio/song.mp3" autoPlay loop />
      <button onClick={togglePlay} className="text-pink-800">
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
}

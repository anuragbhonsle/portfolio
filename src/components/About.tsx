import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiSpotify } from "react-icons/si";

interface Song {
  _id: string;
  song_name: string;
  song_artist: string;
  song_url: string;
}
const VITE_RENDER_URL = import.meta.env.VITE_RENDER_URL;

const points = [
  "I turn ideas into clean apps that not only work, but feel intuitive and enjoyable to use.",
  "Always curious about new tools, I learn by building, adapting, and trying them out.",

  "As an SDE (Web) Intern, I build web apps while learning and growing with a team.",
];

export const About = () => {
  const [spotify, setSpotify] = useState<Song>();

  async function getSpotify() {
    try {
      const response = await axios.get(`${VITE_RENDER_URL}/api/spotify`);
      setSpotify(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSpotify();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="px-2 sm:px-4 lg:px-20 pt-1 lg:pt-2 pb-6 lg:pb-8"
    >
      <div className="w-full sm:max-w-5xl mx-auto flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-lg sm:text-2xl font-bold text-foreground tracking-tight">
            About
          </h2>

          <div className="flex flex-col gap-3 text-[0.6rem] sm:text-base text-foreground/90 leading-relaxed sm:leading-7 max-w-2xl">
            {points.map((point, index) => (
              <motion.p
                key={point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {point}
              </motion.p>
            ))}
          </div>

          {/* Spotify */}
          {spotify && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + points.length * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={spotify.song_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[0.6rem] sm:text-sm text-text-dim hover:text-foreground transition-colors"
              >
                <SiSpotify className="w-4 h-4 shrink-0 text-[#1DB954]" />
                <span>
                  Last Played —{" "}
                  <strong className="font-medium text-foreground group-hover:underline underline-offset-4">
                    “{spotify.song_name}”
                  </strong>{" "}
                  by {spotify.song_artist}
                </span>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

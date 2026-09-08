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
      className="px-2 sm:px-4 lg:px-20 pt-1 lg:pt-2 pb-4 lg:pb-6"
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

          <div className="space-y-4 text-[0.6rem] sm:text-base text-foreground/95 leading-relaxed ">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              I turn ideas into clean apps that not only work, but feel
              intuitive and enjoyable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
            >
              Always curious about new tools, I learn by building and
              experimenting with them.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              viewport={{ once: true }}
            >
              You’ll find me tackling programming challenges or planning out my
              next project.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              {spotify && (
                <p className="text-[0.6rem] sm:text-sm text-muted-foreground">
                  <a
                    href={spotify.song_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-foreground hover:underline hover:underline-offset-4 transition-colors"
                  >
                    <SiSpotify className="w-4 h-4 shrink-0 text-[#1DB954]" />
                    <span>
                      Last Played —{" "}
                      <strong className="font-medium text-foreground">
                        “{spotify.song_name}”
                      </strong>{" "}
                      by {spotify.song_artist}
                    </span>
                  </a>
                </p>
              )}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

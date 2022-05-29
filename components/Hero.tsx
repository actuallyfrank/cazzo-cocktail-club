import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full min-h-[540px] h-screen flex items-center relative"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
      >
        <source src="/video/cocktail.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute w-full flex flex-col gap-8  h-full text-white items-center justify-center px-4">
        <h1 className="text-5xl md:text-9xl font-semibold text-shadow shadow-black">
          Cazzo Cocktail Club
        </h1>
      </div>
    </motion.div>
  );
}

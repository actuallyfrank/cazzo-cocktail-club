import { Container } from "./Container";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="w-screen h-screen">
      <Container>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="flex items-center justify-center h-full"
        >
          <h1 className="text-7xl font-semibold">Cazzo Cocktail Club</h1>
        </motion.div>
      </Container>
    </div>
  );
}

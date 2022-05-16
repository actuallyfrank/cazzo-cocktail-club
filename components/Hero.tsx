import { Container } from "./Container";
import { motion } from "framer-motion";
import Countdown from "react-countdown";

export function Hero() {
  const Completionist = () => <span>Geen cocktail club op de planning!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span className="text-xl md:text-4xl text-center">
          {days} Days {hours} Hours {minutes} Minutes and {seconds} Seconds
        </span>
      );
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-yellow-400 to-pink-500 text-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-8 items-center justify-center h-full"
        >
          <h1 className="text-5xl md:text-8xl text-center font-semibold">
            Cazzo Cocktail Club
          </h1>
          <div className="flex flex-col items-center gap-4">
            <p className="text-base md:text-xl">Next party starts in: </p>
            <Countdown
              date={"2022-06-04T12:00:00"}
              renderer={renderer}
            ></Countdown>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

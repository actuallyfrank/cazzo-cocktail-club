import Countdown from "react-countdown";
import { Container } from "./Container";

export function EventCountDown() {
  const Completionist = () => <span>Geen cocktail club op de planning!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span className="text-5xl md:text-4xl ">
          {days} Days <br className="md:hidden" /> {hours} Hours{" "}
          <br className="md:hidden" /> {minutes} Minutes{" "}
          <br className="md:hidden" />
          {seconds} Seconds
        </span>
      );
    }
  };

  return (
    <Container>
      <div className="flex flex-col md:items-center gap-4 py-20">
        <p className="text-xl md:text-2xl font-bold">Next party starts in: </p>
        <Countdown date={"2022-06-04T12:00:00"} renderer={renderer}></Countdown>
      </div>
    </Container>
  );
}

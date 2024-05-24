import { Footer } from "../components/Footer";
import { FrankMenu } from "../components/menus/FrankMenu";
import { Hero } from "../components/Hero";
import { WouterEnJeroen } from "../components/menus/WouterJeroenMenu";
import { KatjaEnMelanieMenu } from "../components/menus/KatjaMelanieMenu";
import { ArjanRenataRikMenu } from "../components/menus/ArjanRenataRikMenu";
import { EventCountDown } from "../components/EventCountDown";
import { JeroenPeerMenu } from "../components/menus/JeroenPeerMenu";
import { JessieJordyMenu } from "../components/menus/JessieJordyMenu";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <EventCountDown />
      <JessieJordyMenu />
      <JeroenPeerMenu />
      <FrankMenu />
      <ArjanRenataRikMenu />
      <KatjaEnMelanieMenu />
      <WouterEnJeroen />
      <Footer />
    </div>
  );
}

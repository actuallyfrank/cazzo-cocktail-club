import { Footer } from "../components/Footer";
import { FrankMenu } from "../components/menus/FrankMenu";
import { Hero } from "../components/Hero";
import { WouterEnJeroen } from "../components/menus/WouterJeroenMenu";
import { KatjaEnMelanieMenu } from "../components/menus/KatjaMelanieMenu";
import { ArjanRenataRikMenu } from "../components/menus/ArjanRenataRikMenu";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FrankMenu />
      <ArjanRenataRikMenu />
      <KatjaEnMelanieMenu />
      <WouterEnJeroen />
      <Footer />
    </div>
  );
}

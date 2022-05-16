import { Footer } from "../components/Footer";
import { FrankMenu } from "../components/FrankMenu";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <FrankMenu />
      <Footer />
    </div>
  );
}

import Image from "next/image";
import { NavBar } from "./components/NavBar";
import HomePageCarousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen"> {/* Ensure full height and white background */}
      <HomePageCarousel />
    </div>
  );
}

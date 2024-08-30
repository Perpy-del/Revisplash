import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import NavBarComponent from "@/components/NavBarComponent";
import PhotosMagicComponent from "@/components/PhotosMagicComponent";

export default function Home() {
  return (
    <main className="">
      <NavBarComponent />
      <HeroComponent />
      <PhotosMagicComponent />
      <FooterComponent />
    </main>
  );
}

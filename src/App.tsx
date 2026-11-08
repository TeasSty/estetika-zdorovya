import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Place } from "./components/Place";
import { Programs } from "./components/Programs";
import { Proof } from "./components/Proof";
import { Protocol } from "./components/Protocol";
import { Specialist } from "./components/Specialist";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        К содержанию
      </a>
      <Header />
      <main>
        <Hero />
        <Protocol />
        <Specialist />
        <Programs />
        <Proof />
        <Place />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

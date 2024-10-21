import Hero from "./fonts/components/hero";
import RiwayatPendidikan from "./fonts/components/RiwayatPendidikan";
import RiwayatPekerjaan from "./fonts/components/RiwayatPekerjaan";
import "./en-style.css";

export default function CVonline() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
    </section>
  )
}
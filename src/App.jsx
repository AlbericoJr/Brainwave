import ButtonGradient from "./assets/svg/ButtonGradient"
import { Benefits } from "./components/Benefits"
import { Collaboration } from "./components/Collaboration"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { Services } from "./components/Services"

export default function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits />
        <Collaboration/>
        <Services/>
      </div>
      <ButtonGradient />
    </>
  )
}

//https://youtu.be/B91wc5dCEBA?si=f5yan3MrFRsjBTEI 2:02:00

//GitHub: https://github.com/adrianhajdin/brainwave/blob/main/src/components/Header.jsx

// https://ui8-brainwave-landing.herokuapp.com/roadmap
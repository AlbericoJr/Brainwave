import { brainwaveSymbol, check } from "../assets"
import { collabApps, collabContent, collabText } from "../constants"
import Button from "./Button"
import Section from "./Section"

import {LeftCurve, RightCurve} from "./design/Collaboration"

export const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h4 mt-11 mb-4 md:mb-8">
          Chat inteligente com IA para uma colaboração mais fluida e eficiente
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-neutral-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Experimente agora</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-neutral-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            Transforme a comunicação da sua equipe com tecnologia de IA, otimizando processos e conectando pessoas com mais produtividade.
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-neutral-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-neutral-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-neutral-8 rounded-full">
                  <img src={brainwaveSymbol} alt="brainwave" width={48} height={48} />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-neutral-7 border border-neutral-1/15 rounded-xl -rotate-${index * 45}`}>
                    <img src={app.icon} alt={app.title} className="m-auto" width={app.width} height={app.height} />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve/>
            <RightCurve/>

          </div>
        </div>
      </div>
    </Section>
  )
}

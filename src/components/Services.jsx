import { Heading } from "./Heading"
import Section from "./Section"

import { service1, service2, service3, check } from "../assets"
import { brainwaveServices, brainwaveServicesIcons } from "../constants"
import {PhotoChatMessage, Gradient, VideoBar, VideoChatMessage} from "./design/Services"

import Generating from "./Generating"

export const Services = () => {
  return (
    <Section id="how-to-use" className="">
      <div className="container">
        <Heading
          title="IA generativa feita para criadores."
          text="O Brainwave libera o potencial de aplicativos com tecnologia de IA."
        />

        <div className="relative">
          <div className="relative z-1 items-center h-[39rem] mb-5 p-8 border border-neutral-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="IA mais inteligente"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">IA mais inteligente</h4>
              <p className="body-2 mb-[3rem] text-neutral-3">
              O Brainwave libera todo o potencial de aplicações impulsionadas por IA.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-neutral-6"
                  >
                    <img src={check} width={24} height={24} alt="" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-neutral-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-neutral-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-neutral-8/0 to-neutral-8/90 lg:p-15">
                <h4 className="h4 mb-4">Edição de fotos</h4>
                <p className="body-2 mb-[3rem] text-neutral-3">Melhore suas fotos automaticamente com nosso recurso de edição inteligente por IA. Experimente agora!</p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="p-4  bg-neutral-7 rounded-3xl overflow-hidden lg:min-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Geração de vídeo</h4>
                <p className="body-2 mb-[2rem] text-neutral-3">
                Libere sua criatividade com o gerador de arte em fotos e vídeos mais avançado do mundo. O que você criará hoje?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li key={index} className={`rounded-2xl flex items-center justify-center ${index === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 bg-neutral-6 md:w-15 md:h-15"}`}>
                      <div className={index === 2 ? "flex items-center justify-center w-full h-full bg-neutral-7 rounded-[1rem]" : ""}>
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-neutral-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img src={service3} className="w-full h-full object-cover" width={520} height={400} alt="Robô assustador" />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient/>
        </div>
      </div>
    </Section>
  )
}

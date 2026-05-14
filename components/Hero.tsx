"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AdrianaRamirez from "../app/assets/Adriana Ramirez.webp";
import AdrianaRamirez2 from "../app/assets/Adriana Ramirez2.webp";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 bg-linear-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                Psicoterapeuta/Neuropsicóloga en Pitalito, Huila
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Dra. Luz Adriana Ramírez P.
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                {/*Psicóloga, Enfermera, Magister en Neuropsicología Clínica,
                Magister en Dirección y Gestión de Recursos Humanos, Magister en
                Coaching, Inteligencia Emocional y PNL, Magister en Hipnosis
                Clínica y Relajación, Maestrante en Neurociencia e investigación
                en imagen Neurológica*/}
                Brindamos acompañamiento profesional para ayudarte a comprender,
                gestionar y fortalecer tu bienestar emocional, personal o
                familiar y organizacional.
                <br />
                <br />
                Atención psicológica avalada por el{" "}
                <a
                  href="https://www.colpsic.org.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Colegio Colombiano de Psicólogos (COLPSIC)
                </a>
                , con más de 10 años de experiencia garantizando ética,
                profesionalismo y confianza en cada proceso.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground">
                +500 pacientes atendidos dan garantía de mis{" "}
                <button
                  onClick={() => scrollToSection("servicios")}
                  className=" text-primary hover:text-muted-foreground transition-all duration-300 text-sm sm:text-base"
                >
                  servicios
                </button>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={() => scrollToSection("contacto")}
                className="group bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Agendar Cita
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base"
              >
                Conoce a la especialista
                {/* Sobre la terapeuta*/}
              </button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[90%] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl max-w-xs sm:max-w-md mx-auto lg:max-w-none">
              <Image
                src={AdrianaRamirez2}
                alt="Dra. Luz Adriana Ramírez p.- Psicóloga profesional - Neuropsicologa"
                className="w-full h-auto object-cover aspect-3/4 md:hidden"
                priority
                placeholder="blur"
              />
              <Image
                src={AdrianaRamirez}
                alt="Dra. Luz Adriana Ramírez P.- Psicóloga profesional - Neuropsicologa"
                className="w-full h-auto 2xl:h-212.5 xl:h-212.5 object-cover aspect-3/4 hidden md:block"
                priority
                placeholder="blur"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-32 h-32 sm:w-48 sm:h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

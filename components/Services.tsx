"use client";
import { Heart, Users, Brain, Sparkles, UserCheck, Home } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Terapia Individual",
    description:
      "Sesiones personalizadas enfocadas en tu bienestar emocional, manejo de ansiedad, depresión y estrés.",
  },
  {
    icon: Users,
    title: "Terapia de Pareja",
    description:
      "Acompañamiento para mejorar la comunicación y fortalecer las relaciones afectivas.",
  },
  {
    icon: Brain,
    title: "Salud Mental",
    description:
      "Diagnóstico y tratamiento de trastornos emocionales y conductuales con enfoque integral.",
  },
  {
    icon: Sparkles,
    title: "Desarrollo Personal",
    description:
      "Proceso de autoconocimiento y crecimiento personal para alcanzar tus metas y potencial.",
  },
  {
    icon: UserCheck,
    title: "Terapia Adolescentes",
    description:
      "Apoyo especializado para adolescentes en etapas de cambio y desarrollo emocional.",
  },
  {
    icon: Home,
    title: "Orientación Familiar",
    description:
      "Asesoramiento para mejorar la dinámica familiar y resolver conflictos del hogar.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Servicios Profesionales
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Brindo atención psicológica, humana y especializada, desde la ética,
            enfocada en ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg sm:rounded-xl p-5 sm:p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                    size={24}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

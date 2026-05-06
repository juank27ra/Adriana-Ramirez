"use client";
import { Heart, Users, Brain, Sparkles, UserCheck, Home } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Valoracion Psicológica y Neuropsicológica",
    description:
      "Evaluacion y diagnostico de las condiciones psicológicas y neuropsicológicas del paciente",
  },
  {
    icon: Users,
    title: "Dirección y Gestión de Recursos Humanos",
    description:
      "Desarrollo estrategico enfocado en atraer, desarrollar y retener el talento para alcanzar los objetivos organizacionales",
  },
  {
    icon: Brain,
    title: "Psicoterapia",
    description:
      "Sesiones personalizadas enfocadas en el tratamiento del bienestar emocional y la rehabilitación de condiciones neurológicas.",
  },
  {
    icon: Sparkles,
    title: "Aplicación de Pruebas Psicométricas",
    description:
      "Evaluación y medición de rasgos, dimensiones y aspectos de la personalidad, así como las cualificaciones de habilidades, destrezas y valores de la persona",
  },
  {
    icon: UserCheck,
    title: "Coaching y Mentoring Organizacional",
    description:
      "Procesos de desarrollo empresarial que potencian el talento humano y mejoran el desempeño para el logro de objetivos",
  },
  {
    icon: Home,
    title: "Asesorías",
    description:
      "Evaluación de rutas de atención que faciliten los procesos clínicos, organizacionales y jurídicos",
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
            Brindamos atención Psicológica, Neuropsicológica especializada,
            Conferencias, Capacitaciones y asesorias
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

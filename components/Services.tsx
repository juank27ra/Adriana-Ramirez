"use client";
import Image from "next/image";
import valoracionPsicológica from "../app/assets/Valoración Psicológica.webp";
import DireccionGestion from "../app/assets/Dirección y gestión.webp";
import pruebasPsicometricas from "../app/assets/pruebas psicométricas.webp";
import psicologiaClinica from "../app/assets/psicologia clínica.webp";
import coachiong from "../app/assets/coaching.webp";
import asesorias from "../app/assets/asesorias profesionales.webp";

const services = [
  {
    image: valoracionPsicológica,
    alt: "Valoración psicológica y neuropsicológica",
    title: "Valoración Psicológica y Neuropsicológica",
    description:
      "Evaluación y diagnostico de las condiciones psicológicas y neuropsicológicas del paciente",
  },
  {
    image: DireccionGestion,
    alt: "Dirección y gestión de recursos humanos",
    title: "Dirección y Gestión de Recursos Humanos",
    description:
      "Desarrollo estrategico enfocado en atraer, desarrollar y retener el talento para alcanzar los objetivos organizacionales",
  },
  {
    image: psicologiaClinica,
    alt: "Psicoterapia clínica",
    title: "Psicoterapia",
    description:
      "Sesiones personalizadas enfocadas en el tratamiento del bienestar emocional y la rehabilitación de condiciones neuropsicológicas.",
  },
  {
    image: pruebasPsicometricas,
    alt: "Aplicación de pruebas psicométricas",
    title: "Aplicación de Pruebas Psicométricas",
    description:
      "Evaluación y medición de rasgos, dimensiones y aspectos de la personalidad, así como las cualificaciones de habilidades, destrezas y valores de la persona",
  },
  {
    image: coachiong,
    alt: "Coaching y mentoring organizacional",
    title: "Coaching y Mentoring Organizacional",
    description:
      "Procesos de desarrollo empresarial; que potencian el talento humano y mejoran el desempeño para el logro de objetivos",
  },
  {
    image: asesorias,
    alt: "Asesorías profesionales",
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
            Diagnóstico, tratamiento y acompañamiento de las condiciones
            psicológicas y neuropsicológicas. conferencias, capacitaciones,
            asesorías entre otros.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

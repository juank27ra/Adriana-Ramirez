"use client";
import {
  GraduationCap,
  Syringe,
  Brain,
  Award,
  BookOpen,
  BookOpenText,
} from "lucide-react";

const education = [
  {
    icon: Brain,
    year: "2026",
    title:
      "Maestrante en Neurociencia e investigación en la imagen neurológica ",
    institution: "España. Convalidación y Apostillaje de la Haya",
    description: "",
  },
  {
    icon: GraduationCap,
    year: "2023",
    title: " Magister en Hipnosis Clínica y Relajación. ",
    institution: "España. Convalidación y Apostillaje de la Haya",
    description: "",
  },
  {
    icon: BookOpen,
    year: "2021",
    title: "Magister en Coaching, inteligencia Emocional y PNL.",
    institution: "España. Convalidación y Apostillaje de la Haya",
    description: "",
  },
  {
    icon: Award,
    year: "2019",
    title: " Magister en Neuropsicología Clínica ",
    institution: "España. Convalidación y Apostillaje de la Haya",
    description: "",
  },
  {
    icon: BookOpenText,
    year: "2018",
    title: "Magister en Dirección de Recursos Humanos",
    institution: "España. Convalidación y Apostillaje de la Haya",
    description: "",
  },
  {
    icon: Brain,
    year: "2017",
    title: "Psicología",
    institution: "Corporación Universitaria Minuto de Dios",
    description: "Título profesional en Psicología",
  },
  {
    icon: Syringe,
    year: "2013",
    title: "Enfermería",
    institution: "Cesalud",
    description: "",
  },
  {
    icon: GraduationCap,
    year: "",
    title: "DIPLOMADOS Y OTROS",
    institution: "España. Convalidación y Apostillaje de la Haya",
    description:
      "Diplomado en neuro psicología del Alzheimer; Diplomado Psicogerentologia en cuidados del adulto mayor; Diplomado en neuropsicología y competencias socioemocionales; Diplomado en habilidades socioemocionales en educación; Diplomado en educación y cátedra de paz; Certificación en habilidades blandas, inteligencia emocional, habilidades de comunicación, resiliencia y solución de conflictos; Título experto en humanización en asistencia sanitaria; Formación en inteligencia artificial.",
  },
];

export default function Education() {
  return (
    <section
      id="estudios"
      className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Formación Académica
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Capacitación continua y profunda para brindar el mejor servicio
            profesional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            {education.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative mb-8 sm:mb-10 md:mb-12 ${
                    isEven ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <div className="absolute left-6 sm:left-8 md:left-1/2 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-white shadow-lg transform -translate-x-1/2 md:translate-x-0"></div>

                  <div
                    className={`ml-12 sm:ml-16 md:ml-0 ${isEven ? "md:mr-12" : "md:ml-12"}`}
                  >
                    <div className="bg-white border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div
                        className={`flex items-start gap-3 sm:gap-4 ${isEven ? "md:flex-row-reverse" : ""}`}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div
                          className={`flex-1 ${isEven ? "md:text-right" : ""}`}
                        >
                          <span className="inline-block bg-primary/10 text-primary px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2">
                            {item.year}
                          </span>
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1.5 sm:mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base text-primary font-medium mb-1.5 sm:mb-2">
                            {item.institution}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

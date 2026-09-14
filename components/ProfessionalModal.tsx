"use client";
import {
  Brain,
  HeartPulse,
  Users,
  GraduationCap,
  FlaskConical,
  Home,
  Compass,
  UserRound,
  HandHeart,
  Building2,
  Heart,
  Lightbulb,
} from "lucide-react";
import { Modal } from "./Modal";
import { useEffect } from "react";

interface ProfessionalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const pillars = [
  {
    icon: Heart,
    title: "Vocación desde el inicio",
    description:
      "La Dra. Luz Adriana entendió desde temprano que la psicología es ante todo un compromiso humano. Su vocación la llevó a elegir el área clínica como el espacio donde podría generar un impacto real y profundo.",
  },
  {
    icon: Lightbulb,
    title: "Una trayectoria construida en campo",
    description:
      "Su experiencia no es sólo teórica: la ha forjado en entornos reales, diversos y exigentes, atendiendo personas, familias y organizaciones con la misma dedicación desde el primer día.",
  },
  {
    icon: Users,
    title: "Raíces en el sur colombiano",
    description:
      "Establecida en Pitalito, Huila, conoce de cerca las realidades culturales y sociales de su comunidad, lo que le permite ofrecer un acompañamiento genuino, sin juicios y culturalmente pertinente.",
  },
];

const experiences = [
  {
    icon: Brain,
    role: "Psicóloga y Neuropsicóloga",
    context: "Atención Clínica",
    color:
      "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800",
    iconBg: "bg-blue-100 dark:bg-blue-900/60",
    iconColor: "text-blue-700 dark:text-blue-300",
    tag: "Clínico",
    tagColor:
      "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300",
  },
  {
    icon: HeartPulse,
    role: "Enfermera",
    context: "Salud y Cuidado",
    color:
      "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800",
    iconBg: "bg-rose-100 dark:bg-rose-900/60",
    iconColor: "text-rose-600 dark:text-rose-300",
    tag: "Salud",
    tagColor:
      "bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-300",
  },
  {
    icon: Building2,
    role: "Gerente de Recursos Humanos",
    context: "Gestión Organizacional",
    color:
      "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/60",
    iconColor: "text-indigo-700 dark:text-indigo-300",
    tag: "Organizacional",
    tagColor:
      "bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300",
  },
  {
    icon: GraduationCap,
    role: "Docente",
    context: "Educación Superior",
    color:
      "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800",
    iconBg: "bg-amber-100 dark:bg-amber-900/60",
    iconColor: "text-amber-700 dark:text-amber-300",
    tag: "Educativo",
    tagColor:
      "bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300",
  },
  {
    icon: FlaskConical,
    role: "Asesora de Proyectos de Investigación",
    context: "Investigación Científica",
    color:
      "bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800",
    iconBg: "bg-teal-100 dark:bg-teal-900/60",
    iconColor: "text-teal-700 dark:text-teal-300",
    tag: "Investigación",
    tagColor:
      "bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300",
  },
  {
    icon: Home,
    role: "Visitadora Domiciliaria y Analista de Operaciones",
    context: "Atención Comunitaria",
    color:
      "bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-800",
    iconBg: "bg-green-100 dark:bg-green-900/60",
    iconColor: "text-green-700 dark:text-green-300",
    tag: "Comunitario",
    tagColor:
      "bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-300",
  },
  {
    icon: Compass,
    role: "Psico-orientadora",
    context: "Orientación Vocacional",
    color:
      "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800",
    iconBg: "bg-violet-100 dark:bg-violet-900/60",
    iconColor: "text-violet-700 dark:text-violet-300",
    tag: "Orientación",
    tagColor:
      "bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300",
  },
  {
    icon: UserRound,
    role: "Psicóloga",
    context: "Práctica Independiente",
    color: "bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800",
    iconBg: "bg-sky-100 dark:bg-sky-900/60",
    iconColor: "text-sky-700 dark:text-sky-300",
    tag: "Clínico",
    tagColor: "bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300",
  },
  {
    icon: HandHeart,
    role: "Asistente en Psicología",
    context: "Apoyo Clínico",
    color:
      "bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800",
    iconBg: "bg-pink-100 dark:bg-pink-900/60",
    iconColor: "text-pink-600 dark:text-pink-300",
    tag: "Clínico",
    tagColor:
      "bg-pink-100 dark:bg-pink-900/60 text-pink-600 dark:text-pink-300",
  },
  {
    icon: Users,
    role: "Psicóloga RRHH Externa",
    context: "Consultoría Empresarial",
    color:
      "bg-orange-50 dark:bg-orange-950/40 border-orange-200 dark:border-orange-800",
    iconBg: "bg-orange-100 dark:bg-orange-900/60",
    iconColor: "text-orange-600 dark:text-orange-300",
    tag: "Organizacional",
    tagColor:
      "bg-orange-100 dark:bg-orange-900/60 text-orange-600 dark:text-orange-300",
  },
];

export default function ProfessionalModal({
  isOpen,
  onClose,
}: ProfessionalModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Conoce a la Profesional"
      size="lg"
    >
      {/* intro */}
      <div className="mb-6">
        <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-3">
          La{" "}
          <strong className="text-primary">Dra. Luz Adriana Ramírez P.</strong>{" "}
          mantiene la pasión por comprender la conducta humana y nace desde el
          interés genuino por entender cómo las emociones, las experiencias y el
          entorno influyen en el bienestar individual y colectivo. Con cerca de
          10 años de experiencia profesional, ha fortalecido constantemente su
          formación académica y clínica, realizando múltiples estudios y
          especializaciones en psicología y neuropsicología, con el propósito de
          ofrecer un acompañamiento más humano, ético y efectivo.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Su camino no ha sido lineal: lo ha tejido desde diferentes roles,
          disciplinas y contextos, lo que la convierte en una profesional con
          una visión amplia, empática y profundamente humana.
        </p>
      </div>

      {/* pillars */}
      <div className="space-y-3 mb-7">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="flex gap-4 p-4 bg-muted/50 rounded-xl border border-border"
            >
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="text-primary" size={18} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-0.5">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* experience grid */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
          Entornos de atención donde ha construido su experiencia
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.role}
                className={`flex items-start gap-3 p-3.5 rounded-xl border ${exp.color} transition-transform duration-200 hover:-translate-y-0.5`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${exp.iconBg}`}
                >
                  <Icon className={exp.iconColor} size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {exp.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {exp.context}
                  </p>
                </div>
                <span
                  className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full shrink-0 self-start ${exp.tagColor}`}
                >
                  {exp.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* closing quote */}
      <blockquote className="border-l-4 border-primary/40 pl-4 py-2 bg-primary/5 rounded-r-xl">
        <p className="text-sm sm:text-base italic text-foreground/80 leading-relaxed">
          Creo profundamente en la capacidad de cada persona u organización para
          transformarse. Mi rol es acompañar profesionalmente ese proceso con
          respeto, calidez y herramientas que realmente funcionen.
        </p>
        <footer className="mt-2 text-xs text-muted-foreground font-medium">
          — Dra. Luz Adriana Ramírez
        </footer>
      </blockquote>
    </Modal>
  );
}

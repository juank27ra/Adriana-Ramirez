"use client";

import { X, PlayCircle } from "lucide-react";
import { useEffect } from "react";
interface HeroVideoPopupProps {
  onClose: () => void;
}

export default function HeroVideoPopup({ onClose }: HeroVideoPopupProps) {
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
    <>
      {/* BOTÓN HERO */}
      <button
        onClick={onClose}
        className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
      >
        <PlayCircle className="h-5 w-5" />
        Ver video presentacional
      </button>
      {/* POPUP */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* CARD */}
        <div
          className="relative w-full max-w-2xl rounded-3xl bg-background p-6 shadow-2xl md:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* BOTÓN CERRAR */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-border p-2 text-foreground transition hover:bg-switch-background"
          >
            <X className="h-5 w-5" />
          </button>

          {/* CONTENIDO */}
          <div className="flex flex-col items-center text-center">
            {/*<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-border">
              <PlayCircle className="h-10 w-10 text-chart-5" />
            </div>*/}

            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              {/* Próximamente video presentacional*/}
              Más de la Profesional
            </h2>

            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              La pasión por comprender la conducta humana nace desde el interés
              genuino por entender cómo las emociones, las experiencias y el
              entorno influyen en la vida de cada persona. Cerca de 10 años de
              experiencia profesional, la Dra. Luz Adriana ha fortalecido
              constantemente su formación académica y clínica, realizando
              múltiples estudios y especializaciones en psicología y
              neuropsicología, con el propósito de ofrecer un acompañamiento más
              humano, ético y efectivo.
              <br />
              <br />
              Su experiencia y conocimiento ha sido construido en diferentes
              entornos de atención como: Enfermera, Gerente de Recursos Humanos,
              Docente, Asesora de proyectos de investigación, Visitadora
              domiciliaria y analista de operaciones, Psico- orientadora,
              Psicóloga, Asistente en Psicología y Psicóloga RRHH Externa;
              manteniendo siempre un compromiso permanente con la actualización
              profesional y el bienestar integral de cada paciente.
              <br />
              <br />
              Este servicio está dirigido a personas, familias y organizaciones
              que buscan orientación profesional, crecimiento emocional y
              herramientas para afrontar diferentes situaciones personales,
              familiares o laborales desde un enfoque cercano, humano e
              integral. Más que un consultorio, se ha construido un espacio
              seguro, profesional y confiable, donde cada proceso es acompañado
              con sensibilidad, escucha y un compromiso real con el bienestar de
              quienes depositan su confianza en nosotros.
            </p>

            {/*<div className="mt-6 rounded-2xl bg-input-background   p-4 text-sm muted-foreground ">
              Luz Adriana Ramirez P. es una persona que ha consolidado su
              experiencia profesional en varios entornos, a través del tiempo:
              ha trabajado en el Hospital Departamental San Antonio de pitalito,
              ha sido Un espacio creado para que puedas sentir confianza,
              tranquilidad y la seguridad de estar en excelentes manos
              profesionales.
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
}

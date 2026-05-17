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
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-border">
              <PlayCircle className="h-10 w-10 text-chart-5" />
            </div>

            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Próximamente video presentacional
            </h2>

            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Muy pronto podrás conocer más sobre quién está detrás de este
              espacio profesional, cómo nace su pasión por comprender, entender
              y ayudar a las personas desde la psicología y la neuropsicología,
              además de su enfoque intelectual, humano, profesional y cercano
              para acompañar cada proceso de manera integral.
            </p>

            <div className="mt-6 rounded-2xl bg-input-background   p-4 text-sm muted-foreground ">
              Un espacio creado para que puedas sentir confianza, tranquilidad y
              la seguridad de estar en excelentes manos profesionales.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

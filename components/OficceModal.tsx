"use client";
import { Users, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { Modal } from "./Modal";
import { useEffect } from "react";
import Recepción from "../app/assets/recepción.jpeg";
import entrada from "../app/assets/entrada.jpeg";
import SalaEspera from "../app/assets/sala de espera.jpeg";
import Consultorio from "../app/assets/consultorio.jpeg";
import Caffe from "../app/assets/caffe.jpeg";
import Image from "next/image";

interface OfficeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const officeImages = [
  {
    src: entrada,
    alt: "Entrada del consultorio",
    label: "Entrada",
  },
  {
    src: Recepción,
    alt: "Recepción del consultorio",
    label: "Recepción",
  },
  {
    src: SalaEspera,
    alt: "Sala de espera",
    label: "Sala de espera",
  },
  {
    src: Caffe,
    alt: "Área de bienestar",
    label: "Área de bienestar",
  },
];

const mainOfficeImage = {
  src: Consultorio,
  alt: "Consultorio principal de atención psicológica",
  label: "Consultorio de atención",
};

const features = [
  {
    icon: Users,
    title: "Equipo multidisciplinar",
    description:
      "El espacio reúne a varios profesionales de la salud y el bienestar que comparten la visión de un acompañamiento integral y humano.",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente seguro y confidencial",
    description:
      "Todo el lugar está diseñado para que como persona individual, familias u organizaciones se sientan en un entorno de confianza total.",
  },
  {
    icon: Sparkles,
    title: "Bienestar como propósito",
    description:
      "Más que un consultorio, es un espacio donde el bienestar de cada persona que llega es el verdadero norte de todos quienes trabajamos aquí.",
  },
  {
    icon: Building2,
    title: "Espacio compartido con propósito",
    description:
      "Distintos profesionales de la salud mental y el desarrollo humano conviven en un ambiente cálido, pensado para potenciar el trabajo colaborativo en favor del paciente.",
  },
];

export default function OfficeModal({ isOpen, onClose }: OfficeModalProps) {
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
      title="Sobre el Consultorio"
      size="xl"
    >
      {/* intro */}
      <div className="mb-6">
        <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-3">
          Hace aproximadamente 10 años, se abre un{" "}
          <strong className="text-primary">
            espacio para consulta psicológica en el territorio Laboyano,{" "}
          </strong>
          con el propósito de prestar un servicio que mostrara diversas opciones
          para el bienestar en salud mental y la activación de rutas de
          atención, gracias a la gran acogida y el cariño de la gente, fuimos
          descubriendo sus necesidades y, por supuesto, motivándonos a crecer
          para dar respuesta a tantos interrogantes. Gracias a los consultantes,
          instituciones, profesionales y amigos que confiaron en nosotros y que
          se encargaron de vos a vos recomendar nuestro servicios, fuimos
          creciendo hasta consolidar el equipo que hoy somos.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Quienes somos? El consultorio está conformado por un equipo de
          profesionales con calidad humana, (abogados, contadores, auxiliares,
          etc. ) dedicado al servicio, en cabeza de la doctora Luz Adriana
          Ramírez P. ayudan a la integración y el manejo de acuerdo de las
          normativas vigentes en el ámbito clínico, jurídico y organizacional.
          El consultorio es una unidad promotora de bienestar que está
          comprometida para proporcionar un abanico de opciones en cada
          situación que afecte la integridad en la salud mental individual o
          colectiva, jurídica y empresarial de nuestros consultantes. El
          consultorio está habilitado por la Secretaría de salud para activar
          rutas de atención con las diferentes instituciones del Estado, además
          de ofrecer opciones de manera particular, con profesionales que se
          desarrollan en cada área, para no limitar el acompañamiento exclusivo
          a nosotros, sino con la idea de que el consultante conozca todas las
          ayudas posibles que pueden tener con nosotros o con otros
          profesionales. Con la experiencia y la calidad humana de los
          profesionales que integran el equipo en los diferentes campos, se
          comparte el mismo objetivo: que Nuestra prioridad siempre sea el
          bienestar del consultante. Nuestro lema: estamos para servir
        </p>
      </div>

      {/* featured image — consultorio principal */}
      <div className="mb-5">
        <div className="relative rounded-xl overflow-hidden shadow-lg aspect-16/7 w-full">
          <Image
            src={mainOfficeImage.src}
            alt={mainOfficeImage.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-4 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            {mainOfficeImage.label}
          </span>
        </div>
      </div>

      {/* secondary image grid — 2×2 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-7">
        {officeImages.map((img) => (
          <div
            key={img.label}
            className="relative rounded-lg overflow-hidden shadow aspect-square group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full leading-tight">
              {img.label}
            </span>
          </div>
        ))}
      </div>

      {/* features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="flex gap-3 p-4 bg-muted/50 rounded-xl border border-border"
            >
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="text-primary" size={18} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {f.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* closing CTA strip */}
      <div className="bg-primary/8 border border-primary/20 rounded-xl p-4 text-center">
        <p className="text-sm text-foreground/80 leading-relaxed">
          Cada profesional que trabaja en este espacio comparte el compromiso de
          acompañarte con respeto, calidez y ética.{" "}
          <span className="text-primary font-semibold">
            Tu bienestar es nuestra razón de ser.
          </span>
        </p>
      </div>
    </Modal>
  );
}

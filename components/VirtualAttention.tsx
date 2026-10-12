"use client";
import {
  MapPin,
  Video,
  Users,
  UserRound,
  Wifi,
  ShieldCheck,
  Clock,
  Globe,
} from "lucide-react";

const presencialFeatures = [
  { icon: MapPin, text: "Espacio privado y acondicionado en Pitalito, Huila" },
  { icon: ShieldCheck, text: "Ambiente seguro y completamente confidencial" },
  { icon: Users, text: "Ideal para familias, parejas y grupos presenciales" },
  { icon: Clock, text: "Lunes a viernes 8 AM – 6 PM · Sábados 9 AM – 1 PM" },
];

const virtualFeatures = [
  { icon: Globe, text: "Desde cualquier lugar de Colombia o el mundo" },
  { icon: Wifi, text: "Videollamada estable con total privacidad" },
  {
    icon: UserRound,
    text: "Para pacientes individuales o sesiones grupales remotas",
  },
  { icon: Clock, text: "Horarios flexibles adaptados a tu disponibilidad" },
];

const audiences = [
  {
    label: "Pacientes individuales",
    desc: "Seguimiento terapéutico continuo sin importar tu ubicación.",
  },
  {
    label: "Parejas",
    desc: "Sesiones de pareja coordinadas desde distintos espacios.",
  },
  { label: "Familias", desc: "Todos los miembros conectados desde casa." },
  {
    label: "Equipos y organizaciones",
    desc: "Talleres, capacitaciones y asesorías grupales en línea.",
  },
];

export default function VirtualAttention() {
  return (
    <section id="atencion-virtual" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-primary/10 text-primary text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wide uppercase">
            Modalidades de Atención
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Presencial o Virtual — Tú Eliges
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Pensando en el bienestar de cada paciente, ofrezco acompañamiento
            profesional en ambas modalidades para que la distancia nunca sea un
            obstáculo.
          </p>
        </div>

        {/* main split card */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-xl mb-10 sm:mb-14">
          {/* presencial */}
          <div className="bg-linear-to-br from-blue-50 to-white  p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary">
                  Atención Presencial
                </h3>
                <p className="text-xs text-muted-foreground">
                  Pitalito, Huila-Colombia
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              El encuentro cara a cara en un espacio cálido y privado, diseñado
              para que te sientas seguro y acompañado desde el primer momento.
            </p>

            <ul className="space-y-3">
              {presencialFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="text-primary" size={15} />
                  </div>
                  <span className="text-sm text-foreground/80 leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* divider — horizontal on mobile, vertical on desktop */}
          <div className="relative md:hidden flex items-center gap-4 px-8 py-4 bg-muted/30">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              También
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 pointer-events-none"
            aria-hidden="true"
          />

          {/* virtual */}
          <div className="bg-linear-to-br from-indigo-50 to-white  p-6 sm:p-8 md:p-10 border-t md:border-t-0 md:border-l border-border">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                <Video className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-indigo-700 ">
                  Atención Virtual
                </h3>
                <p className="text-xs text-muted-foreground">
                  Desde cualquier lugar
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              La misma calidad de acompañamiento clínico, ahora sin barreras
              geográficas. Conéctate desde donde estés y recibe atención
              profesional en tiempo real.
            </p>

            <ul className="space-y-3">
              {virtualFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="text-indigo-600 " size={15} />
                  </div>
                  <span className="text-sm text-foreground/80 leading-snug">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* who can attend virtually */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-5">
            ¿Quién puede acceder a la atención virtual?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {audiences.map(({ label, desc }) => (
              <div
                key={label}
                className="bg-muted/40 border border-border rounded-xl p-4 text-center hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <p className="text-sm font-semibold text-primary mb-1">
                  {label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

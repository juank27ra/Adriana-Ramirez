"use client";
import {
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Video,
  Globe,
  CreditCard,
  Lock,
} from "lucide-react";
import PaymentModal from "./PaymentModal";
import { useState } from "react";

const PHONENUMBER = process.env.WHATSAPP_NUMBER;
function whatsappUrl(message: string) {
  return `https://wa.me/${PHONENUMBER}?text=${encodeURIComponent(message)}`;
}

const presencialUrl = whatsappUrl(
  "Hola Dra. Luz Adriana Ramirez P., me gustaría agendar una cita PRESENCIAL. ¿Cuál es su disponibilidad?",
);
const virtualUrl = whatsappUrl(
  "Hola Dra. Luz Adriana Ramirez P., me gustaría agendar una cita VIRTUAL. ¿Cuál es su disponibilidad?",
);

const infoItems = [
  {
    icon: MessageCircle,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
    label: "WhatsApp",
    content: (
      <>
        <a
          href={whatsappUrl(
            "Hola Dra. Luz Adriana, quisiera obtener más información.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base text-muted-foreground hover:text-green-600 transition-colors"
        >
          +57 3124758174
        </a>
        <p className="text-xs text-green-600 mt-1 font-medium">
          ✓ Solo WhatsApp, no llamadas
        </p>
      </>
    ),
  },
  {
    icon: Mail,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    label: "Email",
    content: (
      <a
        href="mailto:adrianaramirez_29@hotmail.com"
        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
      >
        adrianaramirez_29@hotmail.com
      </a>
    ),
  },
  {
    icon: MapPin,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    label: "Ubicación",
    content: (
      <p className="text-sm sm:text-base text-muted-foreground">
        Pitalito, Huila, Colombia
      </p>
    ),
  },
  {
    icon: Clock,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    label: "Horario de Atención",
    content: (
      <p className="text-sm sm:text-base text-muted-foreground">
        Lunes a Viernes: 8:00 AM – 6:00 PM
        <br />
        Sábados: 9:00 AM – 1:00 PM
      </p>
    ),
  },
];
export default function Contact() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <>
      <section
        id="contacto"
        className="py-12 sm:py-16 md:py-20 bg-linear-to-br from-blue-50 via-white to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
              Contáctame
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Dar el primer paso puede cambiar tu vida. Estamos aquí para
              acompañarte en tu proceso
            </p>
          </div>
          {/* info card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-white border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                  Información de Contacto
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  {infoItems.map(
                    ({ icon: Icon, iconBg, iconColor, label, content }) => (
                      <div
                        key={label}
                        className="flex items-start gap-3 sm:gap-4"
                      >
                        <div
                          className={`w-10 h-10 sm:w-12 sm:h-12 ${iconBg} rounded-lg flex items-center justify-center shrink-0`}
                        >
                          <Icon className={iconColor} size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground mb-1 text-sm sm:text-base">
                            {label}
                          </p>
                          {content}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
            {/* appointment cards */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* presencial */}
              <div className="flex-1 bg-linear-to-br from-green-50 to-white border-2 border-green-200  rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-green-500 rounded-xl flex items-center justify-center shadow-md shrink-0">
                    <MessageCircle className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                      Cita Presencial
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Consultorio en Pitalito, Huila - Colombia
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  Agenda tu sesión cara a cara en nuestro espacio privado y
                  acondicionado. Atención personalizada en un ambiente seguro y
                  confidencial.
                </p>

                <a
                  href={presencialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/40 hover:scale-[1.02] w-full font-semibold text-sm sm:text-base"
                >
                  <MessageCircle
                    className="group-hover:scale-110 transition-transform shrink-0"
                    size={20}
                  />
                  Agendar Cita Presencial
                </a>
              </div>

              {/* virtual */}
              <div className="flex-1 bg-linear-to-br from-indigo-50 to-white border-2 border-indigo-200 rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shrink-0">
                    <Video className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                      Cita Virtual
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Videollamada · Desde cualquier lugar
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  Recibe acompañamiento profesional sin salir de casa. Sesiones
                  individuales, de pareja, familiares o grupales en línea con la
                  misma calidad clínica.
                </p>

                <a
                  href={virtualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/40 hover:scale-[1.02] w-full font-semibold text-sm sm:text-base"
                >
                  <Video
                    className="group-hover:scale-110 transition-transform shrink-0"
                    size={20}
                  />
                  Agendar Cita Virtual
                </a>
              </div>

              <p className="text-center text-xs text-muted-foreground italic px-2">
                💬 Ambos botones abren WhatsApp con un mensaje prediseñado ·
                Respuesta rápida en horario de atención
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* international strip */}
      <section className="py-8 sm:py-10 bg-linear-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black border-t border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 ring-1 ring-white/20 shadow-lg">
              <Globe className="text-indigo-300" size={26} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                ¿Estás fuera de Colombia?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Coordina tu sesión virtual nacional o internacional por WhatsApp
                y realiza tu pago de forma segura.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0">
              <button
                onClick={() => setIsPaymentOpen(true)}
                className="group flex items-center gap-2.5 bg-[#00C28B] hover:bg-[#00a876] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-[#00C28B]/40 hover:scale-[1.03] whitespace-nowrap"
              >
                <Lock size={17} className="shrink-0" />
                Pago Seguro
              </button>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <CreditCard size={11} />
                Pago seguro · Cita coordinada previamente
              </p>
            </div>
          </div>
        </div>
      </section>
      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
      />
    </>
  );
}

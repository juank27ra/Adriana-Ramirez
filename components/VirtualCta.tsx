"use client";
import { useState } from "react";
import { Video, CreditCard, MessageCircle, Sparkles } from "lucide-react";
import PaymentModal from "./PaymentModal";
import { messageVirtual, PHONENUMBER } from "./Contact";

if (!PHONENUMBER) {
  throw new Error("Falta configurar el número de whatsapp");
}
const WHATSAPP_VIRTUAL_URL = `https://wa.me/${PHONENUMBER}?text=${encodeURIComponent(messageVirtual)}`;

export default function VirtualCTA() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <>
      <section
        id="virtualCTA"
        className="py-10 sm:py-12 bg-linear-to-r from-indigo-600 via-indigo-700 to-blue-800 "
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* icon + text */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0 shadow-lg ring-1 ring-white/20">
                <Video className="text-white" size={28} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="text-yellow-300 shrink-0" size={14} />
                  <span className="text-yellow-300 text-xs font-semibold uppercase tracking-wider">
                    Sesión Virtual
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  ¿Ya agendaste tu sesión virtual?
                </h2>
                <p className="text-indigo-200 text-sm mt-1 leading-snug">
                  Si ya coordinaste tu cita con la Dra. Luz Adriana, realiza tu
                  pago de forma segura.
                </p>
              </div>
            </div>

            {/* actions */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => setIsPaymentOpen(true)}
                className="group flex items-center justify-center gap-2.5 bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-white/30 hover:scale-[1.03] whitespace-nowrap"
              >
                <CreditCard
                  className="group-hover:scale-110 transition-transform shrink-0"
                  size={19}
                />
                Pago Seguro
              </button>

              <a
                href={WHATSAPP_VIRTUAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 whitespace-nowrap"
              >
                <MessageCircle
                  className="group-hover:scale-110 transition-transform flex-shrink-0"
                  size={19}
                />
                <span className="leading-tight text-center">
                  ¿No has agendado?{" "}
                  <span className="font-bold">Hazlo aquí</span>
                </span>
              </a>
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

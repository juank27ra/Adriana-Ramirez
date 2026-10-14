"use client";
import {
  CheckCircle2,
  Camera,
  MessageCircle,
  ShieldCheck,
  Lock,
  ExternalLink,
} from "lucide-react";
import { Modal } from "./Modal";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Reemplazar este enlace de pago real de Wompi
const WOMPI_PAYMENT_URL = "https://checkout.wompi.co/l/TU_LINK_DE_PAGO";

const WHATSAPP_VIRTUAL_URL =
  "https://wa.me/573001234567?text=" +
  encodeURIComponent(
    "Hola Dra. Luz Adriana Ramirez P, me gustaría agendar una cita VIRTUAL. ¿Cuál es su disponibilidad?",
  );

const steps = [
  {
    icon: MessageCircle,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 border-green-200 dark:border-green-800",
    dot: "bg-green-500",
    title: "Cita agendada",
    desc: "Ya acordaste con la Dra. Luz Adriana Ramirez P. el día y la hora de tu sesión virtual por WhatsApp.",
  },
  {
    icon: CheckCircle2,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 border-blue-200 dark:border-blue-800",
    dot: "bg-blue-500",
    title: "Valor de la sesión acordado",
    desc: "Confirmaste el valor de la consulta directamente con la profesional en el chat de WhatsApp.",
  },
  {
    icon: Camera,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50  border-violet-200 dark:border-violet-800",
    dot: "bg-violet-500",
    title: "Captura de pantalla lista",
    desc: "Toma una captura del pago y compártela por WhatsApp una vez realizado el pago.",
  },
];

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Pago Seguro de Sesión Virtual"
      size="md"
    >
      {/* header note */}
      <div className="flex items-start gap-3 p-3.5 bg-amber-50  border border-amber-200 dark:border-amber-700 rounded-xl mb-5">
        <ShieldCheck className="text-amber-600 shrink-0 mt-0.5" size={18} />
        <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          <strong>Antes de pagar</strong>, asegúrate de cumplir los siguientes
          pasos. El pago sin cita previa no garantiza la atención.
        </p>
      </div>

      {/* checklist */}
      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
        Recuerda antes de pagar
      </h3>

      <div className="space-y-3 mb-7">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={i}
              className={`flex items-start gap-3 p-3.5 rounded-xl border ${step.bg}`}
            >
              <div className="shrink-0 flex flex-col items-center gap-1 pt-0.5">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold ${step.dot}`}
                >
                  {i + 1}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <Icon className={step.color} size={15} />
                  <p className="text-sm font-semibold text-foreground">
                    {step.title}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-medium">
          Todo listo · Procede con el pago
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Wompi payment button */}
      <a
        href={WOMPI_PAYMENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 w-full bg-[#00C28B] hover:bg-[#00a876] text-white px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-[#00C28B]/40 hover:scale-[1.02] mb-3"
      >
        <Lock size={18} className="shrink-0" />
        Pagar con Wompi
        <ExternalLink size={15} className="opacity-70 shrink-0" />
      </a>

      <p className="text-center text-xs text-muted-foreground mb-5">
        🔒 Pago 100 % seguro · Cifrado SSL · Procesado por Wompi
      </p>

      {/* fallback — no appointment yet */}
      <div className="border-t border-border pt-4">
        <p className="text-xs text-center text-muted-foreground mb-3">
          ¿Aún no has agendado tu cita virtual?
        </p>
        <a
          href={WHATSAPP_VIRTUAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
        >
          <MessageCircle size={17} />
          Agendar cita virtual por WhatsApp
        </a>
      </div>
    </Modal>
  );
}

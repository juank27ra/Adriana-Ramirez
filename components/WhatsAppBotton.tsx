"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "573124758174";
  const message =
    "Hola consultorio de la Dra. Luz Adriana, me gustaría agendar una cita.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle
        size={24}
        className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform"
      />
      <span className="hidden sm:block absolute right-full mr-3 bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-sm">
        ¿Necesitas ayuda?
      </span>
      <span className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full animate-ping"></span>
    </a>
  );
}

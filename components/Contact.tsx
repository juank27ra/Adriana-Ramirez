"use client";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const phoneNumber = "573124758174";
  const whatsappMessage =
    "Hola Consultorio Dra. Luz Adriana Ramírez P. me gustaría agendar una cita.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          <div>
            <div className="bg-white border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1 text-sm sm:text-base">
                      WhatsApp
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-muted-foreground hover:text-green-600 transition-colors"
                    >
                      57 312 475 8174
                    </a>
                    <p className="text-xs text-green-600 mt-1 font-medium">
                      ✓ Solo mensajes de WhatsApp, no llamadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1 text-sm sm:text-base">
                      Email
                    </p>
                    <a
                      href="mailto:adrianaramirez_29@hotmail.com"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      adrianaramirez_29@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1 text-sm sm:text-base">
                      Ubicación
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Pitalito, Huila, Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1 text-sm sm:text-base">
                      Horario de Atención
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-linear-to-br from-green-50 to-white border-2 border-green-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <MessageCircle className="text-white" size={36} />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    ¡Agenda Tu Cita por WhatsApp!
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Escríbenos y con gusto te atenderemos. Respondemos
                    rápidamente para agendar tu cita.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Horario de atención por WhatsApp:
                  </p>
                  <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-foreground">
                    <p>📅 Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p>📅 Sábados: 9:00 AM - 3:00 PM</p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:scale-105 w-full sm:w-auto"
                >
                  <MessageCircle
                    className="group-hover:scale-110 transition-transform"
                    size={28}
                  />
                  <span className="text-base sm:text-lg md:text-xl font-semibold">
                    Escribir por WhatsApp
                  </span>
                </a>

                <p className="text-xs sm:text-sm text-muted-foreground italic">
                  💬 Respuesta rápida y garantizada en horario de atención
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

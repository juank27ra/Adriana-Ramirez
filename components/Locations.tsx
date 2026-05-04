"use client";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  const address = "Pitalito, Huila, Colombia";
  const coordinates = "1.8561870376914285, -76.04613686159725";

  return (
    <section id="ubicacion" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Ubicación
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Atención en consultorio privado, en un espacio seguro y confidencial
            encuéntralo en Pitalito, Huila
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-1 space-y-4 sm:space-y-6">
              <div className="bg-linear-to-br from-blue-50 to-white border border-border rounded-lg sm:rounded-xl p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                      Dirección
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-blue-50 to-white border border-border rounded-lg sm:rounded-xl p-4 sm:p-6">
                <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                  Cómo Llegar
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  El consultorio está ubicado en una zona céntrica de Pitalito,
                  frente a la glorieta de San Antonio.
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${coordinates}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base"
                >
                  <Navigation size={16} />
                  Abrir en Google Maps
                </a>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg sm:rounded-xl p-4 sm:p-6">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">
                  ¿Tienes dudas?
                </h3>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90">
                  Contáctame para más información sobre ubicación y horarios
                </p>
                <a
                  href="tel:+573124758174"
                  className="inline-flex items-center justify-center w-full bg-white text-primary px-4 py-2 sm:py-2.5 rounded-lg hover:bg-white/90 transition-colors text-sm sm:text-base"
                >
                  Escribir Ahora
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-muted rounded-lg sm:rounded-xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] md:h-[500px] relative">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0!2d-76.0508!3d1.8533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTEnMTEuOSJOIDc2wrAwMycwMi45Ilc!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del consultorio - Pitalito, Huila"
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium text-foreground">
                    📍 Consultorio Psicológico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

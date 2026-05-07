"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Paciente",
    text: "La Dra. Luz Adriana me ayudó a superar mi ansiedad con un trato profesional y muy humano. Sus técnicas me permitieron recuperar mi bienestar emocional.",
    rating: 5,
  },
  {
    name: "Carlos Martínez",
    role: "Paciente",
    text: "Excelente profesional. Las sesiones de terapia de pareja con la doctora transformaron nuestra relación. Totalmente recomendada.",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    role: "Paciente",
    text: "Un espacio seguro y confidencial donde pude trabajar mi desarrollo personal. La doctora es empática y muy profesional.",
    rating: 5,
  },
  {
    name: "Jorge Pérez",
    role: "Paciente",
    text: "Mi hijo adolescente mejoró significativamente con las sesiones. La Dra. Ramírez tiene un don especial para conectar con los jóvenes.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonios" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Testimonios
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Lo que dicen quienes han encontrado bienestar con mi acompañamiento
            profesional
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-linear-to-br from-blue-50 to-white border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
            <Quote className="text-primary/20 mb-3 sm:mb-4" size={36} />

            <div className="min-h-[180px] sm:min-h-[200px] flex flex-col justify-center">
              <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-4 sm:mb-6">
                `{testimonials[currentIndex].text}`
              </p>

              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <div>
                <p className="font-semibold text-foreground text-base sm:text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center shadow-lg"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6 sm:w-8"
                      : "bg-primary/30"
                  }`}
                  aria-label={`Ir a testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center shadow-lg"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

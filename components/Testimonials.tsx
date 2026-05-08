"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Atte. Leidy Vergara.",
    role: "Contadora pública",
    text: "Afrontar el sufrimiento causado por la pérdida de un ser querido, puede ser perturbador cuando no se cuenta con las herramientas necesarias para superar el duelo; este suceso  fue un detonante que cambió mi vida; gracias al profesionalismo de la doctora Luz Adriana RAmirez, he logrado restablecer mi equilibrio emocional",
    rating: 5,
  },
  {
    name: "Atte. Eliana Segura ",
    role: "Contadora Pública.",
    text: "El proceso con la doctora Adriana Ramírez me ayudó con mi problema de ansiedad, depresión y demás dificultades de salud mental con los que llegue a buscarla, gracias a su profesionalismo y herramientas inculcadas durante dicho proceso se creó en mí la fuerza necesaria para mirar la vida con entusiasmo, felicidad y amor, creando en mí razones para vivir una vida más plena. Solo tengo gratitud y cariño hacia ella, deseando siempre éxitos y bendiciones en su vida profesional y personal.",
    rating: 5,
  },
  {
    name: "Atte. Belén cardoso",
    role: "Empresaria",
    text: "Primero le doy gracias a Dios y en segundo a la doctora Luz adriana Ramirez Que con su calidad humana y su profesionalismo como psicoterapeuta me ayudó en mi proceso de autoconocimiento en el manejo de la gestión emocional por un trastorno mixto de ansiedad y depresión sus herramientas me ayudaron a recuperar mi calidad de vida emocional mil gracias doc Adriana",
    rating: 5,
  },
  {
    name: "Atte. Sr James Mendez",
    role: "Empresario y Policía",
    text: "La Dra luz adriana me ayudó en un proceso de autoconocimiento y en el manejo de la gestión emocional por un trastorno mixto de ansiedad y depresión. Dónde  Sus herramientas y experiencia me ayudaron a recuperar mi bienestar emocional y el de mi familia",
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
            Lo que dicen quienes han encontrado bienestar con nuestro
            acompañamiento profesional
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-linear-to-br from-blue-50 to-white border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
            <Quote className="text-primary/20 mb-3 sm:mb-4" size={36} />

            <div className="min-h-45 sm:min-h-50 flex flex-col justify-center">
              <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-4 sm:mb-6">
                {testimonials[currentIndex].text}
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

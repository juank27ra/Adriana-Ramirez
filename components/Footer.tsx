"use client";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import Image from "next/image";
import facebook from "../app/assets/facebook.svg";
import instagram from "../app/assets/instagram.svg";
import linkedin from "../app/assets/linkedin.svg";
export default function Footer() {
  const currentYear = new Date().getUTCFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Ψ Consultorio Dra. Luz Adriana Ramírez P.
            </h3>
            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
              Psicoterapeuta y Neuropsicóloga Clínica especializada.
              Comprometida con tu bienestar emocional y organizacional.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("estudios")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                >
                  Estudios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonios")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80 text-xs sm:text-sm">
                <Phone size={14} className="sm:w-4 sm:h-4 text-green-400" />
                <a
                  href="tel:+573124758174"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +57 312 475 8174
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 text-xs sm:text-sm">
                <Mail size={14} className="sm:w-4 sm:h-4 text-yellow-400" />
                <a
                  href="mailto:adrianaramirez_29@hotmail.com"
                  className="hover:text-primary-foreground transition-colors break-all"
                >
                  adrianaramirez_29@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80 text-xs sm:text-sm">
                <MapPin
                  size={14}
                  className="mt-1 shrink-0 sm:w-4 sm:h-4 text-red-400"
                />
                <span>Pitalito, Huila, Colombia</span>
                <span>Calle 10 # 7 - 43</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Redes Sociales
            </h3>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/adriana.ramirez.79230"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Image src={facebook} alt="Facebook" width={24} height={24} />
              </a>
              {/*<a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Image src={instagram} alt="instagram" width={24} height={24} />
              </a>*/}
              <a
                href="https://www.linkedin.com/in/luz-adriana-ramirez-p/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-xs sm:text-sm mt-3 sm:mt-4">
              Sígueme en redes para contenido sobre salud mental y bienestar
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-primary-foreground/80 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} Dra. Luz Adriana Ramírez P. Todos los derechos
              reservados.
            </p>
            <p className="text-primary-foreground/80 text-xs sm:text-sm flex items-center gap-1">
              Hecho con{" "}
              <Heart
                size={14}
                className="sm:w-4 sm:h-4 text-red-400 fill-current"
              />{" "}
              para tu bienestar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

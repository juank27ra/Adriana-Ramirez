"use client";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Estudios", href: "#estudios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
    { label: "Ubicacion", href: "#ubicacion" },
  ];
  const handleNavigate = () => setOpen(false);
  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold">Dra. Luz Adriana Ramírez</h1>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gray-300">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={handleNavigate}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

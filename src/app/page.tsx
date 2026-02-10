import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Hero */}
      <header className="bg-primary/5 border-b">
        <div className="container mx-auto flex flex-col items-center px-4 py-6 sm:py-8">
          <a
            href="https://cronofoodexpert.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://cronofoodexpert.com/wp-content/uploads/2024/10/logo-Crono-Food-Expert-quinta-gama.png"
              alt="Crono Food Expert"
              width={220}
              height={80}
              className="h-16 w-auto sm:h-20"
              priority
            />
          </a>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Soluciones gastronómicas para profesionales
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:py-16">
        <div className="mb-8 text-center max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Descargá nuestro catálogo
          </h2>
          <p className="mt-3 text-muted-foreground text-base">
            Conocé nuestra línea completa de productos. Dejá tus datos y
            accedé al catálogo en formato PDF.
          </p>
        </div>
        <LeadForm />
      </main>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          &copy; 2022 Crono Food Expert. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

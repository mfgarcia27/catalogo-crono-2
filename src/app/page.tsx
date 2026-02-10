import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Header with Logo */}
      <header className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center">
          <img
            src="https://cronofoodexpert.com/wp-content/uploads/2024/10/logo-Crono-Food-Expert-quinta-gama.png"
            alt="Crono Food Expert Logo"
            className="h-12 w-auto sm:h-14"
          />
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:py-20 bg-white">
        <div className="mb-8 text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-secondary">
            Soluciones especializadas en alimentos
          </h1>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Descubrí nuestra completa línea de productos de quinta gama con los más altos estándares de calidad
          </p>
        </div>
        <div className="mb-8 text-center max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-secondary">
            Descargá nuestro catálogo
          </h2>
          <p className="mt-3 text-muted-foreground text-base leading-relaxed">
            Accedé a nuestra oferta completa de productos. Dejá tus datos y recibirás el catálogo en formato PDF.
          </p>
        </div>
        <LeadForm />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground border-t">
        <div className="container mx-auto px-4 py-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Crono Food Expert. Todos los derechos reservados.</p>
          <p className="mt-2 opacity-75">Especialistas en quinta gama</p>
        </div>
      </footer>
    </div>
  );
}

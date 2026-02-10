import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Hero with Logo */}
      <header className="bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {/* Logo */}
            <img
              src="https://cronofoodexpert.com/wp-content/uploads/2024/10/logo-Crono-Food-Expert-quinta-gama.png"
              alt="Crono Food Expert Logo"
              className="w-48 h-auto sm:w-64"
            />
            
            {/* Text Content */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Soluciones especializadas en alimentos
              </h1>
              <p className="mt-4 text-lg sm:text-xl opacity-95 max-w-2xl">
                Descubrí nuestra completa línea de productos de quinta gama con los más altos estándares de calidad
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:py-20">
        <div className="mb-10 text-center max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-secondary">
            Descargá nuestro catálogo
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Accedé a nuestra oferta completa de productos. Dejá tus datos y recibirás el catálogo en formato PDF directamente en tu email.
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

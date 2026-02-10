import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      {/* Hero */}
      <header className="bg-primary/5 border-b">
        <div className="container mx-auto px-4 py-6 text-center sm:py-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Crono <span className="text-primary">Food Expert</span>
          </h1>
          <p className="mt-2 text-muted-foreground text-base sm:text-lg">
            Soluciones especializadas en alimentos
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
          &copy; {new Date().getFullYear()} Crono Food Expert. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

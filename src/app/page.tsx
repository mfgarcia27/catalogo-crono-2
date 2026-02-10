import { LeadForm } from "@/components/LeadForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
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
        <div className="mb-10 text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-secondary">
            Descargá nuestro catálogo
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Accedé a nuestra oferta completa de productos de quinta gama. Dejá tus datos y recibirás el catálogo en formato PDF directamente a tu email.
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

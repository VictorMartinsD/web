import type { ReactNode } from "react";

function Logo() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-2 text-lg font-bold text-green-100 transition ease-linear hover:text-green-200"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 14 5-5-5-5" />
        <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5 5.5 5.5 0 0 0 9.5 20H13" />
      </svg>
      refund
    </a>
  );
}

function ReceiptRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="shrink-0 text-xxs uppercase text-gray-200">{label}</dt>
      <dd className="min-w-0 truncate text-right text-sm font-semibold text-gray-100">
        {children}
      </dd>
    </div>
  );
}

export function NotFound() {
  const path = window.location.pathname;

  return (
    <main className="flex min-h-screen w-full flex-col bg-gray-400 px-6 py-8 lg:px-20">
      <header>
        <Logo />
      </header>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 py-10">
        <section className="group relative w-full max-w-md overflow-hidden rounded-2xl bg-gray-500 p-8">
          <div className="flex flex-col items-center text-center">
            <div
              aria-hidden="true"
              className="flex select-none items-center gap-2 text-7xl font-bold leading-none text-green-100"
            >
              <span>4</span>
              <span className="grid size-14 place-items-center rounded-full bg-green-100 text-gray-500">
                <svg
                  viewBox="0 0 24 24"
                  className="size-7 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
              <span>4</span>
            </div>
            <span className="sr-only">Erro 404</span>

            <h1 className="mt-6 text-xl font-bold text-gray-100">
              Ops! Essa página não existe.
            </h1>
            <p className="mt-2 text-sm text-gray-200">
              Parece que esse comprovante se perdeu pelo caminho. Confira o
              endereço ou volte para o início.
            </p>
          </div>

          {/* -left-10/-right-10 compensam o p-8 do card para centralizar o recorte na borda */}
          <div
            aria-hidden="true"
            className="relative my-8 border-t border-dashed border-gray-300"
          >
            <span className="absolute -left-10 top-0 size-4 -translate-y-1/2 rounded-full bg-gray-400" />
            <span className="absolute -right-10 top-0 size-4 -translate-y-1/2 rounded-full bg-gray-400" />
          </div>

          <dl className="flex flex-col gap-3">
            <ReceiptRow label="Página">
              <span title={path}>{path}</span>
            </ReceiptRow>
            <ReceiptRow label="Status">Não encontrada</ReceiptRow>
            <ReceiptRow label="Valor a reembolsar">
              <span className="mr-1 text-xxs font-normal text-gray-200">
                R$
              </span>
              0,00
            </ReceiptRow>
          </dl>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="/"
              className="flex h-12 items-center justify-center rounded-lg bg-green-100 text-sm font-bold text-gray-500 outline-green-200 transition ease-linear hover:bg-green-200 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Voltar para o início
            </a>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="cursor-pointer rounded-lg py-2 text-sm font-semibold text-green-100 outline-green-200 transition ease-linear hover:text-green-200 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Voltar à página anterior
            </button>
          </div>
        </section>

        <p className="text-center text-xs text-gray-200">
          Acha que isso é um erro? Fale com o administrador.
        </p>
      </div>
    </main>
  );
}

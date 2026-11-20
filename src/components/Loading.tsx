const SKELETON_ROWS = [0, 1, 2];

export function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-screen w-full items-center justify-center bg-gray-400 px-6"
    >
      <section className="w-full max-w-sm rounded-2xl bg-gray-500 p-8">
        <div className="flex flex-col items-center text-center">
          <div
            aria-hidden="true"
            className="relative grid size-20 place-items-center"
          >
            <span className="absolute inset-0 rounded-full border-4 border-gray-300 border-t-green-100 motion-safe:animate-spin" />
            <svg
              viewBox="0 0 24 24"
              className="size-8 text-green-100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 14 5-5-5-5" />
              <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5 5.5 5.5 0 0 0 9.5 20H13" />
            </svg>
          </div>

          <p className="mt-6 text-xl font-bold text-gray-100">Carregando...</p>
          <p className="mt-2 text-sm text-gray-200">
            Só um instante, estamos organizando tudo por aqui.
          </p>
        </div>

        <div
          aria-hidden="true"
          className="mt-8 flex flex-col gap-4 border-t border-gray-400 pt-6"
        >
          {SKELETON_ROWS.map((row) => (
            <div
              key={row}
              className="flex items-center gap-3 motion-safe:animate-pulse"
              style={{ animationDelay: `${row * 150}ms` }}
            >
              <span className="size-9 shrink-0 rounded-full bg-gray-400" />
              <div className="flex flex-1 flex-col gap-2">
                <span className="h-3 w-24 rounded bg-gray-300" />
                <span className="h-2.5 w-16 rounded bg-gray-400" />
              </div>
              <span className="h-3 w-14 rounded bg-gray-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

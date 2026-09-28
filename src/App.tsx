import { cn } from '@/lib/utils'

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-base font-semibold tracking-tight">Michael</p>
          <a
            className={cn(
              'rounded-md text-sm font-medium text-zinc-600 underline-offset-4 hover:underline',
              'dark:text-zinc-400',
            )}
            href="https://github.com/michaelocez"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-4 py-16 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          Portfolio foundation
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Personal portfolio
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Build, style, and deploy pipeline is in place. Portfolio sections
          will be added in the next stage.
        </p>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto w-full max-w-4xl px-4 py-4 text-sm text-zinc-500 sm:px-6 dark:text-zinc-400">
          Michael — Computer Science
        </div>
      </footer>
    </div>
  )
}

export default App

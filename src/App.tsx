import { About } from '@/components/About'
import { GlobalSparks } from '@/components/GlobalSparks'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { SiteBackground } from '@/components/SiteBackground'

function App() {
  return (
    <div
      id="top"
      className="flex min-h-svh flex-col text-zinc-100 antialiased"
    >
      <SiteBackground />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded-md focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main
        id="main"
        className="mx-auto w-full max-w-4xl flex-1 space-y-16 px-4 py-8 sm:space-y-20 sm:px-6"
      >
        <Hero />
        <Projects />
        <About />
      </main>
      <footer className="border-t border-zinc-800">
        <div className="mx-auto w-full max-w-4xl px-4 py-4 text-sm text-zinc-400 sm:px-6">
          Michael
        </div>
      </footer>
      <GlobalSparks />
    </div>
  )
}

export default App

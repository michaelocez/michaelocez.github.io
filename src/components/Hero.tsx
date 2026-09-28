import { Reveal } from './Reveal'

export function Hero() {
  return (
    <div className="py-12 sm:py-16">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Michael
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-400">
          Bachelor of Science, Computer Science, with a minor in Statistics.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-300"
          >
            View projects
          </a>
          <a
            href="https://github.com/michaelocez"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>
      </Reveal>
    </div>
  )
}

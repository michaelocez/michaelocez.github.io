import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="About">
      <ul className="space-y-2 text-base text-zinc-400">
        <li className="font-medium text-zinc-100">
          Bachelor of Science, Computer Science
        </li>
        <li>Minor in Statistics</li>
      </ul>
    </Section>
  )
}

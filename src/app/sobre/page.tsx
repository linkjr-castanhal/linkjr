import { FAQ } from './components/faq'
import Presentation from './components/presentation'
import Team from './components/team'

export default function About() {
  return (
    <article className="space-y-8">
      <Presentation />
      <Team />
      <FAQ />
    </article>
  )
}

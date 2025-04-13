import { CalloutText } from '@/components/callout-text'
import { TeamCard } from '@/components/team-card'
import { TEAM } from '@/config'

export default function Team() {
  return (
    <>
      <h2 className="text-center text-3xl md:text-5xl">
        Quem faz <CalloutText>acontecer</CalloutText>
      </h2>
      <section className="mx-auto grid max-w-6xl grid-cols-1 justify-items-center gap-8 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((item) => (
          <TeamCard
            key={item.firstName}
            firstName={item.firstName}
            lastName={item.lastName}
            role={item.role}
            type={item.type}
            github={item.github}
            linkedin={item.linkedin}
            lattes={item.lattes}
            image={item.image}
          />
        ))}
      </section>
    </>
  )
}

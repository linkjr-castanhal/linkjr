interface ArtigoProps {
  params: {
    slug: string
  }
}

export default function Artigo({ params }: ArtigoProps) {
  return (
    <>
      <h1>Artigo - {params.slug}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        eligendi, odio sapiente quod quam accusamus beatae ab architecto ipsam.
      </p>
    </>
  )
}

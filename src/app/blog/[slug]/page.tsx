export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return (
    <>
      <h1>Article {slug}</h1>
      <p>Slug: {slug}</p>
    </>
  )
}

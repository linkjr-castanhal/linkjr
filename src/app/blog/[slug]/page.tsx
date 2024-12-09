export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}

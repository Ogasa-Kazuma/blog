import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{slug}</h1>
      <p>This is the {slug} post.</p>
    </div>
  )
}
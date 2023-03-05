import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { article_id } = router.query;

  return (
    <div>
      <h1>{article_id}</h1>
      <p>This is the {article_id} article.</p>
    </div>
  )
}
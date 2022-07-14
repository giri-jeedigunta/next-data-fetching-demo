// static site generation
import { YOUR_API_URL } from '../lib/api';

export default function StaticSiteGeneration({ data }) {
  return (
    <>
    <h2>SSG - Todos</h2>
      <ol>{data.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}</ol>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch(YOUR_API_URL);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}

// server side rendering
import { YOUR_API_URL } from '../lib/api';

export default function ServerSideRendered({ data }) {
  return (
    <>
      <h2>SSR - Todos</h2>
      <ol>{data.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}</ol>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(YOUR_API_URL);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}

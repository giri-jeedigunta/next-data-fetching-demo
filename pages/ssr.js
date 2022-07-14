// server side rendering
import List from '../components/list';
import { MOCK_API } from '../config/constants';

export default function ServerSideRendered({ data }) {
  return (
    <>
      <h2>SSR - Todos</h2>
      <List data={data}/>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(MOCK_API);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}

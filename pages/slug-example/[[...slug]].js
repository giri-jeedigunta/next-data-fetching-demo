// server side rendering
import List from '../../components/list';
import { MOCK_API } from '../../config/constants';
import { useRouter } from 'next/router'


// http://localhost:3000/slug-example/hello-world
export default function ServerSideRendered({ data }) {
  const router = useRouter();
  return (
    <>
      <h2>SSR Slug Example</h2>
      <p>Path - {useRouter().query.slug}</p>
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

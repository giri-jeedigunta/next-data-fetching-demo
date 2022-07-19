// static site generation
import List from '../components/list';
import { MOCK_API } from '../config/constants';

export default function StaticSiteGeneration({ data }) {
  return (
    <>
    <h2>SSG - Random countries list</h2>
    <List data={data}/>
    </>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const res = await fetch(MOCK_API);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}

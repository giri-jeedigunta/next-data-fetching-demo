// incremental static generation
import List from '../components/list';
import { MOCK_API } from '../config/constants';

export default function IncrementalStaticRegenerationOnDemand({ data }) {
  return (
    <>
      <h2>ISR on demand - Todos</h2>
      <List data={data}/>
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the api endpoint e.g. api/revalidate get's pinged.
export async function getStaticProps() {
  const res = await fetch(MOCK_API);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },
  };
}

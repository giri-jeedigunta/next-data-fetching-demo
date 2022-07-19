// incremental static generation
import List from '../components/list';
import { MOCK_API } from '../config/constants';

export default function IncrementalStaticRegeneration({ data }) {
  return (
    <>
      <h2>ISR - Random countries list</h2>
      <List data={data}/>
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch(MOCK_API);
  const data = await res.json();

  return {
    props: {
      data, // will be passed to the page component as props
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 10, // In seconds
  };
}

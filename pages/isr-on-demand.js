// incremental static generation
import List from '../components/list';
import { MOCK_API } from '../config/constants';

const forceRevalidate = async () => {
  await fetch('/api/revalidate');
  window.location.reload()
}

export default function IncrementalStaticRegeneration({ data }) {
  return (
    <>
      <h2>ISR on demand - Random countries list</h2>
      <button onClick={() => forceRevalidate()}>Revalidate On-demand when you click...</button>
      <p className='red'><i>Note: Page will be re-loaded automatically.</i></p>
      <List data={data}/>

    </>
  );
}

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
    revalidate: 60, // In seconds
  };
}

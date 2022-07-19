// client side rendered
import List from '../components/list';
import { useEffect, useState } from 'react';
import { MOCK_API } from '../config/constants';

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch(MOCK_API);
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>CSR - Random countries list</h2>
      <List data={state}/>
    </>
  );
}

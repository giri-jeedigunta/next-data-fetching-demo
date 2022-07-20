import Link from 'next/link'
export default function List({data}) {
    return (
        <>
          <ol>{data.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}</ol>
          <Link href="/">More Rendering Examples</Link>
        </>
      );
}
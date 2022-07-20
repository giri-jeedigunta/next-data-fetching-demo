import Link from 'next/link'
import styled from 'styled-components'

const BlueLink = styled.a`
  color: blue;
  padding: 1.5em 0;
`

export default function List({data}) {
    return (
        <>
          <ol>{data.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}</ol>
          <Link href="/"><BlueLink>More Rendering Examples</BlueLink></Link>
        </>
      );
}
import Link from 'next/link'
import styled from 'styled-components'

const BlueLink = styled.a`
  color: blue;
  padding: 1.5em 0;
`

export default function Home() {
  return (
    <>
    <h2>NextJS Page Rendering SSR vs SSG vs ISR</h2>
    <ul>
      <li>
        <Link href="/ssr">
          <BlueLink>SSR</BlueLink>
        </Link>
      </li>
      <li>
        <Link href="/ssg">
          <BlueLink>SSG</BlueLink>
        </Link>
      </li>
      <li>
        <Link href="/isr">
          <BlueLink>ISR</BlueLink>
        </Link>
      </li>      
      <li>
        <Link href="/isr-on-demand">
          <BlueLink>ISR On-demand</BlueLink>
        </Link>
      </li>            
      <li>
        <Link href="/slug-example/hello-world">
          <BlueLink>SLUG + SSR</BlueLink>
        </Link>
      </li>  
      <li>
        <Link href="/csr">
          <BlueLink>CSR</BlueLink>
        </Link>
      </li>                 
    </ul>    
    </>
  );
}

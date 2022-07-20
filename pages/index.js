import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h2>NextJS Page Rendering SSR vs SSG vs ISR</h2>
    <ul>
      <li>
        <Link href="/ssr">
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssg">
          <a>SSG</a>
        </Link>
      </li>
      <li>
        <Link href="/isr">
          <a>ISR</a>
        </Link>
      </li>      
      <li>
        <Link href="/isr-on-demand">
          <a>ISR On-demand</a>
        </Link>
      </li>            
      <li>
        <Link href="/slug-example/hello-world">
          <a>SLUG + SSR</a>
        </Link>
      </li>  
      <li>
        <Link href="/csr">
          <a>CSR</a>
        </Link>
      </li>                 
    </ul>    
    </>
  );
}

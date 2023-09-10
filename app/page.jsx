import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>welcome to nextjs</h1>
      <ul>
        <li>
          <Link href="/"> Home</Link>
          <Link href="/about"> About us</Link>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
}

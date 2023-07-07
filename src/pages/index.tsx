import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>rendering test</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ul>
          <li>
            <Link href='/ssg-page'>SSG</Link>
          </li>
          <li>
            <Link href='/ssr-page'>SSR</Link>
          </li>
          <li>
            <Link href='/csr-page'>CSR</Link>
          </li>
        </ul>
      </main>
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home(props) {
  return (
    <>
      <h1>Next js is awesome</h1>
      <h2>{props.message}</h2>
      <Link href="/product">Go to products</Link>
    </>
  );
}

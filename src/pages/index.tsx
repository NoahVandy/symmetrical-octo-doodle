import type { NextPage } from "next"
import Head from "next/head"
import LandingPage from "../components/organisms/LandingPage/LandingPage"
import Layout from "./components/layout"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  )
}

export default Home

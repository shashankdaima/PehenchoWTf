"use client"
import ErrorPage from 'next/error';
import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import LookingforSWE_Header from "../components/LookingforSWE.header";
import Footer from "../components/Footer";
import { ArrowUp, Ban, PenLine, Terminal } from "lucide-react";
import ReviewCard from "../components/ReviewCard";
import { Button } from "../components/neobrutalism/button";
import ConfettiExplosion from "react-confetti-explosion";
import Link from 'next/link';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { req, query } = context;

  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['host'];
  const baseUrl = `${protocol}://${host}`;
  // console.log(query.confetti);
  try {
    // Fetch data from an external API
    const res = await fetch(`${baseUrl}/api/getPenchoById?id=${id}`);
    let data = await res.json();
    data["confetti"] = query.confetti === "true";
    return {
      props: data,
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        itemRank: NaN,
        item: [],
        topItems: []
      },
    };

  }
}
const PenchoCard: NextPage = (props: any) => {

  if (props.item == undefined) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>Pehencho.WTF</title>
        <meta name="description" content="Jot Down your most FUCKED-UP SHIT/STORY(##), and let’s find out who got the WORST." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content={props.item[0].title}></meta>
        <meta name="twitter:description" content={props.item[0].description}></meta>
        <meta name="twitter:image" content={`https://pehencho.wtf/api/og?id=${props.item[0].id}`}></meta>

      </Head>

      <LookingforSWE_Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }} >
        <div className="container mx-auto  max-w-6xl flex flex-col justify-center items-center">
          <Link href="/" className=" bangers-regular mt-28 mb-6 md:mb-12  text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Pehencho WTf!
          </Link>

        </div>
      </motion.div>

      <motion.div
        className="hidden md:block"
        initial={{ scale: 1 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1.12,
          rotate: 0,
        }}
        transition={{ duration: 0.3 }}
      >

        <ReviewCard
          id={props.item[0].id}
          title={props.item[0].title}
          description={props.item[0].description}
          upvotes={props.item[0].upvotes}
          rank={props.itemRank}
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        transition={{ duration: 0.3 }}

        className="block md:hidden px-2">

        <ReviewCard

          id={props.item[0].id}
          title={props.item[0].title}
          description={props.item[0].description}
          upvotes={props.item[0].upvotes}
          rank={props.itemRank}
        />
      </motion.div>
      <motion.div className="container px-2 mt-16 mx-auto max-w-6xl flex flex-col gap-y-4 justify-center items-center"
        initial={{ translateY: 500, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >

        <h2 className="max-w-lg  zilla-slab text-xl md:text-2xl lg:text-3xl mx-8 justify-center items-center text-center">
          Check out the <strong>TOP 3 POSTS</strong> on the <strong>leaderboard of the worst fuckery</strong>...
        </h2>

        {props.topItems.map((post, index) => (
          <ReviewCard
            id={post.id}
            title={post.title}
            key={post.id}

            description={post.description}
            rank={index + 1}
            upvotes={post.upvotes}
          />
        ))}
        <Button onClick={() => {
          window.location.href = "/";
        }} className="!h-14 !text-white  bg-[#2F2F2F] mt-2">
          <ArrowUp />
          <span >Visit Leaderboard for more fuckery</span>
        </Button>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} >
        <Footer />
      </motion.div>
      {props.confetti && <ConfettiExplosion className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50" />}
    </>

  );
};

export default PenchoCard;

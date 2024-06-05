"use client"
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Card } from "../components/neobrutalism/card";
import Link from "next/link";
import { Button } from "../components/neobrutalism/button";
import { Input } from "../components/neobrutalism/input";
import ReviewCard from "../components/ReviewCard";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { app as firebaseApp } from "../utils/firebase.config";
import { getFirestore } from "firebase/firestore";

const reviewCards = [
  {
    title: "Great Product",
    description: "I absolutely love this product! It exceeded my expectations.",
    id: 1,
    rank: 5,
  },
  {
    title: "Good Quality",
    description:
      "The quality of this product is excellent. I highly recommend it.",
    id: 2,
    rank: 4,
  },
  {
    title: "Average Experience",
    description:
      "My experience with this product was average. It did the job, but nothing exceptional.",
    id: 3,
    rank: 3,
  },
  {
    title: "Not Satisfied",
    description:
      "Unfortunately, I wasn't satisfied with this product. It didn't meet my expectations.",
    id: 4,
    rank: 2,
  },
  {
    title: "Poor Quality",
    description:
      "I'm very disappointed with the quality of this product. It's not worth the price.",
    id: 5,
    rank: 1,
  },
];
const Home: NextPage = () => {
  const db = getFirestore(firebaseApp);
  useEffect(()=>{
    
  },[]);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
      </Head>
  

      <Card className="absolute y-0 z-10  w-full mx-auto border-0  flex flex-col justify-center items-center">
        <p className="zilla-slab text-xl my-4">
          Are you looking for a fulltime/freelance software engineer?{" "}
          <a href="#" className="font-bold hover:underline">
            {" "}
            Get in touch
            {" ->"}
          </a>
        </p>
      </Card>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }} >
        <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center">
          <h1 className=" bangers-regular mt-32 mb-4  text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Pehencho WTf!
          </h1>
          <h2 className="max-w-lg zilla-slab text-3xl justify-center items-center text-center">
            Jot Down your most <strong>FUCKED-UP DELHI SHIT(##)</strong>, and
            let’s find out who got the <strong>WORST</strong>.
          </h2>
          <div className="max-w-xl flex flex-row  my-8 p-1 space-x-2 justify-center items-center">
            <Input
              placeholder="arre bc! yeh na..."
              className="flex-shrink-0 text-lg px-4 h-14"
            ></Input>
            <Button className="text-3xl  h-14 px-5"> + </Button>
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{translateY:500, opacity:0}}
        animate={{translateY:0, opacity:1}}
        transition={{duration:0.3}}
      >

        <div className="max-w-xl mx-auto flex flex-col space-y-4">
          {reviewCards.map((card) => (
            <ReviewCard
              id={card.id}
              title={card.title}
              description={card.description}
              rank={card.rank}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }} >
      <div className="mx-auto mt-12 py-8 flex flex-col space-y-2 justify-center items-center border-t-4 mr-2 border-black">
        <h4 className="bangers-regular text-3xl">
          Thanks for visiting this page!
        </h4>
        <p className="zilla-slab text-center max-w-lg text-lg">
          <strong>(##)</strong> It was a fun little project, not intended to
          harm anyone. If I find anyone engaging in any sort of
          discrimination/harassment, those posts will be deleted.
        </p>
      </div>
      </motion.div>
    </div>
  );
};

export default Home;
"use client"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../components/neobrutalism/dailog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../components/neobrutalism/sheet';
import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import LookingforSWE_Header from "../components/LookingforSWE.header";
import Footer from "../components/Footer";

import { Button } from "../components/neobrutalism/button";
import { Ban, PenLine, Terminal } from "lucide-react";
import Pencho from "../models/pencho";
import { HomePageClient } from '../components/postList';
import { errorStore } from '../sm-hooks/errorStore';
import { AddPenchoform } from '../components/addPencho.form';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner'
import { Alert, AlertDescription, AlertTitle } from '../components/neobrutalism/alert';
import ErrorPage from 'next/error';
export async function getServerSideProps(context: any) {

  const { req, query } = context;
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['host'];
  const baseUrl = `${protocol}://${host}`;

  try {
    // Fetch data from an external API
    const res = await fetch(`${baseUrl}/api/pehenchos?page=${query.page}&pageSize=${query.pageSize}`);
    const data = await res.json();

    return {
      props: {
        data: data.items,
        page: parseInt(query.page) || 1,
        pageSize: parseInt(query.pageSize) || 10,
        totalPageCount: data.totalPages
      },
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        data: [],
        page: 1,
        pageSize: 10,
        totalPageCount: 0
      },
    };
  }
}

interface HomeProps {
  data: Pencho[];
  page: number;
  pageSize: number,
  totalPageCount: number
}

const Home: NextPage = (props: HomeProps) => {

  const error = errorStore((state: any) => state.error);
  const setError = errorStore((state: any) => state.setError);
  useEffect(() => {
    if (error) {
      toast.custom(() => {
        return (
          <Alert variant='destructive' className='!m-0' >
            <Ban className="h-4 w-4" />
            <AlertTitle>Some Error Occured</AlertTitle>
            <AlertDescription>
              {error}
            </AlertDescription>
          </Alert>
        );
      });
      setError(undefined); // Reset the error after showing the toast
    }
  }, [error, setError]);

  const addPenchoform = <AddPenchoform onClose={(uid,reload) => {
    setDialogMode("none");
    if (reload) {
      //TODO: Reload this page;
      window.location.href = `/${uid}?confetti=true`;
    }
  }} />;
  const [dialogMode, setDialogMode] = useState<"dialog" | "sheet" | "none">("none");
  if(props.totalPageCount==0){
    return <ErrorPage statusCode={500} />;
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
        <meta name="twitter:title" content="Pehencho WTF"></meta>
        <meta name="twitter:description" content="Jot Down your most FUCKED-UP SHIT/STORY(##), and let’s find out who got the WORST."></meta>
        <meta name="twitter:image" content="https://pehencho.wtf/og.png"></meta>
        <meta property="og:title" content="Pehencho WTF" />
        <meta property="og:description" content="Jot Down your most FUCKED-UP SHIT/STORY(##), and let’s find out who got the WORST." />
        <meta property="og:image" content="https://pehencho.wtf/og.png" />
        <meta property="og:url" content="https://pehencho.wtf" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Pehencho WTF" />
      </Head>

      <LookingforSWE_Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }} >
        <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center">
          <h1 className=" bangers-regular mt-32 mb-4  text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Pehencho WTf!
          </h1>
          <h2 className="max-w-lg  zilla-slab text-xl md:text-2xl lg:text-3xl mx-8 justify-center items-center text-center">
            Jot Down your most <strong>FUCKED-UP DELHI SHIT/STORY(##)</strong>, and
            let’s find out who got the <strong>WORST</strong>.
          </h2>

        </div>
      </motion.div>
      <motion.div
        initial={{ translateY: 500, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <HomePageClient posts={props.data} page={props.page} pageSize={props.pageSize} totalPageCount={props.totalPageCount} />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} >
        <Footer />
      </motion.div>
      <Dialog open={dialogMode == "dialog"} onOpenChange={(val) => (val) ? setDialogMode("dialog") : setDialogMode("none")}>
        <DialogContent className="max-w-md max-h-xl bg-[var(--main-background-color)]">
          {addPenchoform}
        </DialogContent>
        <DialogTrigger asChild>
          <Button className="hidden md:block !flex  !flex-row  !h-14 !text-white fixed bg-[#2F2F2F] bottom-4 right-4 z-20">
            <PenLine color="white" className="mr-0 md:mr-4" size={32} />
            <span className="hidden md:block">Add Your Experiences</span>

          </Button>
        </DialogTrigger>
      </Dialog>

      <Sheet open={dialogMode == "sheet"} onOpenChange={(val) => (val) ? setDialogMode("sheet") : setDialogMode("none")}>
        <SheetContent side='bottom' className=' bg-[var(--main-background-color)]'>
          {addPenchoform}
        </SheetContent>
        <SheetTrigger className='block md:hidden' asChild>
          <Button className="!h-14 !text-white fixed bg-[#2F2F2F] bottom-4 right-4 z-20">
            <PenLine color="white" className="mr-0 md:mr-4" size={32} />
          </Button>
        </SheetTrigger>

      </Sheet>
      <Toaster />
    </>

  );
};

export default Home;

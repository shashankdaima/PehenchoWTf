"use client"
import { useState } from "react";
import { errorStore } from "../sm-hooks/errorStore";
import { Button } from "./neobrutalism/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./neobrutalism/card";
interface ReviewCardProps {
  title: string;
  description: string;
  id: string;
  rank: number | 0;
  upvotes: number;
}
const ReviewCard = (props: ReviewCardProps) => {
  const setError = errorStore((state: any) => state.setError);
  const [upvotes, setUpvotes] = useState(props.upvotes);
  async function onUpvote() {
    const url = `/api/upvotePehencho`;
    const data = { penchoId: props.id };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      setUpvotes(upvotes + 1);
      //TODO: COMPLETE THIS UPVOTE PROCEESS 

    } catch (err) {
      setError(err.message);
    }
  }


  return (
    <Card id={props.id} key={props.id} className="max-w-xl  mx-auto">
      <CardHeader>
        <CardTitle className="bangers-regular text-3xl">
          #{props.rank}. {props.title}
        </CardTitle>
        <CardDescription className="zilla-slab font-medium text-lg md:text-xl w-full flex-grow">
          {props.description}
        </CardDescription>
        <CardDescription className="zilla-slab mt-3 !font-semibold text-lg ">{upvotes} Upvotes</CardDescription>
      </CardHeader>
      <CardFooter className="flex space-x-4">
        <Button size="lg" className="bg-[var(--accent-color)] " onClick={onUpvote}>Upvote</Button>
        <Button size="lg">Share</Button>
      </CardFooter>
    </Card>
  );
};
export default ReviewCard;

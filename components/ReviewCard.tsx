"use client"
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
  rank: number|0;
  upvotes:number;
}
const ReviewCard = (props: ReviewCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="bangers-regular text-3xl">
          #{props.rank}. {props.title}
        </CardTitle>
        <CardDescription className="zilla-slab font-medium text-xl">
          {props.description}
        </CardDescription>

        <CardDescription className="zilla-slab mt-3 !font-semibold text-lg ">{props.upvotes} Upvotes</CardDescription>
      </CardHeader>
      <CardFooter className="flex space-x-4">
        <Button size="lg">Upvote</Button>
        <Button size="lg">Share</Button>
      </CardFooter>
    </Card>
  );
};
export default ReviewCard;

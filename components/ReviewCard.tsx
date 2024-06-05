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
  id: number;
  rank: number;
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
      </CardHeader>
      <CardFooter className="flex space-x-4">
        <Button size="lg">Upvote</Button>
        <Button size="lg">Share</Button>
      </CardFooter>
    </Card>
  );
};
export default ReviewCard;

import ReviewCard from "../components/ReviewCard";
import Pencho from "../models/pencho";

interface HomePageClientProps {
    posts: Pencho[]
}
const HomePageClient = (props: HomePageClientProps) => {
    return (
        <div className="max-w-xl mx-auto flex flex-col mt-8  px-4 space-y-4">
            {
                props.posts.map((post, index) => (
                    <ReviewCard
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        rank={index + 1}
                        upvotes={post.upvotes}
                    />
                ))
            }
        </div>);
}
export { HomePageClient };
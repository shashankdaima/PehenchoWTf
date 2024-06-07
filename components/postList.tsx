import ReviewCard from "./ReviewCard";
import Pencho from "../models/pencho";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from './neobrutalism/pagination'
import { useEffect, useState } from "react";
interface HomePageClientProps {
    posts: Pencho[],
    page: number,
    pageSize: number,
    totalPageCount: number
}
const HomePageClient = (props: HomePageClientProps) => {
    const fetchData = async () => {
        try {
            const res = await fetch(`/api/pehenchos?page=${1}&pageSize=${props.pageSize}`);
            const data = await res.json();
            setPosts(data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
            // TODO: maybe people should know that they are oline.. youtube types
        }
    };

    useEffect(() => {
        // Fetch data initially
        if (props.page == 1) {
            // fetchData();

            // Set up the interval to poll data every 5 seconds (5000 milliseconds)
            const intervalId = setInterval(fetchData, 5000);
            return () => clearInterval(intervalId);
        }
        // Clear the interval when the component unmounts
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    const [posts, setPosts] = useState(props.posts);
    return (
        <>
            <div className="max-w-xl mx-auto flex flex-col mt-8  px-4 space-y-4">
                {
                    posts.map((post, index) => (
                        <ReviewCard
                        key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            rank={(props.page - 1) * props.pageSize + index + 1}
                            upvotes={post.upvotes}
                        />
                    ))
                }
            </div>
            <Pagination className="mt-12">
                <PaginationContent>
                    <PaginationItem >
                        <PaginationPrevious href={`?page=${props.page - 1}&pageSize=${props.pageSize}`} />
                    </PaginationItem>
                    {(props.page >= 3) && <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>}
                    {(props.page >= 2) &&
                        <PaginationItem>
                            <PaginationLink href={`?page=${props.page - 1}&pageSize=${props.pageSize}`} >{props.page - 1}</PaginationLink>
                        </PaginationItem>
                    }<PaginationItem>
                        <PaginationLink isActive>
                            {props.page}
                        </PaginationLink>
                    </PaginationItem>
                    {(props.totalPageCount - props.page != 0) && <PaginationItem>
                        <PaginationLink href={`?page=${props.page + 1}&pageSize=${props.pageSize}`}>{props.page + 1}</PaginationLink>
                    </PaginationItem>}
                    {(props.totalPageCount - props.page > 1) && <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>}
                    <PaginationItem>
                        <PaginationNext  href={`?page=${props.page + 1}&pageSize=${props.pageSize}`} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>;
        </>

    );
}
export { HomePageClient };
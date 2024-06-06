import ReviewCard from "../components/ReviewCard";
import Pencho from "../models/pencho";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from '../components/neobrutalism/pagination'
import { useEffect } from "react";
interface HomePageClientProps {
    posts: Pencho[]
}
const HomePageClient = (props: HomePageClientProps) => {
    useEffect(()=>{

    },[]);
    return (
        <>
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
            </div>
            <Pagination className="mt-12">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <div className="items-center md:flex hidden">
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    </div>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>;
        </>

    );
}
export { HomePageClient };
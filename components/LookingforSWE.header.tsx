import { Card } from "./neobrutalism/card";
import Link from "next/link";
const LookingforSWE_Header = () => {
    return (
        <div className="absolute y-0 z-10 bg-[var(--accent-color)]  w-full mx-auto border-0 flex flex-col justify-center items-center border-b-4 border-black">
            <p className="zilla-slab md:text-xl text-lg my-4 text-center mx-4">
                Are you looking for a fulltime/freelance software engineer?{" "}
                <Link href="https://bento.me/shashankdaima" className="font-bold hover:underline">
                    {" "}
                    Get in touch
                    {" ->"}
                </Link>
            </p>
        </div>
    );
};
export default LookingforSWE_Header;
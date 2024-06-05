import { Card } from "./neobrutalism/card";

const LookingforSWE_Header = () => {
    return (
        <div className="absolute y-0 z-10 bg-[var(--accent-color)]  w-full mx-auto border-0 flex flex-col justify-center items-center border-b-4 border-black">
            <p className="zilla-slab md:text-xl text-lg my-4 text-center mx-4">
                Are you looking for a fulltime/freelance software engineer?{" "}
                <a href="https://shashankdaima.com" className="font-bold hover:underline">
                    {" "}
                    Get in touch
                    {" ->"}
                </a>
            </p>
        </div>
    );
};
export default LookingforSWE_Header;
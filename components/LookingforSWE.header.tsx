import { Card } from "./neobrutalism/card";

const LookingforSWE_Header = () => {
    return (
        <Card className="absolute y-0 z-10  w-full mx-auto border-0 flex flex-col justify-center items-center">
            <p className="zilla-slab text-xl my-4">
                Are you looking for a fulltime/freelance software engineer?{" "}
                <a href="https://shashankdaima.com" className="font-bold hover:underline">
                    {" "}
                    Get in touch
                    {" ->"}
                </a>
            </p>
        </Card>
    );
};
export default LookingforSWE_Header;
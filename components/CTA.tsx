import { Button } from "./neobrutalism/button";
import { Input } from "./neobrutalism/input";

const CTA=()=>{
    return (
        <div className="container mx-auto max-w-6xl flex flex-col justify-center items-center">
          <h1 className=" bangers-regular mt-32 mb-4  text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Pehencho WTf!
          </h1>
          <h2 className="max-w-lg zilla-slab text-3xl justify-center items-center text-center">
            Jot Down your most <strong>FUCKED-UP DELHI SHIT(##)</strong>, and
            let’s find out who got the <strong>WORST</strong>.
          </h2>
          <div className="max-w-xl flex flex-row  my-8 p-1 space-x-2 justify-center items-center">
            <Input
              placeholder="arre bc! yeh na..."
              className="flex-shrink-0 text-lg px-4 h-14"
            ></Input>
            <Button className="text-3xl  h-14 px-5"> + </Button>
          </div>
        </div>
    );
}
export default CTA;
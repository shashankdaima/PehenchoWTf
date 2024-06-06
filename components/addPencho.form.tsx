"use client"
import { useState } from "react";
import { Button } from "./neobrutalism/button";
import { Input } from "./neobrutalism/input";
import { Textarea } from "./neobrutalism/text-area";
import { Close } from "@radix-ui/react-dialog";

interface AddPenchoformProps {
    onClose: (reload: boolean) => void
}


const AddPenchoform = (props: AddPenchoformProps) => {
    const [content, setContent] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const onSubmit = async () => {
        const url = `/api/pehenchos`;
        const data = {
            "title": title,
            "content": content
        };

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

            const result = await response.json();
            props.onClose(true);

        } catch (err) {
            // setError(err.message);
            console.log(err);
        }
    }
    return (
        <div className="flex flex-col gap-y-1" >
            <h2 className="bangers-regular text-3xl">Add Your own Stories</h2>
            <p className="zilla-slab  text-sm">Ensure that your message is respectful and does not contain any personal information or harassment. Protect the anonymity of yourself and your loved ones, as it violates platform policies.</p>
            <h3 className="zilla-slab  text-lg mt-2 !font-bold">Write your story here</h3>
            <Textarea maxLength={400} value={content} onChange={(e) => { setContent(e.target.value) }} />
            <h3 className="zilla-slab  text-lg mt-2 !font-bold">Make a catchy title...</h3>
            <Input value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <Button type="submit" disabled={!(content.length > 0 && title.length > 0)} className="mt-8 md:mt-2 bg-[#2F2F2F] !text-white" onClick={onSubmit}>Submit</Button>
        </div >

    );
}
export { AddPenchoform };

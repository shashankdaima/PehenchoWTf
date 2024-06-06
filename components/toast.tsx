"use client"

import { CircleAlert, Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./neobrutalism/alert"
import { motion } from "framer-motion"

const Toast = () => {
    return (

        <Alert variant="destructive" className="fixed max-w-sm right-4 bottom-4 z-20">
            <CircleAlert className="h-4 w-4" />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>

    )
}
export default Toast;
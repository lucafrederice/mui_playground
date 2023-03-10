import MotionWrapper from "@/components/motionWrapper";
import { useState } from "react";
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

export default function Counter() {
    const [count, setCount] = useState(0)

    return <MotionWrapper title={"Counter"} description={"This is a react component that uses useState hook 👌"}>
        <Box sx={{
            display: "grid",
            alignContent: "center",
            justifyItems: "center",
            gap: "1rem"
        }}>
            <Typography variant={"h1"} color={"primary"}>{count}</Typography>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem"
            }}>
                <Button variant="contained" onClick={() => setCount(count => count - 1)}>-</Button>
                <Button variant="contained" onClick={() => setCount(count => count + 1)}>+</Button>
            </Box>
        </Box>
    </MotionWrapper>
}
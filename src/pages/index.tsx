import MotionWrapper from "@/components/motionWrapper";
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"

export default function Index() {

    return <MotionWrapper paper={false}>
        <Box sx={{
            display: "grid",
            alignContent: "center",
            justifyItems: "center",
            minHeight: "50vh"
        }}>
            <Typography variant={"h1"} color={"primary"} sx={{
                fontWeight: "bold"
            }}>
                Home
            </Typography>
            <Typography variant={"subtitle1"} color={"text.secondary"}>
                Welcome to the <strong>MUI World!!!</strong>
            </Typography>
        </Box>
    </MotionWrapper>
}
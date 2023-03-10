import MotionWrapper from "@/components/motionWrapper"
import useFetcher from "@/hooks/useFetcher"
import { ChangeEvent, useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';
import {red} from "@mui/material/colors"


type ResponseType = {
    age: number,
    name: string,
    count: number,
}

export default function Fetch() {
    const [name, setName] = useState("")
    const { response, error, loading, refetch } = useFetcher<ResponseType>(`https://api.agify.io/?name=${name}`)

    return <MotionWrapper title={"Fetch"} description={"This input can invalidate previous fetch when you type 👍."}>
        <Box sx={{
            display: "grid",
            alignContent: "center",
            justifyItems: "center",
            gap: "1rem"
        }}>
            <Typography variant={"subtitle1"} color="primary" sx={{fontWeight: "bold"}}>Your Age:</Typography>
            {/* @ts-ignore */}
            <Typography variant="h1" color={"primary"}>{loading ? <CircularProgress size={80} /> : response?.[0]?.age || 0}</Typography>

            <TextField size="small" id="outlined-basic" label="Type your name" variant="outlined" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />
            <Button size="medium" type="button" variant="outlined" onClick={() => refetch()}>
                {loading ? <CircularProgress size={22} /> : <RefreshIcon />}
            </Button>
            {
                error &&
                <Typography variant="subtitle1" color={red[600]}>{error}</Typography>

            }
        </Box>
    </MotionWrapper>
}
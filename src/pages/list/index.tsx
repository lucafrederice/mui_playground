import MotionWrapper from "@/components/motionWrapper";
import useFetcher from "@/hooks/useFetcher";
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";


type ResponseType = {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}[]

export default function List() {
    const { response, error, loading, refetch } = useFetcher<ResponseType>("https://picsum.photos/v2/list")

    const title = "List"
    const description = "This page fetches a fake api for images 😮😱"

    if (loading) return <MotionWrapper title={title} description={description} paper={false}><CircularProgress /></MotionWrapper>

    console.log(response)

    return <MotionWrapper title={title} description={description} paper={false}>
       <Grid container gap={{ xs: 2, md: 4 }} columns={{ xs: 1, md: 3 }}>
            {
                response?.[0]?.map((item, i) =>
                    <ImageListItem key={i}>
                        <Image src={item.download_url} alt={`Image from ${item.author}`} height={270} width={270} style={{ borderRadius: "1rem", objectFit: "cover" }} />
                        <ImageListItemBar
                            title={`by ${item.author}`}
                            subtitle={<Typography variant={"caption"} color={"text.secondary"}>Image from picsum.photos</Typography>}
                            position="below"
                        />
                    </ImageListItem>)
            }
        </Grid>
    </MotionWrapper>
}
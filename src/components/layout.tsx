import { AppBar } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/system"
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CustomLink from "./link"
import { useState } from "react";
import Button from "@mui/material/Button"

const paths = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Counter",
        href: "/counter"
    },
    {
        name: "Fetch",
        href: "/fetch"
    },
    {
        name: "List",
        href: "/list"
    }
]

export default function Layout({ children }: { children: React.ReactNode }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const [gradient, setGradient] = useState(false)

    return <Box sx={{
        backgroundColor: gradient ? "#0093E9" : "#efefef",
        backgroundImage: gradient ? "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)" : "",
        minHeight: "100vh",
        paddingBottom: "2rem",
        transition: "background ease 1s"
    }}>
        <AppBar position="sticky" sx={{
            marginBottom: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBlock: "1rem",
            backgroundColor: "white",
            boxShadow: trigger ? "" : "none",
            borderBottom: "1px solid #1976d2"
        }}>
            <Container maxWidth={"lg"} sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Typography color={"primary"} variant="h6" sx={{ fontWeight: "bold" }}>RX RDFND</Typography>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    {paths.map((path, i) => <CustomLink key={i} href={path.href} name={path.name} />)}
                </Box>
                <Button type="button" onClick={() => setGradient(b => !b)}>Special</Button>
            </Container>
        </AppBar>

        {children}
    </Box>
}
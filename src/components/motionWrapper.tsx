import { Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import { Container } from "@mui/system"
import { motion } from "framer-motion"
import Box from "@mui/material/Box"

export default function MotionWrapper({ children, title, description, paper = true, background }: { children: React.ReactNode, title?: React.ReactNode, description?: string, paper?: boolean, background?: string }) {
    return (
        <Container maxWidth="lg">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {
                    title && <Box paddingY={"1rem"} >
                        <Typography variant="h5" color={"text.primary"}>{title}</Typography>
                        {
                            description &&
                            <Typography variant="subtitle1" color={"text.secondary"}>{description}</Typography>
                        }
                    </Box>
                }
                {
                    paper ?
                        <Paper elevation={2} sx={(theme) => ({
                            minHeight: "70vh",
                            padding: "2rem",
                            width: "100%",
                            display: "grid",
                            alignContent: "center",
                            justifyItems: "center",
                            borderRadius: "1rem",
                            // border: "2px solid #1976d2",
                            backgroundColor: background ? background : ""
                        })}>
                            {children}
                        </Paper>
                        :
                        <Box sx={(theme) => ({
                            minHeight: "70vh",
                            padding: "2rem",
                            width: "100%",
                            display: "grid",
                            alignContent: "center",
                            justifyItems: "center",
                            borderRadius: "1rem",
                            // border: "2px solid #1976d2",
                            backgroundColor: background ? background : ""
                        })}>
                            {children}
                        </Box>
                }
            </motion.div>
        </Container>
    )
}
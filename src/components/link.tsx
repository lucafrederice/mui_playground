import Link from "next/link";
import Button from "@mui/material/Button"

export default function CustomLink({href, name}: {href: string, name: string}) {
    return <Link href={href} style={{textDecoration: "none"}}><Button variant="text">{name}</Button></Link>
}
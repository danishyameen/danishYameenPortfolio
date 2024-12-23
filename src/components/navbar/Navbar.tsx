import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import Link from "next/link"


export default function NavBar() {
    return (
        <main className="NavBar">
            <header className="header">
                <div className="logo">
                    <h2>Portfolio</h2>
                </div>
                <nav>
                    <div className="navChild1">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/mywork">MyWorks</Link></li>
                            <li><Link href="/skill">Skill</Link></li>
                            <li><Link href="/team">Team</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="navChild2">
                    <Sheet>
                        <SheetTrigger><Menu color="white"/></SheetTrigger>
                        <SheetContent className="navbarMenu" side="left">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/mywork">MyWorks</Link></li>
                            <li><Link href="/skill">Skill</Link></li>
                            <li><Link href="/team">Team</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                        </SheetContent>
                    </Sheet>
                    </div>


                </nav>

            </header>
        </main>
    )
}




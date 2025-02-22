import { AboutMe } from "@/components/about-me";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div>
            <AboutMe />
            <Link href="/app">
            </Link>
        </div>
    );
}

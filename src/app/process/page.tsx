import Process from "@/components/process";
import Link from "next/link";

export default function TermsPage() {
    return (
        <div>
            <Process />
            <Link href="/app">
                Go back to Home
            </Link>
        </div>
    );
}

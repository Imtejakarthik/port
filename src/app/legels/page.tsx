import Legels from "@/components/legels";
import Link from "next/link";

export default function TermsPage() {
    return (
        <div>
            <Legels />
            <Link href="/app">
                Go back to Home
            </Link>
        </div>
    );
}

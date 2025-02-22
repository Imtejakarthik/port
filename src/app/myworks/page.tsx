import MyWork from "@/components/my-works";
import Link from "next/link";

export default function TermsPage() {
    return (
        <div>
            <MyWork />
            <Link href="/app">
                Go back to Home
            </Link>
        </div>
    );
}

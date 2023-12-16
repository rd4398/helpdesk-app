import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h2 className="text-3x1"> We hit a brick wall</h2>
            <p>The requested ticket was not found</p>
            <p>Go back to all <Link href="/tickets">tickets</Link></p>
        </main>
    )
}
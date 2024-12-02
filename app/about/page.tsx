import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page content.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

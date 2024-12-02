"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>Interactive Playwright Test</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {greeting && <p data-testid="greeting">{greeting}</p>}
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}

import Link from "next/link";

export default function F4() {
  return (
    <>
      <h1>F4 Page</h1>
      <div>
        <Link href="/f1/f3" className="underline text-blue-600">
          Go to F3
        </Link>
        <br />
        <Link href="/about" className="underline text-blue-600">
          Go to About
        </Link>
      </div>
    </>
  );
}

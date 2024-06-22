import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        <Link href="/f1/f2" className="underline text-blue-600">
          Go to F2
        </Link>
      </div>
    </>
  );
}

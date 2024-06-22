import Image from "next/image";
import wondersImages from "./wonders";
import Link from "next/link";

export default function Page() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">Photo Feed</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          // Replace this with the wondersImages import
          wondersImages.map((wonder) => (
            <Link href={`/photo-feed/${wonder.id}`} key={wonder.id}>
              <Image
                src={wonder.src}
                alt={wonder.title}
                className="rounded cursor-pointer w-full h-full object-cover aspect-square"
                width={400}
                height={300}
              />
            </Link>
          ))
        }
      </div>
    </main>
  );
}

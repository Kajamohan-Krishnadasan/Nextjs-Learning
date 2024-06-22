import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

export default function PhotoPage({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const photo: WonderImage = wondersImages.find(
    (wonder) => wonder.id === photoId
  )!;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-4">{photo.title}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Image
          src={photo.src}
          alt={photo.title}
          width={400}
          height={300}
          className="w-full object-cover aspect-square"
        />
      </div>
      <div className="text-center my-4">
        <p className="text-lg">{photo.location}</p>
        <p className="text-lg">{photo.date}</p>
      </div>
    </div>
  );
}

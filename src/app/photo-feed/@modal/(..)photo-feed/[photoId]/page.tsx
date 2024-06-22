import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";
import Image from "next/image";

export default function PhotoPage({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const photo: WonderImage = wondersImages.find(
    (wonder) => wonder.id === photoId
  )!;

  return (
    <Modal>
      <div className="flex justify-center items-center h-50">
        <Image
          src={photo.src}
          alt={photo.title}
          className="w-full object-cover aspect-square"
        />
      </div>
      <div className="text-center my-4 bg-white p-4 rounded shadow-lg">
        <h1 className="text-3xl font-bold text-center my-4">{photo.title}</h1>
        <p className="text-lg">{photo.location}</p>
        <p className="text-lg">{photo.date}</p>
      </div>
    </Modal>
  );
}

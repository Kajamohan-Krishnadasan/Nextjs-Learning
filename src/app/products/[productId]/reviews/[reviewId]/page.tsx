"use client";
import { notFound } from "next/navigation";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error loading review details.");
  // }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Details of Review {params.reviewId} for Product {params.productId}
    </h1>
  );
}

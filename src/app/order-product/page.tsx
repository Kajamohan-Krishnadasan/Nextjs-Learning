"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing Your Order");

    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2"
      >
        Place Order
      </button>
    </>
  );
}

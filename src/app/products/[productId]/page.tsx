import { Metadata } from "next";

interface Props {
  params: {
    productId: string;
  };
}

// Dynamic Metadata without async
// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params.productId}`,
//   };
// };

// Dynamic Metadata with async
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    });
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details of Product {params.productId}</h1>;
}

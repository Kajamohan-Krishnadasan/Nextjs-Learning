import { StaticImageData } from "next/image";
import Img1 from "./images/1.jpg";
import Img2 from "./images/2.jpg";
import Img3 from "./images/3.jpg";
import Img4 from "./images/4.jpg";
import Img5 from "./images/5.jpg";

export type WonderImage = {
  id: string;
  title: string;
  src: StaticImageData;
  location: string;
  date: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    title: "Aurora Borealis",
    src: Img1,
    location: "Iceland",
    date: "2021-01-01",
  },
  {
    id: "2",
    title: "Mount Everest",
    src: Img2,
    location: "Nepal",
    date: "2021-01-02",
  },
  {
    id: "3",
    title: "Great Barrier Reef",
    src: Img3,
    location: "Australia",
    date: "2021-01-03",
  },
  {
    id: "4",
    title: "Victoria Falls",
    src: Img4,
    location: "Zambia",
    date: "2021-01-04",
  },
  {
    id: "5",
    title: "Parícutin",
    src: Img5,
    location: "Mexico",
    date: "2021-01-05",
  },
];

export default wondersImages;

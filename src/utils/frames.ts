import React from "react";
import Frame1, {
  Frame10,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  Frame6,
  Frame7,
  Frame8,
  Frame9,
} from "../Frames/Simple_Frames";
export type Frame = {
  id: string;
  Component: React.FC<{}>;
  imageCount: number;
};

const frames: Frame[] = [
  { id: "1", Component: Frame1, imageCount: 1 },
  { id: "2", Component: Frame2, imageCount: 1 },
  { id: "3", Component: Frame3, imageCount: 1 },
  { id: "4", Component: Frame4, imageCount: 2 },
  { id: "5", Component: Frame5, imageCount: 1 },
  { id: "6", Component: Frame6, imageCount: 2 },
  { id: "7", Component: Frame7, imageCount: 1 },
  { id: "8", Component: Frame8, imageCount: 2 },
  { id: "9", Component: Frame9, imageCount: 1 },
  { id: "10", Component: Frame10, imageCount: 2 },
];

export default frames;

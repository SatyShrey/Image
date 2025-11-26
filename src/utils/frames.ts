import React from "react";
import Frame1 from "../Frames/Frame1";
import Frame2 from "../Frames/Frame2";
export type Frame = {
  id: string;
  Component: React.FC<{}>;
  imageCount:number
};

const frames: Frame[] = [
  { id: "1", Component: Frame1,imageCount:1 },
  { id: "2", Component: Frame2,imageCount:2 },
];

export default frames;
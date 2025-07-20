import jsPDF from "jspdf";
import { useRef } from "react";

import { toPng } from "html-to-image";

export function useReactToPdf() {
  const containRef = useRef<HTMLDivElement | null>(null);

  const demo = (data: string) => {
    const hi = document.querySelector("#hi");
    const image = document.createElement("img");
    image.alt = "image demo";
    image.src = data;
    hi?.children[0].replaceWith(image);
  };

  const drawImage = async (element: HTMLElement) => {
    const url = await toPng(element, {
      pixelRatio: 2,
      backgroundColor: "white",
    });
    return url;
  };

  const toPDF = async () => {
    const element = containRef.current;
    if (!element) return;

    const image = await drawImage(element);

    // demo
    demo(image);

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [210, 297], // A4 size in pixels (210mm x 297mm)
      putOnlyUsedFonts: true,
    });
    doc.addImage(image, "PNG", 0, 0, 210, 297); // Add the image to the PDF
    doc.save("download.pdf");
  };

  return { containRef, toPDF };
}

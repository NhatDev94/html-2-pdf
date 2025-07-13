import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useRef } from "react";

export function useReactToPdf() {
  const containRef = useRef<HTMLDivElement | null>(null);

  const toPDF = async () => {
    const element = containRef.current;
    if (!element) return;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [210, 297], // A4 size in pixels (210mm x 297mm)
      putOnlyUsedFonts: true,
    });
    doc.addImage(data, "PNG", 0, 0, 210, 297); // Add the image to the PDF
    doc.save("download.pdf");
  };

  return { containRef, toPDF };
}

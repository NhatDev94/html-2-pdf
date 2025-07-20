import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useRef } from "react";
import domtoimage from "dom-to-image-more";

export function useReactToPdf() {
  const containRef = useRef<HTMLDivElement | null>(null);

  const demo = (data: string) => {
    const hi = document.querySelector("#hi");
    const image = document.createElement("img");
    image.alt = "image demo";
    image.src = data;
    hi?.children[0].replaceWith(image);
  };

  const replaceTextareaToDiv = (cloneChild: HTMLElement) => {
    const els = cloneChild.querySelectorAll("textarea");
    els.forEach((el) => {
      const div = document.createElement("div");
      div.textContent = el.value;
      div.className = el.className;
      el.replaceWith(div);
    });
  };

  const drawImage = async (element: HTMLElement) => {
    const child = element.children[0];
    const cloneChild = child.cloneNode(true) as HTMLElement;
    cloneChild.classList.add("z-50", "w-full", "h-full");

    replaceTextareaToDiv(cloneChild);

    element.appendChild(cloneChild);
    const canvas = await html2canvas(element, {
      scale: 2,
    });
    element.removeChild(cloneChild);
    return canvas.toDataURL("image/png");
  };

  // remove later
  const haha = async (node: HTMLElement) => {
    const scale = window.devicePixelRatio || 2;

    const style = {
      transform: "scale(" + scale + ")",
      transformOrigin: "top left",
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
    };

    const param = {
      width: node.offsetWidth * scale,
      height: node.offsetHeight * scale,
      style,
    };
    const dataUrl = await domtoimage.toPng(node, param);
    demo(dataUrl);
    return dataUrl;
  };

  const toPDF = async () => {
    const element = containRef.current;
    if (!element) return;

    const image = await haha(element);
    // return;

    // const image = await drawImage(element);

    // demo(image);

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

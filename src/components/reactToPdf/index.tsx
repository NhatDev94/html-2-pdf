import { type ReactNode } from "react";

type ReactToPdfProps = {
  containRef: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

export function ReactToPdf({ children, containRef }: ReactToPdfProps) {
  const percent = 29700 / 210; // 141.42857142857142

  return (
    <div
      ref={containRef}
      className="w-full relative bg-white text-base"
      style={{ paddingBottom: `${percent}%` }} // or use oklch(62.2345% 0.2579 264.22) for a different color
    >
      <div className="absolute w-full h-full top-0 left-0 p-[5%] border-4 border-green-500">
        {children}
      </div>
    </div>
  );
}

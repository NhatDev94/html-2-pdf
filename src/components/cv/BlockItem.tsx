import { useEffect, useRef, useState } from "react";
import { Input } from "../Input";
import clsx from "clsx";
import { InputControl } from "./InputControl";
import { Plus } from "../../assets/svgs/Plus";
import { Minus } from "../../assets/svgs/Minus";

type Item = {
  id: string;
  type: string;
  value: string;
};

type BlockItemProps = {
  ableRemove?: boolean;
  item: Item;
  type: "title" | "description";
  onUpdate: (item: Item) => void;
  onAddItem: () => void;
  onRemoveItem: () => void;
};

export function BlockItem({
  ableRemove = false,
  item,
  type,
  onUpdate,
  onAddItem,
  onRemoveItem,
}: BlockItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [clickedElement, setClickedElement] = useState<HTMLElement | null>(
    null
  );

  const handleUpdate = (input: string) => {
    if (item.value === input) return;
    const newItem = {
      ...item,
      value: input,
    };
    onUpdate(newItem);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLTextAreaElement>,
    input: string
  ) => {
    const isDisableBlur = clickedElement?.closest(".disable_blur");
    if (isDisableBlur) {
      e.target.focus();
      return;
    }
    setIsFocus(false);
    handleUpdate(input);
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      setClickedElement(e.target as HTMLElement);
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        "w-fit min-w-40 relative text-black",
        type === "title" && "font-bold text-3xl mb-4",
        type === "description" && "font-normal text-base mb-2"
      )}
    >
      <Input value={item.value} onFocus={handleFocus} onBlur={handleBlur} />

      {isFocus && <InputControl inputElement={ref.current} />}
      {isFocus && type === "description" && (
        <AddOrRemove
          ableRemove={ableRemove}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
        />
      )}
    </div>
  );
}

function AddOrRemove({
  ableRemove,
  onAddItem,
  onRemoveItem,
}: {
  ableRemove: boolean;
  onAddItem: () => void;
  onRemoveItem?: () => void;
}) {
  return (
    <div className="add_or_remove disable_blur absolute top-1/2 left-full -translate-y-1/2 ml-4 flex items-center gap-x-4">
      <div
        className="w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer"
        onClick={onAddItem}
      >
        <Plus />
      </div>
      {ableRemove && (
        <div
          className="w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer"
          onClick={onRemoveItem}
        >
          <Minus />
        </div>
      )}
    </div>
  );
}

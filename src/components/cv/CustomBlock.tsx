import { useState } from "react";
import { BlockItem } from "./BlockItem";
import { uid } from "uid";

const DEFAULT_TITLE = "Custom Block";
const DEFAULT_DESCRIPTION =
  "This is a custom block component that can be used to display content.";

type InputValue = {
  id: string;
  type: string;
  value: string;
};

const defaultTitles = [
  {
    id: uid(),
    type: "default",
    value: DEFAULT_TITLE,
  },
];

const defaultDescriptions = [
  {
    id: uid(),
    type: "default",
    value: DEFAULT_DESCRIPTION,
  },
];

export function CustomBlock() {
  const [titles, setTitles] = useState<InputValue[]>(defaultTitles);
  const [descriptions, setDescriptions] =
    useState<InputValue[]>(defaultDescriptions);

  const handleUpdateTitle = (item: InputValue) => {
    setTitles([item]);
  };

  const handleUpdateDescription = (item: InputValue) => {
    const newDes = descriptions.map((des: InputValue) => {
      if (des.id === item.id) return item;
      return des;
    });
    setDescriptions(newDes);
  };

  const handleAddItem = (currentItem: InputValue) => {
    const index = descriptions.indexOf(currentItem);
    const newItem = {
      id: uid(),
      type: "new",
      value: DEFAULT_DESCRIPTION,
    };

    const newDes = [...descriptions];
    newDes.splice(index + 1, 0, newItem);
    setDescriptions(newDes);
  };

  const handleRemoveItem = (currentItem: InputValue) => {
    const newDes = descriptions.filter((item) => item.id !== currentItem.id);
    setDescriptions(newDes);
  };

  return (
    <div className="w-full h-fit bg-white p-4 hover:bg-gray-200">
      {titles.map((item: InputValue, i: number) => (
        <BlockItem
          key={i}
          type="title"
          item={item}
          onUpdate={handleUpdateTitle}
          onAddItem={() => handleAddItem(item)}
          onRemoveItem={() => handleRemoveItem(item)}
        />
      ))}

      {descriptions.map((item: any) => (
        <BlockItem
          key={item.id}
          ableRemove={descriptions.length > 1}
          type="description"
          item={item}
          onUpdate={handleUpdateDescription}
          onAddItem={() => handleAddItem(item)}
          onRemoveItem={() => handleRemoveItem(item)}
        />
      ))}
    </div>
  );
}

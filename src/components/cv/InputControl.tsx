type InputControlProps = {
  inputElement: HTMLDivElement | null;
};

export function InputControl({ inputElement }: InputControlProps) {
  const onFormat = (type: string) => {
    if (inputElement) {
      const classList = inputElement.classList;

      switch (type) {
        case "bold":
          const isBold = classList.contains("font-semibold");
          isBold
            ? inputElement.classList.remove("font-semibold")
            : inputElement.classList.add("font-semibold");
          return;
        case "underline":
          const isUnderline = classList.contains("underline");
          isUnderline
            ? inputElement.classList.remove("underline")
            : inputElement.classList.add("underline");
          return;
        case "italic":
          const isItalic = classList.contains("italic");
          isItalic
            ? inputElement.classList.remove("italic")
            : inputElement.classList.add("italic");
          return;
        default:
          break;
      }
    }
  };

  const options = [
    {
      element: <p className="text-base font-bold">B</p>,
      onClick: () => onFormat("bold"),
    },
    {
      element: <p className="text-base font-bold underline">U</p>,
      onClick: () => onFormat("underline"),
    },
    {
      element: <p className="text-base font-bold italic">I</p>,
      onClick: () => onFormat("italic"),
    },
  ];

  return (
    <div className="h-7 px-2 disable_blur absolute top-0 right-0 -translate-y-full w-fit bg-gray-400 rounded-t-lg flex items-center gap-x-4">
      {options.map((item: any, i: number) => (
        <div
          className="h-full px-1 cursor-pointer text-white"
          key={i}
          onClick={item.onClick}
        >
          {item.element}
        </div>
      ))}
    </div>
  );
}

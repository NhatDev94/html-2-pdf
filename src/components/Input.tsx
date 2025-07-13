import clsx from "clsx";
import { useState } from "react";

type InputProps = {
  value: string;
  onFocus: () => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>, input: string) => void;
};

export function Input({ value, onFocus, onBlur }: InputProps) {
  const [input, setInput] = useState(value);
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (!input.trim()) {
      setInput(value);
      onBlur(e, value);
      return;
    }
    onBlur(e, input);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <textarea
      value={input}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={handleBlur}
      rows={1}
      className={clsx(
        "text-black block field-sizing-content px-2 py-0.5 resize-none outline-none focus:border focus:border-black/10 rounded decoration-auto"
      )}
    />
  );
}

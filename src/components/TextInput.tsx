import { TextInput as Input, TextInputProps } from "@mantine/core";
import clsx from "clsx";

interface Props extends TextInputProps {
  className?: string;
}

export function TextInput({ className, ...props }: Props) {
  return (
    <Input
      className={clsx(
        "[&>div>input]:w-full [&>div>input]:bg-gray-800 [&>div>input]:border [&>div>input]:border-gray-800 hover:[&>div>input]:border-cyan-400 focus:[&>div>input]:border-cyan-400 [&>div>input]:outline-none [&>div>input]:rounded [&>div>input]:p-2 text-white [&>label>span]:text-red-500",
        className
      )}
      unstyled
      required
      {...props}
    />
  );
}

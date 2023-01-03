import { TextInput as Input } from "@mantine/core";

interface Props {
  label: string;
  placeholder: string;
}

export function TextInput({ label, placeholder }: Props) {
  return (
    <Input
      label={label}
      placeholder={placeholder}
      className="[&>div>input]:w-full [&>div>input]:bg-gray-800 [&>div>input]:border [&>div>input]:border-gray-800 hover:[&>div>input]:border-cyan-400 focus:[&>div>input]:border-cyan-400 [&>div>input]:outline-none [&>div>input]:rounded [&>div>input]:p-2 text-white [&>label>span]:text-red-500"
      unstyled
      required
    />
  );
}

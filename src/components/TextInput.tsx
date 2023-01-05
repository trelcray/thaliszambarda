import { TextInput as Input, TextInputProps } from "@mantine/core";

interface Props extends TextInputProps{
  label: string;
  placeholder: string;
  type?: string;
  name: string;
}

export function TextInput({ label, placeholder, type, name }: Props) {
  return (
    <Input
      type={type}
      name={name}
      label={label}
      placeholder={placeholder}
      className="[&>div>input]:w-full [&>div>input]:bg-gray-800 [&>div>input]:border [&>div>input]:border-gray-800 hover:[&>div>input]:border-cyan-400 focus:[&>div>input]:border-cyan-400 [&>div>input]:outline-none [&>div>input]:rounded [&>div>input]:p-2 text-white [&>label>span]:text-red-500"
      unstyled
      required
    />
  );
}

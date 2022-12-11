import { Button as PrimitiveButton, ButtonProps } from "@mantine/core";
import { ReactNode } from "react";

interface IButtonProps extends ButtonProps {
  children: string;
  icon?: ReactNode;
}

export function Button({ children, icon }: IButtonProps) {
  return (
    <PrimitiveButton
      leftIcon={icon}
      className="rounded border-2 dark:text-blue-600 text-sky-800 dark:border-blue-600 border-sky-800 dark:hover:border-blue-500 hover:border-sky-900 dark:hover:text-blue-500 hover:text-sky-900 hover:bg-transparent"
      variant="outline"
    >
      {children}
    </PrimitiveButton>
  );
}

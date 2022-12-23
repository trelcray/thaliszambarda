import { Button as PrimitiveButton, ButtonProps } from "@mantine/core";
import { ReactNode } from "react";
import clsx from "clsx";

interface IButtonProps extends ButtonProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Button({ children, icon, className }: IButtonProps) {
  return (
    <PrimitiveButton
      leftIcon={icon}
      className={clsx("rounded border-2 dark:text-cyan-400 text-sky-800 dark:border-cyan-400 border-sky-800 hover:bg-blue-300/40 dark:hover:bg-cyan-200/10 hover:border-sky-900 hover:text-sky-900", className)}
      variant="outline"
    >
      {children}
    </PrimitiveButton>
  );
}

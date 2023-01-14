import { Button as PrimitiveButton, ButtonProps } from "@mantine/core";
import { ReactNode } from "react";
import clsx from "clsx";

interface IButtonProps extends ButtonProps {
  children: ReactNode;
  className?: string;
}

export function Button({ children, className, ...props }: IButtonProps) {
  return (
    <PrimitiveButton
      className={clsx(
        "rounded border-2 border-cyan-400 text-cyan-400 dark:text-cyan-400 hover:bg-cyan-200/30 dark:hover:bg-cyan-200/10",
        className
      )}
      variant="outline"
      {...props}
      >
      {children}
    </PrimitiveButton>
  );
}

import { Button as PrimitiveButton, ButtonProps } from "@mantine/core";
import clsx from "clsx";
import { IButtonProps } from "../@types/global";

export function Button({ children, className, ...props }: IButtonProps) {
  return (
    <PrimitiveButton
      className={clsx(
        "rounded border-2 border-cyan-400 text-cyan-400 dark:text-cyan-400 hover:bg-cyan-200/30 dark:hover:bg-cyan-200/10",
        className
      )}
      variant="outline"
      {...props}>
      {children}
    </PrimitiveButton>
  );
}

import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  buttonType?: "1" | "2";
  viewType?: "outline" | "filled" | "success" | "attention" | "error";
  size?: "sm" | "md" | "lg";
  children?: ReactNode | ReactNode[];
}

const Button = ({
  buttonType = "1",
  viewType = "filled",
  size = "md",
  children,
  ...props
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={clsx(
      "font-semibold rounded-4xl w-fit border",
      {
        "bg-app-blue-200 text-white border-transparent hover:bg-app-blue-100 active:bg-app-blue-300 disabled:bg-app-grey-300":
          viewType === "filled",
        "bg-transparent text-app-blue-200 border border-app-blue-200 hover:text-app-blue-100 active:border-app-blue-300 active:text-app-blue-300 disabled:border-app-grey-300 disabled:text-app-grey-250":
          viewType === "outline",
        "bg-app-green-500 text-white border-transparent hover:bg-app-green-200 active:bg-app-green-700 disabled:bg-app-green-100 disabled:text-app-grey-250":
          viewType === "success",
        "bg-app-attention-500 text-white border-transparent hover:bg-app-attention-300 active:bg-app-attention-600 disabled:bg-app-attention-100 disabled:text-app-grey-250":
          viewType === "attention",
        "bg-app-red-500 text-white border-transparent hover:bg-app-red-400 active:bg-app-red-600 disabled:bg-app-red-200 disabled:text-app-grey-250":
          viewType === "error",

        "bg-app-yellow-300 text-grey border-transparent hover:bg-app-yellow-500 active:bg-app-yellow-300 disabled:bg-app-yellow-200 disabled:text-app-grey-250":
          viewType === "filled" && buttonType === "2",
        "bg-transparent text-app-yellow-300 border border-app-yellow-300 hover:text-app-yellow-500 hover:border border-app-yellow-500 active:border-app-yellow-300 active:text-app-yellow-300 disabled:border-app-yellow-100 disabled:text-app-yellow-200":
          viewType === "outline" && buttonType === "2",
        "bg-app-green-500 text-grey border-transparent hover:bg-app-green-200 active:bg-app-green-700 disabled:bg-app-green-100 disabled:text-app-grey-250":
          viewType === "success"  && buttonType === "2",
        "bg-app-attention-500 text-grey border-transparent hover:bg-app-attention-300 active:bg-app-attention-600 disabled:bg-app-attention-100 disabled:text-app-grey-250":
          viewType === "attention"  && buttonType === "2",
        "bg-app-red-500 text-grey border-transparent hover:bg-app-red-400 active:bg-app-red-600 disabled:bg-app-red-200 disabled:text-app-grey-250":
          viewType === "error"  && buttonType === "2",
      },
      {
        "h-8 px-5": size === "sm",
        "h-12 px-5 py-3": size === "md",
        "h-16": size === "lg",
      }
    )}
  >
    {children}
  </button>
);

export { Button as default };

import { HTMLProps, ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

/* class MyButton extends React.Component<MyButtonProps & React.HTMLProps<HTMLButtonElement>, {}> {
  render() {
      return <button {...this.props}/>;
  }
} */
// Create an interface for the input element props
interface TWButtonElementProps
  extends Partial<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size">> {
  // Additional properties
  size?: VariantProps<typeof ButtonVariants>["size"];
  variant?: VariantProps<typeof ButtonVariants>["variant"];
  className?: string;
  children?: React.ReactNode;
}

const ButtonVariants = cva(["rounded-md", "focus:outline-none"], {
  variants: {
    size: {
      sm: ["text-sm", "py-1", "px-2"],
      md: ["text-base", "py-2", "px-4"],
      lg: ["text-lg", "py-4", "px-8"],
    },
    variant: {
      contained: [
        "bg-slate-950",
        "text-white",
        "hover:bg-slate-900",
        "dark:bg-slate-800",
        "dark:hover:bg-slate-700",
      ],
      outlined: [
        "border",
        "border-slate-950",
        "dark:border-slate-50",
        "bg-transparent",
        "hover:bg-slate-100",
        "dark:text-white",
        "dark:border-white",
        "dark:hover:bg-slate-900",
      ],
      text: [
        "border-none",
        "bg-transparent",
        "hover:text-slate-900",
        "dark:text-white",
        "dark:hover:text-slate-400",
      ],
    },
  },
  defaultVariants: {
    size: "md",
    variant: "text",
  },
});

const TWButton: React.FC<TWButtonElementProps> = ({
  size,
  variant,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={twMerge(ButtonVariants({ size, variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default TWButton;

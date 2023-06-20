import { HTMLProps, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

/* class MyButton extends React.Component<MyButtonProps & React.HTMLProps<HTMLButtonElement>, {}> {
  render() {
      return <button {...this.props}/>;
  }
} */
// Create an interface for the input element props
interface TWInputElementProps
  extends Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "size">> {
  // Additional properties
  size?: VariantProps<typeof InputVariants>["size"];
  className?: string;
}

const InputVariants = cva(
  [
    "border",
    "rounded-md",
    "focus:outline-none",
    "text-slate-950",
    "border-slate-950",
  ],
  {
    variants: {
      size: {
        sm: ["text-sm", "py-1", "px-2"],
        md: ["text-base", "py-2", "px-4"],
        lg: ["text-lg", "py-4", "px-8"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const TWInput: React.FC<TWInputElementProps> = ({
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <input className={twMerge(InputVariants({ size }), className)} {...props} />
  );
};

export default TWInput;

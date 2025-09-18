import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  fullWidth?: boolean;
  onClick: () => void;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-purple-600 text-white hover:bg-purple-400",
  secondary: "bg-purple-300 text-white hover:bg-purple-500",
};

const sizeStyles = {
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

const defaultStyles = "rounded-md items-center justify-center font-medium";

export const Button = (props: ButtonProps) => {
  console.log(props);
  return (
    <button
  onClick={props.onClick}
  className={`
    ${variantStyles[props.variant]} 
    ${defaultStyles} 
    ${sizeStyles[props.size]} 
    ${props.fullWidth ? "w-full" : ""} ${props.loading ? "opacity-50" : ""}`} disabled={props.loading}>
  {props.startIcon && <span className="pr-2">{props.startIcon}</span>}
  {props.text}
  {props.endIcon && <span className="pl-2">{props.endIcon}</span>}
</button>

  );
};


// Example usage
<Button
  variant="primary"
  size="md"
  text="Click Me"
  onClick={() => console.log("Clicked")}
  startIcon={<span>🔥</span>}
  endIcon={<span>➡️</span>}
/>;

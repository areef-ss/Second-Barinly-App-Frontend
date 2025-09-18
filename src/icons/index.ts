export interface IconProps {
  size: "sm" | "md" | "lg";
  link?:string
  onClick?:()=>void
}

export const iconSizeVariants = {
  sm: "size-2",
  md: "size-4",
  lg: "size-6",
};
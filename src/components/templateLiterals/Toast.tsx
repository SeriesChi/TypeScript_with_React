type HorizontalProps = "left" | "center" | "right";
type VerticalProps = "top" | "center" | "down";

type ToastProps = {
  position:
    | Exclude<`${HorizontalProps}-${VerticalProps}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <>Position - {position}</>;
};

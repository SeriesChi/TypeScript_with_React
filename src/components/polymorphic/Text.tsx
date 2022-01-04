type TypeOwnProps<T extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: T;
};

type TypeProps<T extends React.ElementType> = TypeOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof TypeOwnProps<T>>;

export const Text = <T extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TypeProps<T>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};

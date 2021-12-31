type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={item.id}>
          <div onClick={() => onClick(item)}>{item}</div>
        </div>
      ))}
    </>
  );
};

type RandomNumberProps = {
  value: number;
};

type PositiveProps = RandomNumberProps & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeProps = RandomNumberProps & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type ZeroProps = RandomNumberProps & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumbersProps = PositiveProps | NegativeProps | ZeroProps;

export const RandomNumbers = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumbersProps) => {
  return (
    <>
      {value} {isPositive && "Positive"} {isNegative && "Negative"}{" "}
      {isZero && "Zero"}
    </>
  );
};

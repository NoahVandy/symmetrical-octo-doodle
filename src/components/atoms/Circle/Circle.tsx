export interface ICircle {
  color: string;
  radius: number;
  strokeWidth?: number;
}

export default function Circle({
  color,
  radius,
}: ICircle) {
  const view = radius * 2;

  return (
    <svg
      height={view}
      width={view}
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius}
        stroke="black"
        strokeWidth="0"
        fill={color}
      />
    </svg>
  );
}

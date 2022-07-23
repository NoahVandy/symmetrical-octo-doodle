export interface ICircle {
  width: number;
  height: number;
  color: string;
  radius: number;
}

export default function Circle({
  width,
  height,
  color,
  radius
}: ICircle) {
  return (
    <svg
      height={height}
      width={width}
    >
      <circle
        cx={width / 2}
        cy={height / 2}
        r={radius}
        stroke="black"
        strokeWidth="0"
        fill={color}
      />
    </svg>
  );
}

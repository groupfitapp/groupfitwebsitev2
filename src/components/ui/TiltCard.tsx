import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scale?: number;
  glare?: boolean;
  perspective?: number;
}

export function TiltCard({
  children,
  className,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  scale = 1.03,
  glare = true,
  perspective = 1000,
}: TiltCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={scale}
      perspective={perspective}
      glareEnable={glare}
      glareMaxOpacity={0.07}
      glareColor="#e63946"
      glarePosition="all"
      tiltEasing="cubic-bezier(0.03,0.98,0.52,0.99)"
      transitionSpeed={1200}
      className={cn("transform-gpu will-change-transform", className)}
    >
      {children}
    </Tilt>
  );
}

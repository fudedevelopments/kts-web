"use client";

import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface OrangeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  href?: string;
}

export default function OrangeButton({ 
  children, 
  variant = "default", 
  size = "default",
  className = "",
  ...props 
}: OrangeButtonProps) {
  const baseStyle = {
    backgroundColor: variant === "outline" ? "transparent" : "#f78614",
    borderColor: "#f78614",
    color: variant === "outline" ? "#f78614" : "white",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "outline") {
      e.currentTarget.style.backgroundColor = "#f78614";
      e.currentTarget.style.color = "white";
    } else {
      e.currentTarget.style.backgroundColor = "#e85a2b";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "outline") {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.color = "#f78614";
    } else {
      e.currentTarget.style.backgroundColor = "#f78614";
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Button>
  );
}

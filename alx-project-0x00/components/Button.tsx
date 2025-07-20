import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md" }) => {
  const sizeClasses =
    size === "small"
      ? "px-2 py-1 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base";

  return (
    <button className={`${sizeClasses} bg-blue-600 text-white ${shape}`}>
      {title}
    </button>
  );
};

export default Button;

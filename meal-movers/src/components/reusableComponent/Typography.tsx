import React, { ReactNode } from 'react';

type TypographyProps = {
    children: ReactNode;
    variant: "h1" | "h2" | "p";
    className?: string;
    color?: "black" | "orange" | "yellow" | "slate";
};

const Typography: React.FC<TypographyProps> = ({ children, variant, color = "white", className = "" }) => {
    let colorValue;
    let weightValue;

    if (color == "black") {
        colorValue = "text-black";
      } else if (color == "500") {
        colorValue = "text-secondary-500";
      } else if (color == "600") {
        colorValue = "text-secondary-600";
      }else if (color == "700"){
        colorValue = "text-secondary-700";
      }else if (color == "black") {
        colorValue = "text-black";
      } else {
        colorValue = "text-white";
      }
      
      if (weight == "bold") {
        weightValue = "font-bold";
      } else if (weight == "medium") {
        weightValue = "font-medium";
      } else {
        weightValue = "font-normal";
      }

    return (
        <>
            {
                variant === "h1" &&
                <h1 className={`font-bold text-3xl ${color} ${className}`}>
                    {children}
                </h1>
            }
            {
                variant === "h2" &&
                <h2 className={`font-semibold text-2xl ${color} ${className}`}>
                    {children}
                </h2>
            }
            {
                variant === "p" &&
                <p className={`font-medium text-xl ${color} ${className}`}>
                    {children}
                </p>
            }
        </>
    );
};

export default Typography;

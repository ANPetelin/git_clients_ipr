import { Button } from "antd";
import { useCallback } from "react";

interface ButtonProps {
  label?: string;
  icon?:  JSX.Element;
  onClick?: () => void;
  className?: string;
  type?: "text" | "link" | "ghost" | "default" | "primary" | "dashed" | undefined;
}

export const UiButton = ({ icon, label, onClick, className, type = 'text' }: ButtonProps) => {
  const buttonClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);
  return <Button type={type} className={`flex items-center justify-center ${className}`} onClick={buttonClick} icon={icon}>{label}</Button>;
};

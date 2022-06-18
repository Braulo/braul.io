import { ReactNode } from "react";

const Button = ({
  children,
  text,
  className,
  onClick,
}: {
  children: ReactNode;
  text?: string;
  className: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-1 hover:ring-gray-300 ${className} transition-colors duration-500`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;

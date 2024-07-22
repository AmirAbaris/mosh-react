import React from "react";
import { ButtonColorType, ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ children, color = 'primary', onClick }: ButtonProps) => {
    return <button type="button" className={`btn btn-${color}`} onClick={onClick}> {children}</button >;
}

export default Button;

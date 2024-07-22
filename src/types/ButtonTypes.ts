export interface ButtonProps {
    children: string;
    color?: ButtonColorType;
    onClick: () => void;
}

export type ButtonColorType =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

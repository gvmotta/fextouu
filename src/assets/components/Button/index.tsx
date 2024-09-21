import { Button } from "@mui/material";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
}

const ButtonComponent:React.FC<ButtonProps> = ({ children, onClick, color }) => {
    return (
        <>
            <Button 
                variant="contained" 
                color={color}
                sx={{
                    textTransform: 'capitalize',
                }}
                size="large"
                onClick={onClick}
            >
                {children}
            </Button>
        </>
    )
};

export default ButtonComponent;
import React from "react";
import styled from "styled-components";

interface IButtonProps {
    children?: React.ReactNode;
    props?: any;
    onClick?: any;
}

const ClickEventButton: React.FC<IButtonProps> = ({ onClick, children, ...props }) => {
    return (
        <ButtonStyles {...props} onClick={onClick}>
            {children}
        </ButtonStyles>
    );
};

export default ClickEventButton;

const ButtonStyles = styled.button``;
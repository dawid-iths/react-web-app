import React from "react";

interface IFramgmentExampleProps {
    children?: React.ReactNode;
    props?: any;
}

const fragmentExample: React.FC<IFramgmentExampleProps> = ({  children, ...props }) => {
    return (
        <>
            <h1>Fragment</h1>
            <h2>Example</h2>
        </>
    );
};

export default fragmentExample;

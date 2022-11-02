import React from "react";

interface ICDNImageProps {
    children?: React.ReactNode;
    props?: any;
    imgUrl?: string;
}
//https://res.cloudinary.com/ql-cdn-dev/image/upload/v1667412919/cld-sample.jpg
const CdnImage: React.FC<ICDNImageProps> = ({ imgUrl, children, ...props }) => {
    return (
        <>
            <img src={imgUrl} alt="something" />
        </>
    );
};

export default CdnImage;

import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import Navbar from "./Navbar";

interface ICollectionPageContainer {
    extraMainClassName?: string;
    extraHeaderClassName?: string;
    imgSrc: string;
}
const CollectionPageContainer: FC<ICollectionPageContainer> = ({
    children,
    extraHeaderClassName = "",
    extraMainClassName = "",
    imgSrc,
}) => {
    return (
        <>
            <Navbar />

            <main
                className={`w-full min-h-screen bg-none bg-no-repeat bg-cover flex items-center justify-center pl-12 pt-24 ${extraMainClassName}`}
            >
                <header
                    className={`w-8/12 h-full min-w-[10rem] ${extraHeaderClassName}`}
                >
                    <Image src={imgSrc} alt="" width={1112} height={488} />
                </header>
                {children}
            </main>
        </>
    );
};

export default CollectionPageContainer;

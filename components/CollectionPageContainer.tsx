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
                // className={`w-full min-h-screen bg-none bg-no-repeat bg-cover flex items-center justify-center pl-12 pt-24 ${extraMainClassName}`}
                className={`w-full min-h-screen bg-none bg-no-repeat bg-cover flex items-center justify-center ${extraMainClassName}`}
            >
                {/* <header
                    className={`w-8/12 h-full min-w-[10rem] ${extraHeaderClassName}`}
                >
                    <Image
                        src={imgSrc}
                        alt=""
                        width={1112}
                        height={488}
                        priority={true}
                    />
                </header> */}
                {/* <header className="w-4/6 max-w-sm mx-auto flex items-center justify-center sm:pl-10 sm:pt-16 sm:mb-10"> */}
                <header
                    className={`w-4/6 max-w-sm mx-auto flex items-center justify-center ${extraHeaderClassName}`}
                >
                    <h1
                        className="w-full"
                        // className="w-full mr-auto ml-auto"
                        aria-label="Our collections"
                    >
                        <Image
                            src={imgSrc}
                            alt=""
                            width={200}
                            height={200}
                            layout="responsive"
                            priority={true}
                        />
                    </h1>
                </header>
                {children}
            </main>
        </>
    );
};

export default CollectionPageContainer;

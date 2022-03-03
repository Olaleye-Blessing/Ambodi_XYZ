import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import CollectionPageContainer from "../../components/CollectionPageContainer";

const Cactusclub: NextPage = () => {
    return (
        <>
            <CollectionPageContainer
                imgSrc="/pages/collections/cactusHeaderBg.png"
                extraMainClassName="sm:bg-[url('../images/pages/collections/CactusClubBg.png')] flex-col relative"
                extraHeaderClassName=" mt-0"
            >
                <footer className="absolute bottom-0 right-0 left-0 w-full">
                    <Image
                        src="/pages/collections/cactusFooterBg.png"
                        alt=""
                        width={2112}
                        height={488}
                    />
                </footer>
            </CollectionPageContainer>
        </>
    );
};

export default Cactusclub;

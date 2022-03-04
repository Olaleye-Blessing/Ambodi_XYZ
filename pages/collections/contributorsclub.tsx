import { NextPage } from "next";
import Image from "next/image";
import CollectionPageContainer from "../../components/CollectionPageContainer";
import Navbar from "../../components/Navbar";

const Contributorsclub: NextPage = () => {
    return (
        <>
            <CollectionPageContainer
                imgSrc="/pages/collections/contributorsclubHeader.png"
                extraMainClassName="sm:bg-[url('../images/pages/collections/contributorsclubBg.png')]"
                extraHeaderClassName="-mt-40 sm:mt-40"
            />
        </>
    );
};

export default Contributorsclub;

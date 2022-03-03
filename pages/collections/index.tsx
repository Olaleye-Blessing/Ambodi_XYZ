import { NextPage } from "next";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Navbar from "../../components/Navbar";
import OgClub from "./../../images/collections/OGClubHero.png";
import ContributorsClub from "./../../images/collections/ContributorsClub.png";
import CactusClub from "./../../images/collections/CactusClub.png";
import IAmClub from "./../../images/collections/IAmClub.png";
import HushRushClub from "./../../images/collections/HushAndRushClub.png";
import WritersClub from "./../../images/collections/WritersClub.png";
import CoCreatorsClub from "./../../images/collections/CoCreatorsClub.png";
import Link from "next/link";

const Collections: NextPage = () => {
    const clubs = [
        { href: "ogclub", src: OgClub },
        { href: "contributorsclub", src: ContributorsClub },
        { href: "cactusclub", src: CactusClub },
        { href: "iAmclub", src: IAmClub },
        { href: "hushrushclub", src: HushRushClub },
        { href: "writersclub", src: WritersClub },
        { href: "cocreatorsclub", src: CoCreatorsClub },
    ];

    return (
        <>
            <Navbar />
            <main className="w-full h-screen bg-[url('../images/collectionsBg.png')] bg-no-repeat bg-cover">
                <header className="pt-48">
                    <h1
                        className="bg-[url('../images/ourCollectionHero.png')] h-44 bg-no-repeat bg-cover bg-top w-[39rem] mr-auto ml-auto"
                        aria-label="Our Collections"
                    ></h1>
                </header>
                <section className="max-w-5xl mr-auto ml-auto flex items-center justify-center">
                    <Splide
                        className=""
                        options={{
                            perPage: 1,
                            perMove: 1,
                            drag: true,
                            width: "30rem",
                        }}
                    >
                        {clubs.map((club, i) => (
                            <SplideSlide
                                key={i}
                                className="flex items-center justify-center cursor-pointer"
                            >
                                <Link href={`/collections/${club.href}`}>
                                    <a>
                                        <Image src={club.src} alt="" />
                                    </a>
                                </Link>
                            </SplideSlide>
                        ))}
                    </Splide>
                </section>
            </main>
        </>
    );
};

export default Collections;

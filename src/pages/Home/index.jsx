import { Body } from "../../components/Body";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header/index";
import { NavBar } from "../../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <Body />
            <Footer />
        </>
    );
}
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";

export function Home(){
    return (
        <div className="home-container">
            <Header/>
            <Hero/>
        </div>
    )
}
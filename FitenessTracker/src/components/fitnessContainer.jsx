import { Header } from "./header/header";
import { FitnessInput } from "./fitnessInput/fitnessInput";
import {FitnessList} from "./fitnessList/fitnessList";
import { Footer } from "./footer/footer";

export const FitnessContainer = () => {
    return (
        <main>
            <Header />
            <FitnessInput />
            <FitnessList />
            <Footer/>
        </main>
    )
}
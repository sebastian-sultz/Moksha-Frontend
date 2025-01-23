import FeelGood from "./FeelGood"
import Feeling from "./Feeling"
import FindingHelp from "./FindingHelp"
import Hero from "./Hero"
import Mission from "./Mission"

import { ToastContainer } from 'react-toastify';


const Home = () => {

    return (
        <div>
            <div >
                <Hero />
                <Feeling />
                <Mission />
                <FindingHelp />
                <FeelGood />
            </div>
            <ToastContainer />
        </div>
    )
}
export default Home
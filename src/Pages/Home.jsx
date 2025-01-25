import Navbar from "../Common/Navbar";
import Banner from "./Banner";
import UpCommingMarathonCards from "./UpCommingMarathonCards";

const Home = () => {
    return (
        <div>
                    <header className="w-[85%] mx-auto">
                         <Navbar></Navbar>
                    </header>


                    <main>

                          <Banner></Banner>
                            <UpCommingMarathonCards></UpCommingMarathonCards>
                         
                    </main>



                    <footer>

                    </footer>
        </div>
    );
};

export default Home;
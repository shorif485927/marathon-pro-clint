import Navbar from "../Common/Navbar";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
                    <header className="w-[85%] mx-auto">
                         <Navbar></Navbar>
                    </header>


                    <main>

                          <Banner></Banner>
                         
                    </main>



                    <footer>

                    </footer>
        </div>
    );
};

export default Home;
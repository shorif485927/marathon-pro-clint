import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import AboutUs from "../Components/AboutUs";
import Banner from "../Components/Banner";
import OurCoach from "../Components/OurCoach";
import OurMarathon from "../Components/OurMarathon";
import UpcommingMarathon from "../Components/UpcommingMarathon";

const Home = () => {
    return (
        <div>
                    <header className="w-[85%] mx-auto">
                         <Navbar></Navbar>
                    </header>


                    <main>

                          <Banner></Banner>
                            <AboutUs></AboutUs>
                            <OurMarathon></OurMarathon>
                          <UpcommingMarathon></UpcommingMarathon>
                            <OurCoach></OurCoach>
                    </main>



                    <footer>
                            <Footer></Footer>
                    </footer>
        </div>
    );
};

export default Home;
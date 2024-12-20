import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import LeftNavbar from "../component/Layoutcomponent/LeftNavbar";
import RightNav from "../component/Layoutcomponent/RightNav";
import NavBar from "../component/NavBar";
import CategoryNews from "../pages/CategoryNews";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
<header>
    <Header></Header>
    <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
    </section>
</header>

<nav className="w-11/12 mx-auto py-2">
<NavBar></NavBar>
</nav>

<main  className="w-11/12 mx-auto pt-5 grid grid-cols-12 gap-3 " >

<aside className="left col-span-3">
    <LeftNavbar></LeftNavbar>
</aside>

<section className=" col-span-6"> <Outlet><CategoryNews></CategoryNews></Outlet> </section>

<aside className=" col-span-3"><RightNav></RightNav></aside>

</main>


        </div>
    );
};

export default HomeLayout;
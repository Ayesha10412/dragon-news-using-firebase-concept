import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import NavBar from "../component/NavBar";

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

<aside className="left col-span-3">Left Navbar</aside>
<section className=" col-span-6">Main content</section>
<aside className=" col-span-3">RIght navbar</aside>

</main>


        </div>
    );
};

export default HomeLayout;
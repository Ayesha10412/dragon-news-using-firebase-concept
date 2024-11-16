import Header from "../component/Header";
import LatestNews from "../component/LatestNews";

const HomeLayout = () => {
    return (
        <div>
<header>
    <Header></Header>
    <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
    </section>
</header>
<nav></nav>
<main></main>


        </div>
    );
};

export default HomeLayout;
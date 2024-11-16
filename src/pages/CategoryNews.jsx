import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {

const data = useLoaderData();
console.log(data)

    return (
        <div>
            <h2>news</h2>
        </div>
    );
};

export default CategoryNews;
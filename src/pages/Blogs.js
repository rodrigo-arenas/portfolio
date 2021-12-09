import CardItem from "../components/Cards/CardItem";
import "../components/Cards/CardItem.css";
import blogConfig from "../resources/configs/blogConfig"

const Blogs = () => {
    return (
        <div className="wrapper">
            {blogConfig.map((item) => (
                    <CardItem item={item}/>
                )
            )}
        </div>)
}

export default Blogs
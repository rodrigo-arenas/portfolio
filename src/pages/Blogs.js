import CardItem from "../components/Cards/CardItem";
import "../components/Cards/CardItem.css";
import blogConfig from "../assets/configs/blogConfig"
import React from 'react'

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
import "./article.css";
import Modal from "../Modal/Modal";
import React from "react";
import image1 from "../../assets/852208d54efd4644af3a2d668ca71fdf.jpeg";

function Article({articles}) {
    return (
        <div className="parent">
            <div className="article-container">
                {articles.map((article, articleIndex) => {
                    return (
                        <React.Fragment key={articleIndex}>
                            <div className="child">
                                <div className="container-1">
                                    <img className="news" src={image1} alt="news" title="news"/>
                                </div>
                                <div className="container-2">
                                    <div>
                                        <h3>{article.heading}</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem dolorum eaque fugit harum illum ipsum nisi nobis numquam optio perferendis provident quia quos sit soluta totam, unde, veritatis. Dolorem.</p>
                                    </div>
                                    <Modal article={article}/>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
};
export default Article;
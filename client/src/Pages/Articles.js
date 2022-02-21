import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetArticles, SetArticles} from "../Store/Articles/action";
import Article from "../Components/Article/Article";
import "./articles.css";
import image1 from "../assets/1627642197_news18_breaking_news-1200x800.webp";
import image2 from "../assets/maxresdefault.jpg";

function Articles() {

    const dispatch = useDispatch();

    useEffect( () => {
        async function fetchData () {
            try{
                const data = await GetArticles();
                dispatch(SetArticles(data));
            } catch(e) {
                throw e;
            }
        }
        fetchData();
        }, []);
    const {articleReducer} = useSelector((state) => state);

    return (
        <>
            <div className="flex-container">
                    <Article
                        articles={articleReducer.articles}
                        className="articles-container"
                    />

                    <div className="right-side-2">
                        <div className="item-right">
                            <div>Latest News</div>
                            <div className="image-container">
                                <img className="right-side-image" src={image1} alt="news" title="news"/>
                                <img className="right-side-image" src={image2} alt="news" title="news"/>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
};
export default Articles;
import "./addArticle.css";
import { useForm } from "react-hook-form";
import {AddArticles, CreateArticle} from "../Store/Articles/action";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import image1 from "../assets/newspaper-le-monde-background-old-preview.jpg";

const myAlert = () => {
    Swal.fire({
        icon:"error",
        title:"Oooops....",
        text:"Please fill all fields before sending the article information",
        footer:"Something went wrong"
    })
};

function AddArticle () {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const dispatch = useDispatch();
    async function onSubmit (data) {
        try{
            const newArticle = await CreateArticle(data);
            dispatch(AddArticles(newArticle));
            reset();
        }catch(e){throw e}
    };
    return (
        <>
            <div className="add-article-div" style={{backgroundImage:`url(${image1})`}}>
                <div className="form-heading">
                    <h2>Add article</h2>
                </div>
                <div className="form-container">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="form"
                    >
                        <label htmlFor="Name">Firstname</label>
                        <input
                            {...register("name", {required:true})}
                            type="text"
                            id="Name"
                        />
                        <label htmlFor="heading">Heading</label>
                        <input
                            {...register("heading", {required:true})}
                            type="text"
                            id="heading"
                        />
                        <label htmlFor="content">Content</label>
                        <textarea
                            {...register("content", {required:true})}
                            id="content"
                            className="add-article-textarea"
                        />
                        {errors?.name && errors?.heading && errors?.content && myAlert()}
                        <button type="submit">Add</button>
                    </form>
                </div>

            </div>
        </>
    )
};

export default AddArticle;
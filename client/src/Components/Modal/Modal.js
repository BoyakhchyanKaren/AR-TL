import React, {useEffect, useState} from "react";
import "./modal.css";
import {EditArticle, UpdateArticle} from "../../Store/Articles/action";
import {useDispatch} from "react-redux";

function Modal({article}) {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [context, setContext] = useState(article.content);

    const dataTypes = {
        created_at: "Created at - ",
        updated_at: "Edited at - ",
    };

    useEffect(( ) => {
        setContext(article.content);
    }, [article]);

    let fetchData = async (id, context) => {
        const data = await UpdateArticle(id, context);
        dispatch(EditArticle(data));
    }
    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    };
    let text;
    let date;
    const [edit, setEdit] = useState("");
    const [time, setTime] = useState("");
    useEffect( ( ) => {
        text = article.edited ? dataTypes.updated_at : dataTypes.created_at;
        date = article.edited ? article.updated_at.slice(0, 19) : article.created_at.slice(0, 19);
        setEdit(text);
        setTime(date);
    }, [article]);

    let handleEditable = () => {
        window.location.reload();
    };
    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay">
                    </div>
                    <div className="modal-content">
                        <h2>{article.heading}</h2>
                        <span>{edit} {time}</span>
                        <textarea
                            value={context}
                            className="text-area"
                            onChange={(e) => setContext(e.target.value)}
                        />
                        <hr style={{width: "100%"}}/>
                        <div className="btn-container">
                            <button className="btn close-modal" onClick={toggleModal}>Close</button>
                            <button className="btn edit-modal" onClick={() => {
                                setContext(context)
                                handleEditable()
                                fetchData(article.id, context);
                            }}>Edit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;


import {types} from "./types";
import axios from "axios";

//----------------------Creating Article----------------------

export function AddArticles ( data ) {
    return {
        type: types.CREATE_ARTICLE,
        payload: data
    }
};

export function CreateArticle ( data ) {
    return axios.post("http://localhost:8822/articles", data).then(article => article.data);
};

//-----------------------End Creating----------------------------




//------------------------Get Articles---------------------------

export function SetArticles ( data ) {
    return {
        type:types.GET_ALL_ARTICLES,
        payload:data
    }
};

export function GetArticles (  ) {
    return axios.get("http://localhost:8822/articles").then(articles => articles.data);
}

//------------------------End Getting------------------------------


//----------------------------Edit Articles-------------------------

export function EditArticle ( data ) {
    return {
        type:types.UPDATE_ARTICLE,
        payload:data
    }
};

export function UpdateArticle ( id, data ) {
    return axios.put(`http://localhost:8822/articles/${id}`, {
        content:data
    }).then(article => article.data);
}

//-------------------------End Editing---------------------------------
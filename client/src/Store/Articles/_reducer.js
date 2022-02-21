import {types} from "./types";
import {addArticle, getArticles, editArticle} from "./utils";

const articleState = {
    articles:[
        {id:1, content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem dolorum eaque fugit harum illum ipsum nisi nobis numquam optio perferendis provident quia quos sit soluta totam, unde, veritatis. Dolorem.", heading:"New News", created_at:"2022-02-20T15:49:07.641Z", updated_at:"2022-02-20T15:49:07.641Z", edited:false},
        {id:2, content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem dolorum eaque fugit harum illum ipsum nisi nobis numquam optio perferendis provident quia quos sit soluta totam, unde, veritatis. Dolorem.", heading:"New News", created_at:"2022-02-20T15:49:07.641Z", updated_at:"2022-02-20T15:49:07.641Z", edited:false},
        {id:3, content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem dolorum eaque fugit harum illum ipsum nisi nobis numquam optio perferendis provident quia quos sit soluta totam, unde, veritatis. Dolorem.", heading:"New News", created_at:"2022-02-20T15:49:07.641Z", updated_at:"2022-02-20T15:49:07.641Z", edited:false},
    ],
};

export function articleReducer ( state=articleState, option ) {
    switch (option.type) {
        case types.GET_ALL_ARTICLES:
            state.articles = getArticles(state, option.payload);
            break;
        case types.CREATE_ARTICLE:
            state.articles = addArticle(state, option.payload);
            break;
        case types.UPDATE_ARTICLE:
            state.articles = editArticle(state, option.payload);
            break;
    }
    return {...state};
}
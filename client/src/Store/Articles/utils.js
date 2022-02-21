export function addArticle (state, newArticle) {
    return [...state.articles, newArticle];
};

export function getArticles (state, articles) {
    state.articles = articles;
    return state.articles;
}

export function editArticle (state, data) {
    const {id, content} = data;
    const article = state.articles.find(el => el.id === id);
    article.content = content;
    return [
        ...state.articles
    ]
};
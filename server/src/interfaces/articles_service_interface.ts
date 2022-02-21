export type ArticleType = {
    heading?:string;
    content?:string;
}

export interface Articles_service_interface {
    getAllArticles: () => object | object[];
    getById: (id:number | string) => object;
    createArticle: (newArticle:ArticleType) => object;
    updateArticle: (id:string, updatedData:ArticleType) => object;
    deleteArticle: (id:number | string) => object;
}
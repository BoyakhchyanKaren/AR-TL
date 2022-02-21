import {Articles_service_interface, ArticleType} from "../interfaces/articles_service_interface";
import {getConnection, getRepository} from "typeorm";
import {Articles} from "../entities/Articles";
export class ArticlesRepository implements Articles_service_interface{

    static async getAllArticles ( ) {
        try {
            return await getRepository(Articles).find();
        }catch (e) {
            return null;
        }
    };

    static async getById ( id:number | string ) {
        try {
            return await getRepository(Articles).findOne(id);
        }catch (e) {
            return null;
        }
    };

    static async createArticle ( newArticle:ArticleType ) {
        try {
            const article = await getRepository(Articles).create(newArticle);
            return await getRepository(Articles).save(article);
        }catch (e) {
            return null;
        }
    };

    static async updateArticle ( id:string, updatedData:ArticleType ) {
        try {
            const article = await getRepository(Articles).findOne(id);
            if(article && article.content?.trim() !== updatedData.content?.trim()) {
                await getRepository(Articles).merge(article, {...updatedData, edited:true});
                return await getRepository(Articles).save(article);
            }
        }catch (e) {
            return null;
        }
    };

    static async deleteArticle ( id:string ) {
        try {
            const article = await getRepository(Articles).findOne(id);
            if(article) {
                await getConnection()
                    .createQueryBuilder()
                    .update(Articles)
                    .delete()
                    .where({id:id})
                    .execute()
                return true;
            }
        }catch (e) {
            return null;
        }
    };


    getAllArticles: () => object | object[];
    getById: (id:number | string) => object;
    createArticle: (newArticle:ArticleType) => object;
    updateArticle: (id:string, updatedData:ArticleType) => object;
    deleteArticle: (id:number | string) => object;

};


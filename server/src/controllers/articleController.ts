import {NextFunction, Request, Response} from "express";
import {ArticlesRepository} from "../services/articles";
import {Articles_controller_interface} from "../interfaces/articles_controller_interface";
import {ParamsDictionary} from "express-serve-static-core";
import {ParsedQs} from "qs";
import {HttpError} from "../exceptions/HttpError";
import {ExceptionMessages} from "../exceptions/messages";
import StatusCode from "../exceptions/statusCodes";


export class ArticleController implements Articles_controller_interface {
    getAllArticles: (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => object;
    getArticleById: (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => object;
    createArticle: (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => object;
    updateArticle: (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => object;
    deleteArticle: (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => object;

    static async getAllArticles(req: Request, res: Response, next: NextFunction) {

        try {
            const articles = await ArticlesRepository.getAllArticles();
            if (!articles) {
                return next(HttpError.notFound(ExceptionMessages.NOT_FOUND.Article))
            };
            res.status(StatusCode.SuccessRequest).json(articles);
        } catch (e) {
            next(HttpError.internalServerError(ExceptionMessages.INTERNAL))
        }

    };

    static async getArticleById(req: Request, res: Response, next: NextFunction) {

        try {

            const {id}: ParamsDictionary = req.params;
            const article = await ArticlesRepository.getById(id);
            if (!article) {
                return next(HttpError.notFound(ExceptionMessages.NOT_FOUND.Article));
            };
            res.status(StatusCode.SuccessRequest).json(article);

        } catch (e) {
            next(HttpError.internalServerError(ExceptionMessages.INTERNAL));
        }

    };

    static async createArticle(req: Request, res: Response, next: NextFunction) {

        try {
            const data = req.body;
            const newArticle = await ArticlesRepository.createArticle(data);
            if (!newArticle) {
                return next(HttpError.badRequest(ExceptionMessages.DB_ERROR))
            }
            res.status(StatusCode.CreateRequest).json(newArticle);
        } catch (e) {
            next(HttpError.internalServerError(ExceptionMessages.INTERNAL));
        }

    };

    static async updateArticle(req: Request, res: Response, next: NextFunction) {

        try {
            const data = req.body;
            const {id}: ParamsDictionary = req.params;
            const updatedArticle = await ArticlesRepository.updateArticle(id, data);
            if (!updatedArticle) {
                return next(HttpError.badRequest(ExceptionMessages.NOT_FOUND.Article));
            }
            res.status(StatusCode.SuccessRequest).json(updatedArticle);
        } catch (e) {
            console.log(e);
        }

    };

    static async deleteArticle(req: Request, res: Response, next: NextFunction) {

        try {
            const {id}:ParamsDictionary = req.params;
            const deletedArticle = await ArticlesRepository.deleteArticle(id);
            if(!deletedArticle) {
                return next(HttpError.notFound(ExceptionMessages.NOT_FOUND.Article));
            }
            res.status(StatusCode.SuccessRequest).json(ExceptionMessages.DELETE);
        } catch (e) {
            console.log(e);
        }

    };

};
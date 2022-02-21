import { Router } from "express";
import {ArticleController} from "../controllers/articleController";
import {validateRequestSchema} from "../middlewares/validate-request-schema";
import {createArticleDto, updateArticleDto} from "../dtos/article.dtos";


export const articleRouter = Router();

articleRouter
        .get("/", ArticleController.getAllArticles)
        .post("/", createArticleDto, validateRequestSchema, ArticleController.createArticle);

articleRouter
        .get("/:id", ArticleController.getArticleById)
        .put("/:id", updateArticleDto, ArticleController.updateArticle)
        .delete("/:id", ArticleController.deleteArticle);
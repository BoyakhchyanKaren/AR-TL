import { ArticleController } from "../../src/controllers/articleController";
import { Articles } from "../../src/entities/Articles";
import  * as httpMocks  from "node-mocks-http";
import {ArticleType} from "../../src/interfaces/articles_service_interface";
Articles.create = jest.fn();

describe("Article Controller", () => {
    let req:any, res:any, next:any;
    let testData:ArticleType;
    beforeEach(() => {
        req = httpMocks.createRequest()
        res = httpMocks.createResponse();
        next = null;
    })

    it("should have a createArticle method", ( ) => {
        expect(typeof ArticleController.createArticle).toBe("function");
    });
    it("should have a getAllArticles method", ( ) => {
        expect(typeof ArticleController.getAllArticles).toBe("function");
    });
    it("should have a getArticleById method", ( ) => {
        expect(typeof ArticleController.getArticleById).toBe("function");
    });
    it("should have a updateArticle method", ( ) => {
        expect(typeof ArticleController.updateArticle).toBe("function");
    });
    it("should have a deleteArticle method", ( ) => {
        expect(typeof ArticleController.deleteArticle).toBe("function");
    });


    it("should call Articles.createArticle", async ( ) => {
        try {
            await ArticleController.createArticle(req, res, () => {return});
            expect(Articles.create).toBeCalledWith(testData);
        }catch (e) {
            console.log(e);
        }
    });

    it("should return 201 response code" , async ( ) => {
        try{
            req.body = testData;
            await ArticleController.createArticle(req, res, () => {return});
            expect(res.statusCode).toBe(201);
            expect(res._isEndCalled()).toBeTruthy();
        }catch (e) {
            console.log(e)
        }
    })
});


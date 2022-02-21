import {
    BaseEntity,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";
import {IArticle} from "../interfaces/article_interface";

@Entity("Articles", {
    orderBy: {
        id: "DESC",
    }
})
export class Articles extends BaseEntity implements IArticle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: "255", default: "Untitled article"})
    heading: string;

    @Column({length: "10000"})
    content: string;

    @Column({default:false})
    edited:boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

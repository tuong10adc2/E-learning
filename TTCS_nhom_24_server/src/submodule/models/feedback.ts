import { isObject } from "../utils/validation";
import { Question } from "./question";
import { UserInfo } from "./user";

class Feedback {
    id?: string | undefined;
    status: number; // chưa xử lý, đã xử lý
    idQuestion : string | undefined;
    idCourse: string | undefined;
    idUser: string | undefined;
    dataUser: UserInfo | null;
    dataQuestion: Question | null;
    type : number[]; // loại feedback , 
    content: string;
    createDate?: number;
    updateDate?: number

    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.status = args?.status ?? 0; 
        this.idQuestion = isObject(args.idQuestion) ? new Question(args.idQuestion)?.id : (args?.idQuestion ?? undefined);
        this.dataQuestion = isObject(args.idQuestion) ? new Question(args.idQuestion) : null; 
        this.idUser = isObject(args.idUser) ? new UserInfo(args.idUser)?._id : (args?.idUser ?? undefined);
        this.dataUser = isObject(args.idUser) ? new UserInfo(args.idUser) : null; 
        this.type = args?.type ?? [];
        this.content = args?.content ?? '';
        this.idCourse = args?.idCourse ?? undefined; 
        this.createDate = args?.createDate ?? undefined
        this.updateDate = args?.updateDate ?? undefined
    }
}

export { Feedback }
import { isObject } from "../utils/validation";
import { Topic } from "./topic";

class Lesson {
    id?: string | undefined;
    status: number;
    idTopic : string | undefined;
    video?: string;
    createDate ?: number;
    updateDate ?: number;
    des : string;
    time: number | null;
    dataTopic: Topic | null;
    type : number | null; // 1: video , 2: document

    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.status = args?.status ?? 0; 
        this.idTopic = args?.idTopic ?? undefined;
        this.video = args?.video ?? ''
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
        this.des = args?.des ?? '';
        this.time = args?.time ?? null;
        this.idTopic = isObject(args.idTopic) ? new Topic(args.idTopic)?.id : (args?.idTopic ?? undefined);
        this.dataTopic = isObject(args.idTopic) ? new Topic(args.idTopic) : null; 
        this.type = args?.type ?? null;
    }

}

export { Lesson };
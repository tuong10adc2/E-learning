class Question {
    id?: string | undefined;
    question: string;
    result: {
        index: number,
        text: string
    }[]; // đáp án đúng: có thể có nhiều đáp án đúng
    answer: {
        index: number,
        text: string,
        isResult: boolean,
        _id?: string | null
    }[]; // đáp án,
    questionChild : string[] | null;
    parentId: string|null;
    status: number;
    idTopic : string | null;
    index: number;
    hint:string;
    createDate ?: number; 
    updateDate ?: number;

    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.question = args?.question ?? '';
        this.result = args?.result ?? [];
        this.answer = args?.answer ?? [];
        this.status = args?.status ?? 0; 
        this.idTopic = args?.idTopic ?? null;
        this.questionChild = args?.questionChild ?? null;
        this.parentId = args?.parentId ?? null;
        this.index = args?.index ?? 0;
        this.hint = args?.hint ?? '';
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }

}

export { Question };
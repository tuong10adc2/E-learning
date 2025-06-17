class Tag {
    // môn hoc
    id?: string | undefined; 
    name: string;
    status: number;
    idCategory: string[]; // môn học thuộc lớp nào
    createDate ?: number; 
    updateDate ?: number;

    constructor(args?: any){
        this.id = args?._id ?? args?.id ?? undefined;
        this.name = args?.name ?? '';
        this.status = args?.status ?? 0;
        this.idCategory = args?.idCategory ?? [];
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }
}

export { Tag };
class Category {
    id?: string | undefined; 
    name: string;
    status: number;
    avatar: string | null;
    des: string;
    index: number;
    slug: string;
    createDate ?: number;
    updateDate ?: number;

    constructor(args?: any){
        this.id = args?._id ?? args?.id ?? undefined;
        this.name = args?.name ?? '';
        this.status = args?.status ?? 0;
        this.avatar = args?.avatar ?? null;
        this.des = args?.des ?? '';
        this.index = args?.index ?? 0;
        this.slug = args?.slug ?? '';
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }
}

export { Category };
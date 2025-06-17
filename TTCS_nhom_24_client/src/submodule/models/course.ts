import { isObject } from "../utils/validation";
import { Category } from "./category";

class Course {
    id?: string | undefined;
    courseName: string;
    status: number;
    avatar: string | null;
    des: string;
    shortDes: String;
    slug: string;
    idCategory: string | undefined; // danh mục : lớp 1,2,3,...
    category: Category | null;
    idTag: string | undefined; // môn học vd : toán lý hóa ....
    createDate ?: number;
    updateDate ?: number; 

    constructor(args?: any) {
        this.id = args?._id ?? args?.id ?? undefined;
        this.courseName = args?.courseName ?? ''
        this.status = args?.status ?? 0;
        this.avatar = args?.avatar ?? null;
        this.des = args?.des ?? '';
        this.shortDes = args?.shortDes ?? '';
        this.slug = args?.slug ?? '';
        this.idCategory = isObject(args.idCategory) ? new Category(args.idCategory)?.id : (args?.idCategory ?? undefined);
        this.category = isObject(args.idCategory) ? new Category(args.idCategory) : null; 
        this.idTag = args?.idTag ?? undefined;
        this.createDate = args?.createDate ?? undefined; 
        this.updateDate = args?.updateDate ?? undefined;
    }

}

export { Course };
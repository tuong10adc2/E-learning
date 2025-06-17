import TTCSconfig from "../common/config";
import { isObject } from "../utils/validation";
import { Question } from "./question";

class Topic {
  id?: string | undefined;
  name: string;
  status: number;
  idCourse: string;
  topicChild: string[];
  topicChildData: Topic[];
  parentId: string | null;
  type: number; // type = 1 chương trình học , type = 2 đề kiểm tra
  topicType: number | null; // 1 : chuong, 2 : bài tập, 3: đề kiểm tra, 4: video, 5: document
  timeExam?: number; // thời gian làm bài kiểm tra
  video?: string | null; //video bai giang
  timePracticeInVideo?: {
    // thời gian xem video sẽ có bài tập, được chọn nhiều thời gian trong video
    time: number;
    totalQuestion: number;
    idQuestion: string[];
    questionData: Question[];
  }[];
  numQuestion?: number;
  des: string;
  index: number;
  createDate?: number;
  updateDate?: number;

  constructor(args?: any) {
    this.id = args?._id ?? args?.id ?? undefined;
    this.name = args?.name ?? "";
    this.status = args?.status ?? TTCSconfig.STATUS_PUBLIC;
    this.idCourse = args?.idCourse ?? "";
    this.topicChild = args?.topicChild
      ? isObject(args.topicChild[0])
        ? args.topicChild?.map((o: any) => o._id ?? "")
        : args?.topicChild
      : [];
    this.topicChildData = args?.topicChild
      ? isObject(args.topicChild[0])
        ? args.topicChild?.map((o: any) => new Topic(o))
        : []
      : [];
    this.parentId = args?.parentId ?? null;
    this.timePracticeInVideo =
      args?.timePracticeInVideo ? args?.timePracticeInVideo?.map((item: any) => {
        if (isObject(item.idQuestion[0])) {
          return {
            time: item.time,
            totalQuestion: item.totalQuestion,
            questionData: item.idQuestion?.map((o: any) => new Question(o)),
            idQuestion: item.idQuestion.map((o: any) => o._id ?? ""),
          };
        } else
          return {
            time: item.time,
            totalQuestion: item.totalQuestion,
            idQuestion: item.idQuestion,
          };
      }) : [];
    this.type = args?.type ?? 1;
    this.des = args?.des ?? "";
    this.index = args?.index ?? 0;
    this.createDate = args?.createDate ?? undefined;
    this.updateDate = args?.updateDate ?? undefined;
    this.topicType = args?.topicType ?? null;
    this.timeExam = args?.timeExam ?? 0;
    this.numQuestion = args?.numQuestion ?? 0;
    this.video = args?.video ?? null;
  }
}

export { Topic };

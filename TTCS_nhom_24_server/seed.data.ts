import mongoose from "mongoose";
import { UserModel } from "./src/database/users";
import { CategoryModel } from "./src/database/category";
import { TagModel } from "./src/database/tag";
import { CourseModel } from "./src/database/course";
import { TopicModel } from "./src/database/topic";
import { LessonModel } from "./src/database/lesson";
import { QuestionModel } from "./src/database/question";
import { FeedbackModel } from "./src/database/feedback";
import { encodeSHA256Pass } from "./src/submodule/utils/crypto";
import TTCSconfig from "./src/submodule/common/config";

const DB_URL = `mongodb+srv://cms_admin:Cms0123456@cluster0.o54tydp.mongodb.net/`;

async function seedData() {
  try {
    // Kết nối database
    await mongoose.connect(DB_URL, { dbName: "my_db" });
    console.log("✅ Connected to MongoDB");

    // Xóa dữ liệu cũ (nếu có)
    await UserModel.deleteMany({});
    await CategoryModel.deleteMany({});
    await TagModel.deleteMany({});
    await CourseModel.deleteMany({});
    await TopicModel.deleteMany({});
    await LessonModel.deleteMany({});
    await QuestionModel.deleteMany({});
    await FeedbackModel.deleteMany({});
    console.log("🗑️ Cleared existing data");

    // 1. Tạo Categories
    const categories = await CategoryModel.insertMany([
      {
        name: "Lớp 1",
        status: 1,
        avatar: "https://via.placeholder.com/150/FF6B6B/FFFFFF?text=Lớp+1",
        des: "Chương trình học dành cho học sinh lớp 1",
        slug: "lop-1",
        index: 1,
      },
      {
        name: "Lớp 2",
        status: 1,
        avatar: "https://via.placeholder.com/150/4ECDC4/FFFFFF?text=Lớp+2",
        des: "Chương trình học dành cho học sinh lớp 2",
        slug: "lop-2",
        index: 2,
      },
      {
        name: "Lớp 3",
        status: 1,
        avatar: "https://via.placeholder.com/150/45B7D1/FFFFFF?text=Lớp+3",
        des: "Chương trình học dành cho học sinh lớp 3",
        slug: "lop-3",
        index: 3,
      },
      {
        name: "Lớp 4",
        status: 1,
        avatar: "https://via.placeholder.com/150/96CEB4/FFFFFF?text=Lớp+4",
        des: "Chương trình học dành cho học sinh lớp 4",
        slug: "lop-4",
        index: 4,
      },
      {
        name: "Lớp 5",
        status: 1,
        avatar: "https://via.placeholder.com/150/FFEAA7/FFFFFF?text=Lớp+5",
        des: "Chương trình học dành cho học sinh lớp 5",
        slug: "lop-5",
        index: 5,
      },
    ]);
    console.log("✅ Created categories");

    // 2. Tạo Tags
    const tags = await TagModel.insertMany([
      {
        name: "Toán học",
        status: 1,
        idCategory: categories.map((cat) => cat._id),
      },
      {
        name: "Tiếng Việt",
        status: 1,
        idCategory: categories.map((cat) => cat._id),
      },
      {
        name: "Tiếng Anh",
        status: 1,
        idCategory: categories.map((cat) => cat._id),
      },
      {
        name: "Khoa học",
        status: 1,
        idCategory: categories.map((cat) => cat._id),
      },
      {
        name: "Lịch sử",
        status: 1,
        idCategory: categories.map((cat) => cat._id),
      },
    ]);
    console.log("✅ Created tags");

    // 3. Tạo Courses
    const courses = await CourseModel.insertMany([
      {
        courseName: "Toán học lớp 1 - Cơ bản",
        status: 1,
        des: "Khóa học toán học cơ bản dành cho học sinh lớp 1",
        shortDes: "Học toán cơ bản lớp 1",
        slug: "toan-hoc-lop-1-co-ban",
        avatar: "https://via.placeholder.com/300/FF6B6B/FFFFFF?text=Toán+Lớp+1",
        idCategory: categories[0]._id,
        idTag: tags[0]._id,
      },
      {
        courseName: "Tiếng Việt lớp 1 - Tập đọc",
        status: 1,
        des: "Khóa học tập đọc tiếng Việt dành cho học sinh lớp 1",
        shortDes: "Học tập đọc tiếng Việt lớp 1",
        slug: "tieng-viet-lop-1-tap-doc",
        avatar:
          "https://via.placeholder.com/300/4ECDC4/FFFFFF?text=Tiếng+Việt+Lớp+1",
        idCategory: categories[0]._id,
        idTag: tags[1]._id,
      },
      {
        courseName: "Tiếng Anh lớp 2 - Giao tiếp",
        status: 1,
        des: "Khóa học tiếng Anh giao tiếp dành cho học sinh lớp 2",
        shortDes: "Học tiếng Anh giao tiếp lớp 2",
        slug: "tieng-anh-lop-2-giao-tiep",
        avatar:
          "https://via.placeholder.com/300/45B7D1/FFFFFF?text=Tiếng+Anh+Lớp+2",
        idCategory: categories[1]._id,
        idTag: tags[2]._id,
      },
    ]);
    console.log("✅ Created courses");

    // 4. Tạo Topics
    const topics = await TopicModel.insertMany([
      {
        name: "Chương 1: Số tự nhiên",
        status: 1,
        idCourse: courses[0]._id.toString(),
        des: "Học về các số tự nhiên từ 0 đến 10",
        index: 1,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topicType: 1,
        timeExam: 30,
        numQuestion: 10,
      },
      {
        name: "Chương 2: Phép cộng",
        status: 1,
        idCourse: courses[0]._id.toString(),
        des: "Học về phép cộng trong phạm vi 10",
        index: 2,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topicType: 1,
        timeExam: 30,
        numQuestion: 10,
      },
      {
        name: "Bài 1: Bảng chữ cái",
        status: 1,
        idCourse: courses[1]._id.toString(),
        des: "Học bảng chữ cái tiếng Việt",
        index: 1,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topicType: 1,
        timeExam: 20,
        numQuestion: 5,
      },
    ]);
    console.log("✅ Created topics");

    // 5. Tạo Lessons (tạm thời tạo rỗng nếu chưa có dữ liệu cụ thể)
    const lessons = await LessonModel.insertMany([
      {
        status: 1,
        idTopic: topics[0]._id,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        des: "Bài học về số tự nhiên từ 0 đến 5",
        type: 1,
      },
      {
        status: 1,
        idTopic: topics[0]._id,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        des: "Bài học về số tự nhiên từ 6 đến 10",
        type: 1,
      },
      {
        status: 1,
        idTopic: topics[1]._id,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        des: "Bài học về phép cộng với số 1",
        type: 1,
      },
    ]);
    console.log("✅ Created lessons");

    // 6. Tạo Questions (Câu hỏi)
    const questions = await QuestionModel.insertMany([
      {
        question: "Số nào lớn hơn: 3 hay 7?",
        result: [{ index: 1, text: "7" }],
        answer: [
          { index: 1, text: "3", isResult: false },
          { index: 2, text: "7", isResult: true },
        ],
        status: 1,
        idTopic: topics[0]._id,
        hint: "Đếm từ 1 đến 10 để so sánh",
        index: 1,
      },
      {
        question: "2 + 3 = ?",
        result: [{ index: 1, text: "5" }],
        answer: [
          { index: 1, text: "4", isResult: false },
          { index: 2, text: "5", isResult: true },
          { index: 3, text: "6", isResult: false },
        ],
        status: 1,
        idTopic: topics[1]._id,
        hint: "Đếm từ 2 thêm 3 đơn vị",
        index: 1,
      },
      {
        question: "Chữ cái nào đứng đầu bảng chữ cái?",
        result: [{ index: 1, text: "A" }],
        answer: [
          { index: 1, text: "A", isResult: true },
          { index: 2, text: "B", isResult: false },
          { index: 3, text: "C", isResult: false },
        ],
        status: 1,
        idTopic: topics[2]._id,
        hint: "A là chữ cái đầu tiên",
        index: 1,
      },
    ]);
    console.log("✅ Created questions");

    // 7. Tạo Users (Người dùng)
    const users = await UserModel.insertMany([
      {
        account: "admin",
        name: "Administrator",
        email: "admin@ttcs.com",
        password: encodeSHA256Pass("admin", "123456"),
        classNumber: 1,
        phoneNumber: "0123456789",
        address: "Hà Nội, Việt Nam",
        birth: Date.now(),
        gender: 1,
        registerDate: Date.now(),
        status: 1,
        userRole: TTCSconfig.ROLE_ADMIN, // 0 - Admin/Teacher
        lastLogin: Date.now(),
      },
      {
        account: "teacher1",
        name: "Giáo viên Nguyễn Văn A",
        email: "teacher1@ttcs.com",
        password: encodeSHA256Pass("teacher1", "123456"),
        classNumber: 1,
        phoneNumber: "0987654321",
        address: "TP.HCM, Việt Nam",
        birth: Date.now(),
        gender: 1,
        registerDate: Date.now(),
        status: 1,
        userRole: TTCSconfig.ROLE_ADMIN, // 0 - Admin/Teacher
        lastLogin: Date.now(),
      },
      {
        account: "student1",
        name: "Học sinh Trần Thị B",
        email: "student1@ttcs.com",
        password: encodeSHA256Pass("student1", "123456"),
        classNumber: 1,
        phoneNumber: "0369852147",
        address: "Đà Nẵng, Việt Nam",
        birth: Date.now(),
        gender: 0,
        registerDate: Date.now(),
        status: 1,
        userRole: TTCSconfig.ROLE_USER, // 1 - Student/User
        lastLogin: Date.now(),
      },
      {
        account: "student2",
        name: "Học sinh Lê Văn C",
        email: "student2@ttcs.com",
        password: encodeSHA256Pass("student2", "123456"),
        classNumber: 2,
        phoneNumber: "0369852148",
        address: "Huế, Việt Nam",
        birth: Date.now(),
        gender: 1,
        registerDate: Date.now(),
        status: 1,
        userRole: TTCSconfig.ROLE_USER, // 1 - Student/User
        lastLogin: Date.now(),
      },
    ]);
    console.log("✅ Created users");

    // 8. Tạo Feedback (Phản hồi)
    const feedbacks = await FeedbackModel.insertMany([
      {
        name: "Phụ huynh Nguyễn Văn C",
        email: "parent1@email.com",
        phone: "0123456789",
        content: "Khóa học rất hay và bổ ích cho con tôi. Cảm ơn TTCS!",
        status: 1,
      },
      {
        name: "Học sinh Lê Văn D",
        email: "student2@email.com",
        phone: "0987654321",
        content:
          "Tôi rất thích cách giảng dạy của các thầy cô. Bài học rất dễ hiểu.",
        status: 1,
      },
    ]);
    console.log("✅ Created feedbacks");

    console.log("\n🎉 SEED DATA COMPLETED SUCCESSFULLY!");
    console.log("\n📊 Summary:");
    console.log(`- Categories: ${categories.length}`);
    console.log(`- Tags: ${tags.length}`);
    console.log(`- Courses: ${courses.length}`);
    console.log(`- Topics: ${topics.length}`);
    console.log(`- Lessons: ${lessons.length}`);
    console.log(`- Questions: ${questions.length}`);
    console.log(`- Users: ${users.length}`);
    console.log(`- Feedbacks: ${feedbacks.length}`);

    console.log("\n🔑 Default login accounts:");
    console.log("- Admin/Teacher: admin / 123456 (userRole: 0)");
    console.log("- Admin/Teacher: teacher1 / 123456 (userRole: 0)");
    console.log("- Student/User: student1 / 123456 (userRole: 1)");
    console.log("- Student/User: student2 / 123456 (userRole: 1)");

    console.log("\n📋 User Roles:");
    console.log("- userRole: 0 = Admin/Teacher (có quyền quản trị)");
    console.log("- userRole: 1 = Student/User (học sinh)");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Chạy script
seedData();

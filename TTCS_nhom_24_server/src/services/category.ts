import { BadRequestError } from "../common/errors";
import { CategoryModel } from "../database/category";
import { CourseModel } from "../database/course";
import TTCSconfig from "../submodule/common/config";
import { Category } from "../submodule/models/category";

export default class CategoryService {
  // get
  getCategorysByStatus = async (body: {
    status: number;
  }): Promise<Category[]> => {
    try {
      const categorys = await CategoryModel.find({ status: body.status });
      return categorys;
    } catch (error) {
      throw new BadRequestError();
    }
  };

  getCategorysBySlug = async (body: { slug: string }) => {
    try {
      let status = TTCSconfig.STATUS_SUCCESS;
      const categorys = await CategoryModel.findOne({
        slug: body.slug,
        status: TTCSconfig.STATUS_PUBLIC,
      });
      const course = await CourseModel.find({ idCategory: categorys?.id });
      categorys
        ? (status = TTCSconfig.STATUS_SUCCESS)
        : (status = TTCSconfig.RESPONSIVE_NULL);
      return {
        data: {
          categorys,
          course,
        },
        status,
      };
    } catch (error) {
      throw new BadRequestError();
    }
  };
  // update and create
  updateCategory = async (
    body: Category
  ): Promise<{
    data: Category | string;
    status: number;
  }> => {
    if (body?.id) {
      // update
      try {
        const categorys = await CategoryModel.findOneAndUpdate(
          { _id: body?.id },
          {
            $set: {
              ...body,
              updateDate: Date.now(),
            },
          },
          { new: true }
        );
        if (categorys) {
          return {
            data: categorys,
            status: TTCSconfig.STATUS_SUCCESS,
          };
        } else {
          return {
            data: "không tồn tại",
            status: TTCSconfig.STATUS_NO_EXIST,
          };
        }
      } catch (error) {
        throw new BadRequestError();
      }
    } else {
      // create
      try {
        const newUser = await CategoryModel.create({
          ...body,
          createDate: Date.now(),
          updateDate: Date.now(),
        });
        return {
          data: newUser,
          status: TTCSconfig.STATUS_SUCCESS,
        };
      } catch (error) {
        throw new BadRequestError();
      }
    }
  };

  orderCategory = async (payload: {
    indexRange: Array<{
      id: string;
      index: number;
    }>;
    status: number;
  }): Promise<{
    status: number;
    data: any;
  }> => {
    try {
      const loadCategory = await CategoryModel.find({ status: payload.status });

      const categorys = payload.indexRange.map((o) => {
        const data = loadCategory
          .map((o) => new Category(o))
          .find((category) => category.id == o.id);
        if (!data) {
          throw new BadRequestError();
        }
        return data;
      });

      const newCategorys = categorys.map((category) => {
        const indexNew = payload.indexRange.find(
          (o) => o.id == category?.id
        )?.index;
        return {
          ...category,
          index: indexNew,
        };
      });

      const data = await Promise.all(
        newCategorys.map((category) => {
          return CategoryModel.findOneAndUpdate(
            { _id: category?.id },
            {
              $set: {
                ...category,
                updateDate: Date.now(),
              },
            },
            { new: true }
          );
        })
      );
      return {
        status: TTCSconfig.STATUS_SUCCESS,
        data,
      };
    } catch (error) {
      throw new BadRequestError();
    }
  };
}

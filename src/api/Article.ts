import Request from "@/utils/request";
import { Article } from "@/types/article";

// 新增文章
export const addArticleDataAPI = (data: Article) =>
  Request<Article>("POST", "/article", data);

// 删除文章
export const delArticleDataAPI = (id: number) =>
  Request<Article>("DELETE", `/article/${id}`);

// 编辑文章
export const editArticleDataAPI = (data: Article) =>
  Request<Article>("PATCH", "/article", data);

// 获取文章
export const getArticleDataAPI = (id?: number) => Request<Article>("GET", `/article/${id}`)

// 获取文章列表
export const getArticleListAPI = (pagination?: Page) => {
  if (pagination) {
    const { page, size } = pagination
    return Request<Paginate<Article[]>>("GET", `/article?page=${page}&size=${size}`);
  } else {
    return Request<Article[]>("GET", `/article/all`);
  }
};

//Generated by GetCompleteModelInterface
import { ListQuery } from "./interface";

export interface PostBody {
  postID: string;
  userID: string;
  title: string;
  body: string;
}

export interface PostQuery extends ListQuery {}

export interface PostBodyForUpdate extends PostBody {}

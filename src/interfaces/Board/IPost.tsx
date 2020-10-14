import IWriter from 'interfaces/Common/IWriter';
import IComment from 'interfaces/Common/IComment';

export type CategoryType =
  | "tip"
  | "free"
  | "screenshot"
  | "server"
  | "offer"
  | "job";

interface IPost {
  seq?: number,
  category: CategoryType,
  title: string,
  content: string,
  writer: IWriter,
  viewCount?: number,
  commentList?: Array<IComment>,
}

export default  IPost;
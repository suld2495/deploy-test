import { server } from "../../config";
import axios from 'axios';

export interface Post {
  id: string;
  title: string;
  content?: string;
  authorId: string;
}

export const getPosts = async (page: number = 1): Promise<{ posts: Post[], total: number }> => {
  try {
    const response = await axios.get(`${server}/api/posts/${page}`);
    return response.data;
  } catch {
    throw new Error();
  }
};

export const svaePost = async (form: Omit<Post, 'id'>) => {
  await axios.put(`${server}/api/post`, form);
}
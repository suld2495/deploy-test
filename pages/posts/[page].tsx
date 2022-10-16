import type { GetServerSideProps, NextPage } from 'next'
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { getPosts, Post } from '../../services/api/post.api';
import { PER_POST } from '../api/posts/[page]';
import styles from './posts.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  posts: Post[];
  total: number;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { posts, total } = await getPosts(parseInt(context.query.page as string));
  return { props: { posts, total } };
};

const Home: NextPage<Props> = ({ posts, total }) => {
  const router = useRouter();
  const page = parseInt(router.query.page as string, 10);

  const move = (_: React.ChangeEvent<unknown>, value: number) => {
    router.push(String(value));
  }

  return (
    <div className={styles.list}>
      <h1>게시글 리스트</h1>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>작성자</td>
            <td>제목</td>
          </tr>
        </thead>
        <tbody>
          {posts?.length ? posts.map(({ id, title, authorId }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{authorId}</td>
              <td>{title}</td>
            </tr>
          )) : (
            <tr>
              <td colSpan={3}>게시글이 존재하지 않습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
      
      <div className={styles.page}>
        <Pagination count={Math.ceil(total / PER_POST)} page={page}  shape="rounded" onChange={move} />
        <Link href='/insert'>
          <a className={styles.link}>추가</a>
        </Link>
      </div>
    </div>
  )
}

export default Home

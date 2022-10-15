import { useQuery } from '@tanstack/react-query';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import React from 'react';
import { getPosts, Post } from '../services/api/post.api';

interface Props {
  posts: Post[];
  total: number;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { posts, total } = await getPosts();
  return { props: { posts, total } };
};

const Home: NextPage<Props> = ({ posts, total }) => {
  const [page, setPage] = React.useState(1);
  const { data } = useQuery(['list', page], () => getPosts(page), { 
    initialData: () => ({ posts, total }),
    keepPreviousData: true
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>작성자</td>
            <td>제목</td>
          </tr>
        </thead>
        <tbody>
          {data.posts?.length ? data.posts.map(({ id, title, authorId }) => (
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
      
      <div className='paging'>
        <ul>
            <li>{data.total}</li>
        </ul>
      </div>
    </div>
  )
}

export default Home

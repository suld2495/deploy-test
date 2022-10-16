import React from 'react';
import { NextPage } from "next";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useMutation } from "@tanstack/react-query";
import { svaePost } from "../services/api/post.api";
import Router from 'next/router';

const Insert: NextPage = () => {
  const [form, setForm] = React.useState({
    title: '',
    content: '',
    authorId: ''
  });
  const mutation = useMutation(svaePost, {
    onSuccess() {
      Router.push('/posts/1');
    }
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const save = (e: React.FormEvent) => {
    mutation.mutate(form);
    e.preventDefault();
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%', display: 'flex', justifyContent: 'center' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={save}
      >
        <h1>게시글 추가하기</h1>
        <div><TextField label="작성자" variant="outlined" style={{ width: '90%' }} name="authorId" onChange={handleChange} /></div>
        <div><TextField label="제목" variant="outlined" style={{ width: '90%' }} name="title" onChange={handleChange} /></div>
        <div><TextField multiline={true} label="내용" variant="outlined" style={{ width: '90%' }} name="content" onChange={handleChange} /></div>
        <Box
          component="div"
        >
          <Button variant='contained' type="submit">저장</Button>
        </Box>
      </Box>
    </div>
  )
};

export default Insert;
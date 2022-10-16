import type { NextPage } from 'next'
import * as React from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Link href='/posts/1'>게시판 이동하기</Link>
      <br/>
      <Link href='/static/intro'>소개</Link><br/>
      <Link href='/static/intro2'>소개2</Link><br/>
      <Link href='/static/intro3'>소개3</Link><br/>
      <Link href='/static/intro4'>소개4</Link><br/>
      <Link href='/static/intro5'>소개5</Link><br/>
      <Link href='/static/intro6'>소개6</Link><br/>
      <Link href='/static/intro7'>소개7</Link><br/>
      <Link href='/static/intro8'>소개8</Link><br/>
      <Link href='/static/intro9'>소개9</Link><br/>
      <Link href='/static/intro10'>소개10</Link><br/>
      <Link href='/static/intro11'>소개11</Link><br/>
      <Link href='/static/intro12'>소개12</Link><br/>
      <Link href='/static/intro13'>소개13</Link>
    </div>
  )
}

export default Home

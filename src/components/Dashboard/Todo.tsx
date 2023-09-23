import React from 'react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import IntroPic from '@/assets/introPic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Breadcrumbs from '../Breadcrumbs';

const Todo: React.FC = () => {
  return (
    <div className='flex justify-center bg-slate-300 dark:bg-slate-700 h-screen py-8 w-full dark:text-slate-100'>
      <Card className='flex flex-col w-full max-w-4xl border border-slate-500 dark:border dark:border-slate-100 py-8 px-8 space-y-6 dark:bg-slate-900'>
        <div>
          <Breadcrumbs page='Todo' />
        </div>
        <div className='flex flex-col max-w-4xl px-16 space-y-4'>
          <div className='flex justify-center'>
            <img
              src={IntroPic}
              alt='Developer'
              className='flex justify-center items-center w-2/3 h-full'
            />
          </div>
          <Label className='text-2xl font-bold'>Todo App Task</Label>
          <Label className='text-slate-500 text-sm'>By Iman k Arvand</Label>
          <Label className='text-md leading-normal text-justify'>
            I have a Todo App named 'TechInsight', along with this Kanban App
            that you can find on the web, and the code is available on my GitHub
            repository named 'blog-for-ESP.' The Blog App is a web application
            that enables users to read posts from the JsonPlaceHolder API and
            create their own blog posts. It provides a user-friendly interface
            for browsing, searching, deleting, and sorting blog content.
          </Label>
        </div>
        <div className='flex items-center justify-between px-16 py-4'>
          <Button className='text-slate-100 hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://blogforesp.netlify.app/'
            >
              See Todo App
            </a>
          </Button>
          <Button className='flex justify-center items-center text-slate-100 hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'>
            <a
              href='https://github.com/khakiiman/blog-for-ESP'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'
            >
              See Code On &nbsp;{' '}
              <FontAwesomeIcon icon={faGithub} className='h-6' />
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Todo;

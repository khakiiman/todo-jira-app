import React from 'react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import IntroPic from '@/assets/introPic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

import Breadcrumbs from '../Breadcrumbs';

const Todo: React.FC = () => {
  return (
    <div className='flex justify-center md:py-8 w-full min-h-screen bg-slate-300 dark:bg-slate-700 dark:text-slate-100'>
      <Card className='flex flex-col bg-slate-100 rounded-none md:rounded-xl md:justify-between px-8 md:px-0 py-8 md:border md:border-slate-500 md:dark:border md:dark:border-slate-100 dark:bg-slate-900 gap-2 md:gap-0'>
        <div>
          <Breadcrumbs page='Todo' />
        </div>
        <div className='flex flex-col max-w-4xl px-8 md:px-16 space-y-6 md:space-y-4'>
          <div className='flex justify-center'>
            <img
              src={IntroPic}
              alt='Developer'
              className='flex justify-center items-center md:w-2/3 h-full'
            />
          </div>
          <Label className='text-xl md:text-2xl font-bold text-center md:text-left'>Todo App Task</Label>
          <Label className='text-slate-500 text-sm md:text-md text-center md:text-left'>By Iman k Arvand</Label>
          <Label className='leading-normal text-md text-center md:text-left'>
            I have a Todo App named 'TechInsight', along with this Kanban App
            that you can find on the web, and the code is available on my GitHub
            repository named 'blog-for-ESP.' The Blog App is a web application
            that enables users to read posts from the JsonPlaceHolder API and
            create their own blog posts. It provides a user-friendly interface
            for browsing, searching, deleting, and sorting blog content.
          </Label>
        </div>
        <div className='flex items-center justify-between md:px-16 py-6 md:py-4'>
          <Button className='text-slate-100 hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://blogforesp.netlify.app/'
              className='flex items-center'

            >
              See App On &nbsp;<FontAwesomeIcon icon={faLaptop} className='h-6' />
            </a>
          </Button>
          <Button className='flex justify-center items-center text-slate-100 hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'>
            <a
              href='https://github.com/khakiiman/blog-for-ESP'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center'
            >
              See Code On &nbsp;<FontAwesomeIcon icon={faGithub} className='h-6' />
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Todo;

import React from 'react';
import { project } from '../data/issueData';
import { HomeIcon } from '@heroicons/react/20/solid';

const Breadcrumbs: React.FC = () => {
  return (
    <nav className='flex justify-center mb-6 h-9' aria-label='Breadcrumb'>
      <ol
        role='list'
        className='flex space-x-4 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-400 dark:border px-6'
      >
        <li className='flex'>
          <div className='flex items-center'>
            <a href='#' className='text-slate-400 hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-400'>
              <HomeIcon className='h-5 w-5 flex-shrink-0' aria-hidden='true' />
            </a>
          </div>
        </li>
        <li className='flex'>
          <div className='flex items-center'>
            <svg
              className='h-full w-6 flex-shrink-0 text-gray-400'
              viewBox='0 0 24 44'
              preserveAspectRatio='none'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
            </svg>
            <a
              href='#'
              className='ml-4 text-sm font-medium text-slate-400 hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-400'
            >
              Projects
            </a>
          </div>
        </li>

        <li key={project.name} className='flex'>
          <div className='flex items-center'>
            <svg
              className='h-full w-6 flex-shrink-0 text-gray-400'
              viewBox='0 0 24 44'
              preserveAspectRatio='none'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
            </svg>
            <a
              href={project.url}
              className='ml-4 text-sm font-medium text-slate-400 hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-400'
            >
              {project.name}
            </a>
          </div>
        </li>

        <li className='flex'>
        <svg
              className='h-full w-6 flex-shrink-0 text-gray-400'
              viewBox='0 0 24 44'
              preserveAspectRatio='none'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
            </svg>
          <div className='flex items-center ml-4'>
            <a href='#' className='ml-4 text-sm font-medium text-slate-400 hover:text-slate-600 dark:text-slate-50 dark:hover:text-slate-400'>
              Project Details
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

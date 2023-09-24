import {  useSelector } from 'react-redux';
import { HomeIcon } from '@heroicons/react/20/solid';
import { RootState } from '../store/store';
interface BreadcrumbsProps {
  page: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {

  const kenbanState = useSelector((state: RootState) => state.kanban);

  return (
    <nav className='flex justify-center mb-6 h-9' aria-label='Breadcrumb'>
      <ol
        role='list'
        className='flex whitespace-nowrap md:space-x-4 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-400 dark:border px-6'
      >
        <li className='flex'>
          <div className='flex items-center'>
            <a
              href='#'
              className='text-slate-600 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400'
            >
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
              className='ml-2 md:ml-4 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400'
            >
              Projects
            </a>
          </div>
        </li>
        <li key={kenbanState.projectData.name} className='flex'>
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
              href={kenbanState.projectData.url}
              className='ml-2 md:ml-4 text-xs md:text-sm font-medium text-slate-600 hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-400'
            >
              <span className='flex md:hidden'>
                {kenbanState.projectData.name.length > 8
                  ? kenbanState.projectData.name.slice(0, 8) + '...'
                  : kenbanState.projectData.name}
              </span>
              <span className='hidden md:flex'>{kenbanState.projectData.name}</span>
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
          <div className='flex items-center'>
            <a
              href='#'
              className='ml-2 md:ml-4 text-xs md:text-sm font-medium text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-400'
            >
              {props.page}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';
import {
  faBlackboard,
  faTasks,
  faCogs,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { Label } from '../ui/label';
import { Toggle } from '../ui/toggle';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${
        isExpanded ? 'w-64' : 'w-4 md:w-16'
      } flex fixed md:relative flex-col h-screen bg-slate-100 dark:bg-slate-900 transition-all duration-300 ease-in-out z-40`}
    >
      <div
        className={`${
          isExpanded ? '' : ''
        } items-center justify-between relative transition-all duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className={`${
            isExpanded ? 'left-[93%]' : 'md:left-[45px]'
          } flex justify-center items-center w-7 h-7 absolute top-96 border rounded-full transition-all duration-300 ease-in-out text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 focus:outline-none border-slate-900 dark:border-white`}
        >
          {isExpanded ? (
            <FontAwesomeIcon icon={faChevronLeft} className='w-3 h-3' />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} className='w-3 h-3' />
          )}
        </button>
      </div>

      <aside
        id='sidebar'
        className='flex-grow transition-transform'
        aria-label='Sidebar'
      >
        <nav
          className={`${
            isExpanded ? '' : ''
          } flex h-full flex-1 flex-col overflow-y-auto border-r border-slate-900 dark:border-white px-2 py-4 overflow-hidden`}
        >
          <NavLink
            to='/'
            className='flex py-6 px-3 items-center gap-2 transition-all duration-300'
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {theme === 'dark' ? (
              <svg
                height='20'
                preserveAspectRatio='xMidYMid'
                width='20'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 -30.632388516510233 255.324 285.95638851651023'
              >
                <linearGradient id='a'>
                  <stop offset='.18' stopColor='#0F172A' />
                  <stop offset='1' stopColor='#fff' />
                </linearGradient>
                <linearGradient
                  id='b'
                  x1='98.031%'
                  x2='58.888%'
                  xlinkHref='#a'
                  y1='.161%'
                  y2='40.766%'
                />
                <linearGradient
                  id='c'
                  x1='100.665%'
                  x2='55.402%'
                  xlinkHref='#a'
                  y1='.455%'
                  y2='44.727%'
                />
                <path
                  d='M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z'
                  fill='#fff'
                />
                <path
                  d='M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z'
                  fill='url(#b)'
                />
                <path
                  d='M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667z'
                  fill='url(#c)'
                />
              </svg>
            ) : (
              <svg
                height='20'
                preserveAspectRatio='xMidYMid'
                width='20'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                viewBox='0 -30.632388516510233 255.324 285.95638851651023'
              >
                <linearGradient id='a'>
                  <stop offset='.18' stopColor='#fff' />
                  <stop offset='1' stopColor='#0F172A' />
                </linearGradient>
                <linearGradient
                  id='b'
                  x1='98.031%'
                  x2='58.888%'
                  xlinkHref='#a'
                  y1='.161%'
                  y2='40.766%'
                />
                <linearGradient
                  id='c'
                  x1='100.665%'
                  x2='55.402%'
                  xlinkHref='#a'
                  y1='.455%'
                  y2='44.727%'
                />
                <path
                  d='M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z'
                  fill='#0F172A'
                />
                <path
                  d='M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z'
                  fill='url(#b)'
                />
                <path
                  d='M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667z'
                  fill='url(#c)'
                />
              </svg>
            )}
            <span
              className={`${
                isExpanded ? 'ml-3' : 'hidden'
              } flex-1 whitespace-nowrap text-black dark:text-white font-bold text-lg`}
            >
              TodoList App
            </span>
          </NavLink>
          <ul role='list' className='flex flex-1 flex-col gap-y-7'>
            <li>
              <ul className='space-y-2 text-sm font-medium'>
                <li>
                  <NavLink
                    to='/board'
                    className={`flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white dark:hover:bg-slate-700 ${
                      theme === 'light'
                        ? `${
                            location.pathname === '/board'
                              ? `${
                                  isExpanded
                                    ? 'hover:bg-slate-900 bg-slate-700'
                                    : ''
                                } text-white md:hover:bg-slate-900 md:bg-slate-700`
                              : `${
                                  isExpanded
                                    ? 'hover:bg-slate-300 text-slate-900'
                                    : ''
                                } md:hover:bg-slate-300 md:text-slate-900`
                          }`
                        : `${
                            location.pathname === '/board'
                              ? `${
                                  isExpanded ? 'bg-slate-700' : ''
                                } md:bg-slate-700`
                              : `${
                                  isExpanded ? 'text-slate-900' : ''
                                } md:text-slate-900`
                          }`
                    }`}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <FontAwesomeIcon icon={faBlackboard} className='h-5 w-5' />
                    <span
                      className={`${
                        isExpanded ? 'ml-3' : 'hidden'
                      } flex-1 whitespace-nowrap uppercase transition-all duration-300`}
                    >
                      Board
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/settings'
                    className={`flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white dark:hover:bg-slate-700 ${
                      theme === 'light'
                        ? `${
                            location.pathname === '/settings'
                              ? `${
                                  isExpanded
                                    ? 'hover:bg-slate-900 bg-slate-700'
                                    : ''
                                } text-white md:hover:bg-slate-900 md:bg-slate-700`
                              : `${
                                  isExpanded
                                    ? 'hover:bg-slate-300 text-slate-900'
                                    : ''
                                } md:hover:bg-slate-300 md:text-slate-900`
                          }`
                        : `${
                            location.pathname === '/settings'
                              ? `${
                                  isExpanded ? 'bg-slate-700' : ''
                                } md:bg-slate-700`
                              : `${
                                  isExpanded ? 'text-slate-900' : ''
                                } md:text-slate-900`
                          }`
                    }`}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <FontAwesomeIcon icon={faCogs} className='h-5 w-5' />
                    <span
                      className={`${
                        isExpanded ? 'ml-3' : 'hidden'
                      } flex-1 whitespace-nowrap uppercase transition-all duration-300`}
                    >
                      Settings
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/todo'
                    className={`flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white dark:hover:bg-slate-700 ${
                      theme === 'light'
                        ? `${
                            location.pathname === '/todo'
                              ? `${
                                  isExpanded
                                    ? 'hover:bg-slate-900 bg-slate-700'
                                    : ''
                                } text-white md:hover:bg-slate-900 md:bg-slate-700`
                              : `${
                                  isExpanded
                                    ? 'hover:bg-slate-300 text-slate-900'
                                    : ''
                                } md:hover:bg-slate-300 md:text-slate-900`
                          }`
                        : `${
                            location.pathname === '/todo'
                              ? `${
                                  isExpanded ? 'bg-slate-700' : ''
                                } md:bg-slate-700`
                              : `${
                                  isExpanded ? 'text-slate-900' : ''
                                } md:text-slate-900`
                          }`
                    }`}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    <FontAwesomeIcon icon={faTasks} className='h-5 w-5' />
                    <span
                      className={`${
                        isExpanded ? 'ml-3' : 'hidden'
                      } flex-1 whitespace-nowrap uppercase transition-all duration-300`}
                    >
                      Todo
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li
              className={`${
                isExpanded ? 'space-x-4' : 'hidden md:flex'
              } flex items-center justify-center transition-all duration-300`}
            >
              <Label
                className={`${
                  isExpanded ? '' : 'hidden'
                } text-slate-900 dark:text-white uppercase transition-all duration-300`}
              >
                Switch
              </Label>
              <Toggle
                className='flex justify-center items-center dark:text-white transition-all duration-300'
                onClick={() => {
                  if (theme === 'dark') {
                    setTheme('light');
                  } else {
                    setTheme('dark');
                  }
                }}
              >
                {theme === 'light' ? (
                  <Sun className=' text-black h-5 w-5 transition-all duration-300' />
                ) : (
                  <Moon
                    className={`${
                      isExpanded ? '' : ''
                    } h-5 w-5 transition-all duration-300`}
                  />
                )}
              </Toggle>
              <Label
                className={`${
                  isExpanded ? '' : 'hidden'
                } text-slate-900 dark:text-white uppercase transition-all duration-300`}
              >
                Theme
              </Label>
            </li>
            <li className='flex justify-center items-end gap-4 h-full bg-slate-100 dark:bg-slate-900 '>
              <NavLink
                to='/user'
                className={`${
                  isExpanded ? 'px-3' : 'pl-1.5'
                } flex w-full items-center rounded-lg py-2 text-sm font-medium leading-6 text-slate-900  dark:text-white dark:hover:bg-slate-700 ${
                  theme === 'light'
                    ? `${
                        location.pathname === '/user'
                          ? `${
                              isExpanded
                                ? 'hover:bg-slate-900 bg-slate-700'
                                : ''
                            } text-white md:hover:bg-slate-900 md:bg-slate-700`
                          : `${
                              isExpanded
                                ? 'hover:bg-slate-300 text-slate-900'
                                : ''
                            } md:hover:bg-slate-300 md:text-slate-900`
                      }`
                    : `${
                        location.pathname === '/user'
                          ? `${
                              isExpanded ? 'bg-slate-700' : ''
                            } md:bg-slate-700`
                          : `${
                              isExpanded ? 'text-slate-900' : ''
                            } md:text-slate-900`
                      }`
                }`}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <img
                  className='h-8 w-8 rounded-full bg-yellow-500'
                  src='https://joesch.moe/api/v1/jai'
                  alt=''
                />
                <span
                  className={`${
                    isExpanded ? 'ml-3' : 'hidden'
                  } flex-1 whitespace-nowrap uppercase transition-all duration-300`}
                >
                  Iman Arvand
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

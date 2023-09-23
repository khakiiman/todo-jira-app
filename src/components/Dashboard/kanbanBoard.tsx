import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToast } from '../ui/use-toast';
import { changeSearchTerm } from '../../store/kanbanSlice';
import { Button } from '../../../@/components/ui/button';
import { Input } from '../../../@/components/ui/input';
import { Card } from '../ui/card';
import Breadcrumbs from '../Breadcrumbs';
import NewIssueModal from '../NewIssueModal';
import IssueList from './IssueList';
import '../../../node_modules/react-quill/dist/quill.snow.css';

const KanbanBoard: React.FC = () => {
  const { toast } = useToast();
  const [filterValue, setFilteredValue] = useState('');
  const [isModelOpen, setModalState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(changeSearchTerm(filterValue));
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [dispatch, filterValue]);

  return (
    <div className='flex w-full h-screen py-8 px-8 dark:text-white justify-center bg-slate-300 dark:bg-slate-700'>
      <Card className='w-full border border-slate-500 dark:border dark:border-slate-100 px-8 py-8 space-y-10 overflow-y-scroll scrollbar-hide'>
        <Breadcrumbs page='Kanban Board' />
        <h1 className='text-2xl font-bold capitalize dark:text-gray-300'>
          Kanban Board
        </h1>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Input
              type='search'
              className='px-2 py-2 w-[230px] border border-slate-400 dark:border dark:border-slate-400'
              placeholder='Search Issues...'
              value={filterValue}
              onChange={(event) => {
                setFilteredValue(event.target.value);
              }}
            />
            <Button
              type='submit'
              className='text-white hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'
              onClick={() => {
                toast({
                  title: 'Not implemented yet!',
                  description: 'So Sorry! 😥',
                });
              }}
            >
              Only My Issues
            </Button>
            <Button
              type='submit'
              className='text-white hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'
              onClick={() => {
                toast({
                  title: 'Not implemented yet!',
                  description: 'So Sorry! 😥',
                });
              }}
            >
              Recently Updated
            </Button>
          </div>
          <Button
            type='submit'
            className='text-white hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'
            onClick={() => {
              setModalState(true);
            }}
          >
            Create New Issue
          </Button>
        </div>
  
        {/* issue list component */}
        <IssueList />

        {/* new issue modal */}
        <NewIssueModal />
      </Card>
    </div>
  );
};

export default KanbanBoard;

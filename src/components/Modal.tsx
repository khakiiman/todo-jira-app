// imported packages
import React from 'react';
// import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';

// imported icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
  faBook,
  faExclamationCircle,
  faDownLong,
  faUpLong,
} from '@fortawesome/free-solid-svg-icons';

// imported components
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../components/ui/use-toast';
import { Label } from './ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../components/ui/dialog';
import {
  Form,
  FormLabel,
  FormField,
  FormControl,
  FormDescription,
  FormItem,
} from '../components/ui/form';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';

// imported styles
import '../../node_modules/react-quill/dist/quill.snow.css';

// imported store files
import { RootState } from '../store/store';
import { updateIssueData, deleteIssue } from '../store/kanbanSlice';

// imported models
import { IssueSchema } from '../models/Issue';
import type { Issue } from '../models/Issue';

// types
type ModalProps = {
  issueData: Issue;
  show: boolean;
  close: () => void;
};

const ModalComponent: React.FC<ModalProps> = (props) => {
  const overlay = document.getElementById('overlays');
  // state handlers
  const { toast } = useToast();
  const dispatch = useDispatch();
  const kanbanState = useSelector((state: RootState) => state.kanban);

  const form = useForm<Issue>({
    resolver: zodResolver(IssueSchema),
    values: props.issueData,
  });

  const issueTypeToButtonVariant: any = {
    task: 'primary',
    story: 'tertiary',
    bug: 'destructive',
  };
  const priorityNumberToLevel: any = {
    '1': 'Highest',
    '2': 'High',
    '3': 'Medium',
    '4': 'Low',
    '5': 'Lowest',
  };
  const priorityNumberToButtonVariant: any = {
    '1': 'destructive',
    '2': 'destructive',
    '3': 'secondary',
    '4': 'tertiary',
    '5': 'tertiary',
  };
  const findUserImageURL = (userName: string) => {
    const user = kanbanState.user.find((user) => user.name === userName);
    return user ? user.avatarUrl : '';
  };

  const onSubmit: SubmitHandler<Issue> = () => {
    dispatch(updateIssueData(form.getValues()));
    toast({
      title: 'Issue has been edited successfully',
      description: new Date().toLocaleString(),
    });
    props.close();
    // console.log('form.getValues()', form.getValues());
  };

  return (
    <>
      {overlay &&
        ReactDOM.createPortal(
          <Dialog open={props.show}>
            <DialogContent className='text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 sm:max-w-lg'>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='flex flex-col justify-center gap-6 w-full h-min-screen text-slate-900 dark:text-slate-100'
                >
                  <DialogHeader className='flex gap-2'>
                    <DialogTitle>Edit Issue</DialogTitle>
                    <DialogDescription>
                      You can Edit issue in this dialog.
                    </DialogDescription>
                    <div className='flex items-center justify-between'>
                      <div className='flex flex-col justify-center gap-2 space-y-4'>
                        <div className='flex items-center gap-2'>
                          <Label className='font-bold'>Issue Type:</Label>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button
                                variant={
                                  issueTypeToButtonVariant[form.watch('type')]
                                }
                                className='h-10'
                              >
                                {form.watch('type').toUpperCase()}-
                                {form.watch('id')}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem
                                className='flex gap-2'
                                onClick={() => {
                                  form.setValue('type', 'task');
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faCheckSquare}
                                  color='deepskyblue'
                                />
                                <span>TASK</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className='flex gap-2'
                                onClick={() => {
                                  form.setValue('type', 'story');
                                }}
                              >
                                <FontAwesomeIcon icon={faBook} color='green' />
                                <span>STORY</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className='flex gap-2'
                                onClick={() => {
                                  form.setValue('type', 'bug');
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faExclamationCircle}
                                  color='red'
                                />
                                <span>BUG</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Label className='font-bold'>Priority Level:</Label>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button
                                className='h-10 flex items-center gap-2'
                                variant={
                                  priorityNumberToButtonVariant[
                                    form.watch('priority')
                                  ]
                                }
                              >
                                <span className='text-md uppercase'>
                                  {form.watch('priority') === '1'
                                    ? priorityNumberToLevel['1']
                                    : form.watch('priority') === '2'
                                    ? priorityNumberToLevel['2']
                                    : form.watch('priority') === '3'
                                    ? priorityNumberToLevel['3']
                                    : form.watch('priority') === '4'
                                    ? priorityNumberToLevel['4']
                                    : form.watch('priority') === '5'
                                    ? priorityNumberToLevel['5']
                                    : ''}
                                </span>
                                <FontAwesomeIcon
                                  icon={
                                    form.watch('priority') === '1' ||
                                    form.watch('priority') === '2' ||
                                    form.watch('priority') === '3'
                                      ? faUpLong
                                      : faDownLong
                                  }
                                />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuItem
                                className='flex gap-2'
                                onClick={() => {
                                  form.setValue('priority', '1');
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faUpLong}
                                  color='#ef4444'
                                />
                                <span>Highest</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className='flex gap-2'
                                onClick={() => {
                                  form.setValue('priority', '2');
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faUpLong}
                                  color='#ef4444'
                                />
                                <span>High</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className='flex gap-2'
                                onClick={() => {
                                  form.setValue('priority', '3');
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faUpLong}
                                  color='#d97706'
                                />
                                <span>Medium</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className='flex gap-2'
                                onClick={() => {
                                  form.setValue('priority', '4');
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faDownLong}
                                  color='#22c55e'
                                />
                                <span>Low</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className='flex gap-2'
                                onClick={() => {
                                  form.setValue('priority', '5');
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faDownLong}
                                  color='#22c55e'
                                />
                                <span>Lowest</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div className='flex flex-col justify-center gap-2 space-y-4'>
                        <div className='flex items-center gap-2'>
                          <Label className='font-bold'>Reporter:</Label>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button
                                variant='outline'
                                className='h-10 border border-slate-400'
                              >
                                {form.watch('reporter') && (
                                  <img
                                    className='rounded-full'
                                    src={findUserImageURL(
                                      form.watch('reporter')
                                    )}
                                    width='32px'
                                    height='32px'
                                  />
                                )}
                                {form.watch('reporter')}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              {kanbanState.user.map((user, index) => (
                                <DropdownMenuItem
                                  onClick={() => {
                                    form.setValue('reporter', user.name);
                                  }}
                                  className='flex items-center gap-2 border-slate-400'
                                  key={index}
                                >
                                  <img
                                    className='rounded-full'
                                    src={user.avatarUrl}
                                    width='32px'
                                    height='32px'
                                  />
                                  <Label>{user.name}</Label>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Label className='font-bold'>Assignee:</Label>
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <Button
                                variant='outline'
                                className='h-10 border border-slate-400'
                              >
                                {form.watch('assignee') && (
                                  <img
                                    className='rounded-full'
                                    src={findUserImageURL(
                                      form.watch('assignee')
                                    )}
                                    width='32px'
                                    height='32px'
                                  />
                                )}
                                {form.watch('assignee')}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              {kanbanState.user.map((user, index) => (
                                <DropdownMenuItem
                                  onClick={() => {
                                    form.setValue('assignee', user.name);
                                  }}
                                  className='flex items-center gap-2 border-slate-400'
                                  key={index}
                                >
                                  <img
                                    className='rounded-full'
                                    src={user.avatarUrl}
                                    width='32px'
                                    height='32px'
                                  />
                                  <Label>{user.name}</Label>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className='flex flex-col w-full space-y-4 '>
                    <FormField
                      control={form.control}
                      name='title'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='capitalize font-bold'>
                            Issue Title
                          </FormLabel>
                          <FormControl className='mt-4'>
                            <Input
                              {...field}
                              className='border-slate-400'
                              defaultValue={props.issueData?.title}
                            />
                          </FormControl>
                          <FormDescription>
                            Concisely summarize the issue in one or two
                            sentences.
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='description'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='capitalize font-bold'>
                            Project Description
                          </FormLabel>
                          <FormControl className=''>
                            <ReactQuill
                              theme='snow'
                              className='border-slate-400 pb-4'
                              {...field}
                              defaultValue={props.issueData?.description}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogFooter className='flex gap-2'>
                    <Button
                      variant='destructive'
                      type='button'
                      onClick={() => {
                        dispatch(deleteIssue(props.issueData?.id));
                        props.close();
                      }}
                    >
                      Delete Issue
                    </Button>
                    <Button type='submit'>Save Changes</Button>
                    <Button
                      type='button'
                      onClick={() => {
                        props.close();
                      }}
                    >
                      Close
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>,
          overlay
        )}
    </>
  );
};

export default ModalComponent;

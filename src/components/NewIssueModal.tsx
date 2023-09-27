// imported packages
import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';

// imported components and types
import { useToast } from '../components/ui/use-toast';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from '../components/ui/select';
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
  FormMessage,
} from '../components/ui/form';

// store files
import { RootState } from '../store/store';
import { addNewIssue } from '../store/kanbanSlice';
// models
import { IssueSchema } from '../models/Issue';
import type { Issue } from '../models/Issue';

//styles
// import '../styles/quill.snow.css';

interface NewIssueModalProps {
  show: boolean;
  close: () => void;
}

const initialState: Issue = {
  id: Math.floor(Math.random() * 1000000),
  type: '',
  reporter: '',
  assignee: '',
  priority: '',
  description: '',
  title: '',
  status: 'Backlog',
  userIds: [],
};

const NewIssueModal: React.FC<NewIssueModalProps> = (props) => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const kanbanState = useSelector((state: RootState) => state.kanban);

  const overlay = document.getElementById('overlays');
  const typeOptions = [
    { value: 'Task', label: 'Task' },
    { value: 'Bug', label: 'Bug' },
    { value: 'Story', label: 'Story' },
  ];
  const priorityOptions = [
    { value: 'Highest', label: 'Highest' },
    { value: 'High', label: 'High' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Low', label: 'Low' },
    { value: 'Lowest', label: 'Lowest' },
  ];

  const form = useForm<Issue>({
    resolver: zodResolver(IssueSchema),
    defaultValues: initialState,
  });

  const onSubmit: SubmitHandler<Issue> = () => {
    dispatch(addNewIssue(form.getValues()));
    toast({
      title: 'New Issue has been added successfully',
      description: new Date().toLocaleString(),
    });
    props.close();
    console.log('form.getValues()', form.getValues());
  };

  return (
    <>
      {overlay &&
        ReactDOM.createPortal(
          <Dialog open={props.show}>
            <DialogContent className='text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 sm:max-w-lg'>
              <DialogHeader>
                <DialogTitle>Create New Issue</DialogTitle>
                <DialogDescription>
                  You can create new issues in this dialog.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='flex flex-col justify-center gap-6 w-full h-min-screen'
                >
                  <div className='flex flex-col w-full space-y-4 '>
                    <FormField
                      control={form.control}
                      name='type'
                      render={({ field }) => (
                        <FormItem className='md:mt-0'>
                          <FormLabel className='capitalize font-bold'>
                            Issue Type
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select project category' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {typeOptions.map((option, index) => (
                                <SelectItem
                                  className='border-slate-400'
                                  value={option.value}
                                  key={index}
                                >
                                  {option.value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='title'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='capitalize font-bold'>
                            Short Summary
                          </FormLabel>
                          <FormControl className='mt-4'>
                            <Input
                              placeholder='Enter Issue Title'
                              {...field}
                              className='border-slate-400'
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
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='reporter'
                      render={({ field }) => (
                        <FormItem className='mt-4 md:mt-0'>
                          <FormLabel className='capitalize font-bold'>
                            Reporter
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select project category' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {kanbanState.user.map((user, index) => (
                                <SelectItem
                                  className='border-slate-400'
                                  value={user.name}
                                  key={index}
                                >
                                  {user.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='assignee'
                      render={({ field }) => (
                        <FormItem className='mt-4 md:mt-0'>
                          <FormLabel className='capitalize font-bold'>
                            Assignee
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select project category' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {kanbanState.user.map((user, index) => (
                                <SelectItem
                                  className='border-slate-400'
                                  value={user.name}
                                  key={index}
                                >
                                  {user.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='priority'
                      render={({ field }) => (
                        <FormItem className='mt-4 md:mt-0'>
                          <FormLabel className='capitalize font-bold'>
                            Priority
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder='Select Priority Level' />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {priorityOptions.map((option, index) => (
                                <SelectItem
                                  className='border-slate-400'
                                  value={option.value}
                                  key={index}
                                >
                                  {option.value}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <DialogFooter className='flex gap-2'>
                    <Button type='submit'>Add Issue to Board</Button>
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

export default NewIssueModal;

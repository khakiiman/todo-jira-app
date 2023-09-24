import React from 'react';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormDescription,
  FormMessage,
} from '../ui/form';
import { useToast } from '../ui/use-toast';

import { ProjectFormSchema } from '../../models/Project';
import type { ProjectForm } from '../../models/Project';
import { RootState } from '../../store/store';
import { updateProjectData } from '../../store/kanbanSlice';
import Breadcrumbs from '../Breadcrumbs';

import '../../../node_modules/react-quill/dist/quill.snow.css';

const options = [
  { value: 'Software', label: 'Software' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Business', label: 'Business' },
];

const ProjectSettings: React.FC = () => {
  const { toast } = useToast();

  const dispatch = useDispatch();

  const kenbanState = useSelector((state: RootState) => state.kanban);

  const form = useForm<ProjectForm>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: kenbanState.projectData,
  });

  const onSubmit: SubmitHandler<ProjectForm> = () => {
    dispatch(updateProjectData(form.getValues()));
    console.log(form.getValues());
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex justify-center md:py-8 w-full h-min-screen px-24 bg-slate-300 dark:bg-slate-700 dark:text-slate-100'
      >
        <Card className='flex flex-col rounded-none md:rounded-xl py-4 px-8 md:border md:border-slate-500 md:dark:border md:dark:border-slate-100 gap-8 bg-slate-100 dark:bg-slate-900'>
          <div>
            <Breadcrumbs page='Project Details' />
          </div>
          <FormLabel className='text-2xl font-bold capitalize dark:text-gray-300'>
            <h2 className='capitalize'>Project Details</h2>
          </FormLabel>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='capitalize'>Project Name</FormLabel>
                <FormControl className='mt-4'>
                  <Input
                    placeholder='Enter Project Name'
                    {...field}
                    className='border-slate-400'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='url'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='capitalize'>Project URL</FormLabel>
                <FormControl className=''>
                  <Input
                    placeholder='Enter Project URL'
                    {...field}
                    className='border-slate-400'
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='capitalize'>
                  Project Description
                </FormLabel>
                <FormControl className=''>
                  <ReactQuill
                    theme='snow'
                    style={{ height: '8rem' }}
                    className='border-slate-400 pb-4'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='category'
            render={({ field }) => (
              <FormItem className='mt-10 md:mt-0'>
                <FormLabel>Category</FormLabel>
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
                    {options.map((option, index) => (
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
                <FormDescription>
                  You can select desired category for your project
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-center items-center'>
            <Button
              type='submit'
              className='flex justify-center items-center text-white hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'
              onClick={() => {
                toast({
                  title: 'Project settings updated successfully',
                  description: new Date().toLocaleString(),
                });
              }}
            >
              Save Changes
            </Button>
          </div>
        </Card>
      </form>
    </Form>
  );
};

export default ProjectSettings;

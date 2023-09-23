import React from 'react';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../@/components/ui/button';
import { Input } from '../../../@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../@/components/ui/select';
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormDescription,
  FormMessage,
} from '../../../@/components/ui/form';
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
    <div className='flex justify-center bg-slate-100 dark:bg-slate-900 w-full h-screen'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='py-8 px-16 max-w-4xl w-full space-y-10 dark:text-white'
        >
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
                    style={{ height: '10rem' }}
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
              <FormItem>
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
          <Button
            type='submit'
            className='mt-[1rem] text-white hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'
            onClick={() => {
              toast({
                title: 'Project settings updated successfully',
                description: new Date().toLocaleString(),
              });
            }}
          >
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProjectSettings;

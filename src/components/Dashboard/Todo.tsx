import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import Breadcrumbs from '../Breadcrumbs';

function Todo() {
  return (
    <div className='flex justify-center bg-slate-300 dark:bg-slate-700 h-screen py-8 w-full dark:text-slate-100'>
      <Card className='flex flex-col w-full max-w-4xl border border-slate-500 dark:border dark:border-slate-100 py-8 px-8 space-y-6 dark:bg-slate-900'>
        <div>
          <Breadcrumbs page='Todo' />
        </div>
        <span className='text-center'>Todo</span>
      </Card>
    </div>
  );
}

export default Todo;

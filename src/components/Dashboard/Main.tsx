import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import DeveloperImage from '@/assets/me.jpg'; // Import your developer image

function Main() {
  return (
    <div className='flex justify-center bg-slate-300 dark:bg-slate-700 h-screen py-8 w-full dark:text-white'>
      <Card className='flex flex-col max-w-xl border border-slate-500 dark:border dark:border-slate-100 py-4 px-8 space-y-6 dark:bg-slate-900'>
        <div className='text-center'>
          <img
            src={DeveloperImage}
            alt='Developer'
            className='w-40 h-[145px] rounded-full mx-auto mb-2'
          />
        </div>
        <Label className='pt-4 text-2xl font-bold'>Iman K. Arvand</Label>
        <Label className='text-slate-500 text-sm'>Frontend Developer</Label>
        <Label className='text-md leading-normal text-justify'>
          Hi, I'm Iman K. Arvand, the developer behind this TodoList app. I'm
          passionate about web development and have a strong interest in modern
          technologies like react, next, typescript and tailwindcss.
        </Label>
        <Label className='text-md leading-normal text-justify'>
          My goal is to create user-friendly and efficient web applications. I'm
          constantly learning and exploring new tools and techniques to improve
          my skills.
        </Label>
        <Label className='text-md leading-normal text-justify'>
          If you have any questions, suggestions, or just want to say hello,
          please feel free to reach out to me. You can contact me via email at
          ikhaki71@gmail.com.
        </Label>
        <Button
          className='text-white hover:bg-slate-900 bg-slate-700 dark:text-slate-900 dark:bg-slate-100 dark:hover:bg-slate-300'
          onClick={() => window.open('mailto:ikhaki71@gmail.com')}
        >
          Contact Developer
        </Button>
        <Label className='text-gray-500 text-sm'>
          Disclaimer: This developer profile is for demonstration purposes only.
        </Label>
      </Card>
    </div>
  );
}

export default Main;

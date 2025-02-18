import { CodeBlock } from '@/components/internal/code-block';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/internal/tabs';

import { Button } from './button';

export const Colors = () => {
  const sample = `
    const App = () => (
      <div>
        <Button>Primary</Button>
        <Button variant='success'>Success</Button>
        <Button variant='gray'>Gray</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='warn'>Warning</Button>
        <Button variant='destructive'>Destructive</Button>
      </div>
    ) 
  `;

  return (
    <div>
      <h1 className='text-xl font-semibold mt-10 mb-5 text-dark font-jakarta dark:text-white'>
        Colors
      </h1>

      <Tabs defaultValue='preview'>
        <TabsList>
          <TabsTrigger value='preview'>Preview</TabsTrigger>
          <TabsTrigger value='code'>Code</TabsTrigger>
        </TabsList>

        <div>
          <TabsContent value='preview'>
            <div className='border w-full max-w-3xl dark:border-white/50 border-dark/20 pl-10 rounded-2xl min-h-24 gap-5 flex items-center mt-5'>
              <Button>Primary</Button>
              <Button variant='success'>Success</Button>
              <Button variant='gray'>Gray</Button>
              <Button variant='outline'>Outline</Button>
              <Button variant='warn'>Warning</Button>
              <Button variant='destructive'>Destructive</Button>
            </div>
          </TabsContent>
          <TabsContent value='code' className='mt-5'>
            <CodeBlock codeBlock={sample} language='jsx' />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

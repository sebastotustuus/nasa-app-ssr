import ListImages from '@/containers/ListImages/ListImages';
import AccordionFilters from '@/containers/AccordionFilters/Accordion';
import Loading from '@/app/loading';
import { Suspense } from 'react';

const list = [
  { url: 'https://source.unsplash.com/random/1' },
  { url: 'https://source.unsplash.com/random/2' },
  { url: 'https://source.unsplash.com/random/3' },
  { url: 'https://source.unsplash.com/random/4' },
  { url: 'https://source.unsplash.com/random/5' },
  { url: 'https://source.unsplash.com/random/6' },
  { url: 'https://source.unsplash.com/random/7' },
  { url: 'https://source.unsplash.com/random/8' },
  { url: 'https://source.unsplash.com/random/9' },
  { url: 'https://source.unsplash.com/random/10' },
  { url: 'https://source.unsplash.com/random/11' },
  { url: 'https://source.unsplash.com/random/12' },
  { url: 'https://source.unsplash.com/random/13' },
  { url: 'https://source.unsplash.com/random/14' },
  { url: 'https://source.unsplash.com/random/15' },
  { url: 'https://source.unsplash.com/random/16' },
  { url: 'https://source.unsplash.com/random/17' },
  { url: 'https://source.unsplash.com/random/18' },
  { url: 'https://source.unsplash.com/random/19' },
  { url: 'https://source.unsplash.com/random/20' }
];
export default function Home() {
  return (
    <>
      <AccordionFilters />
      <Suspense fallback={<Loading />}>
        <ListImages listImages={list} />
      </Suspense>
    </>
  );
}

import HeaderBar from '@/components/HeaderBar/HeaderBar';
import MainContainer from '@/containers/Main/main';
import AccordionFilters from '@/containers/AccordionFilters/Accordion';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import ListImages from '@/containers/ListImages/ListImages';

const list = [
  { url: 'https://source.unsplash.com/random/1' },
  { url: 'https://source.unsplash.com/random/2' },
  { url: 'https://source.unsplash.com/random/3' },
  { url: 'https://source.unsplash.com/random/4' }
];
export default function FavouritesPage() {
  return (
    <>
      <MainContainer>
        <ListImages listImages={list} />
      </MainContainer>
    </>
  );
}

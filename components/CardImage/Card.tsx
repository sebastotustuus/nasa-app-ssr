import './style.css';
import { CardProps } from '@/components/CardImage/interfaces';

const random: string = 'https://source.unsplash.com/random/1';
const MainContainer = ({ url }: CardProps) => {
  return (
    <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20 card_image">
      <img className="w-full rounded-md" src={url ?? random} alt="image" />
      <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
        <div className="relative">
          <a
            className="test__link absolute inset-0"
            target="_blank"
            href="/"
          ></a>
          <h1 className="test__title text-3xl font-bold mb-3">Title post</h1>
          <p className="test__author font-sm font-light">Author</p>
        </div>
        <div className="mt-auto">
          <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
            #tag
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

import './style.css';
import { CardProps } from '@/components/Cards/interfaces';

const random: string = 'https://source.unsplash.com/random/1';
const CardImage = ({ url }: CardProps) => {
  return (
    <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20 card_image">
      <img className="w-full rounded-md" src={url ?? random} alt="image" />
      <div className="absolute inset-0 p-8 text-white flex flex-col">
        <div className="relative">
          <h1 className="text-3xl font-bold mb-3">Title post</h1>
          <p className="font-sm font-light">Author</p>
        </div>
      </div>
    </div>
  );
};

export default CardImage;

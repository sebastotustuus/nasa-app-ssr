import './style.css';
import Card from '@/components/Cards/CardImage';
import { ListImagesProps } from '@/containers/ListImages/interfaces';

const delay = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

const ListImages = async ({ listImages }: ListImagesProps) => {
  await delay();
  return (
    <div className="basis-3/4 columns-2 md:columns-4">
      {listImages.map((img) => (
        <Card url={img.url} />
      ))}
    </div>
  );
};

export default ListImages;

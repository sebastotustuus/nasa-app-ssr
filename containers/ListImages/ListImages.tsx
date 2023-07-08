import "./style.css"
import Card from "@/components/CardImage/Card";
import {ListImagesProps} from "@/containers/ListImages/interfaces";
const ListImages = ({
    listImages,
}: ListImagesProps) => {
    return (
        <div className="columns-2 md:columns-4">
            {listImages.map(img=> <Card url={img.url} />)}
        </div>
    )
}

export default ListImages
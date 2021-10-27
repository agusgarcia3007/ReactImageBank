import React from 'react';
import Img from './Img';
import { BarLoader } from 'react-spinners';

const ImgList = ({images}) => {

    if(typeof(images) == 'undefined' || images == null) return <BarLoader size={150} />;
    return ( 
        <div className="col-12 p-5 row " >
            {images.map(image => (
                <Img 
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
     );
}
 
export default ImgList;
import React from 'react';
import Img from './Img';

const ImgList = ({images}) => {
    return ( 
        <div className="col-12 p-5 row">
            {images.map(img => (
                <Img />
            ))}
        </div>
     );
}
 
export default ImgList;
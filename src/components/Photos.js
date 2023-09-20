import React from 'react';
import PropTypes from 'prop-types';
import photosData from '../data/photos';

function Photos() {
    return (
        <div>
            {photosData.slice(0, 10).map(photo => (
                <Photo key={photo.id} id={photo.id} title={photo.title} url={photo.url} />
            ))}
        </div>
    );
}

function Photo({ id, title, url }) {
    return (
        <div>
            <p className="photo-title">{id}. {title}</p>
            <img src={url} alt={title} />
        </div>
    );
}

Photo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default Photos;
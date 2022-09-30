import React from 'react';

const Card = ({hot}) => {
    return (
      <>
        <div className="card">
          <img src={hot.image} className="card-img-top img-fluid"  alt="..." />
          <div className="card-body">
            <h5 className="card-title">{hot.name}</h5>
            <p className="card-text">
              {hot.size}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </>
    );
};

export default Card;
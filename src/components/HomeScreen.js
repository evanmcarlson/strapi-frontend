import React from 'react';

function HomeScreen(props) {
  const {content} = props;
  return (
    <div>
      {content.map((piece, index) => (
        <>
          <h3>{piece.name}</h3>
          <p>{piece.location}</p>
        </>
      ))}
    </div>
  );
}

export default HomeScreen;
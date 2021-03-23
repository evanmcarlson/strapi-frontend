import React from 'react';

function HomeScreen(props) {
  const {content} = props;
  return (
    <div className="HomeScreen">
      {content.map((piece, index) => (
        <>
          <h3>{piece.title}</h3>
          <p>{piece.description}</p>
        </>
      ))}
    </div>
  );
}

export default HomeScreen;
import React from 'react';

function ToolsScreen(props) {
  const {content} = props;
  let url = '/tools/';
  return (
    <div>
      {content.map((piece, index) => (
        <>
          <h3>{piece.name}</h3>
          <p>{piece.location}</p>
          <a href={url + piece.id}>Learn more</a>
        </>
      ))}
    </div>
  );
}

export default ToolsScreen;
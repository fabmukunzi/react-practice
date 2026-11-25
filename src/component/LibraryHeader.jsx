import React from 'react';

function LibraryHeader() {
  const libraryHeader = 'Library management system';
  return (
    <div>
      <header>
        <h1>{libraryHeader}</h1>
        <p>This is a library system that will help you to manage the books</p>
      </header>
    </div>
  );
}

export default LibraryHeader;

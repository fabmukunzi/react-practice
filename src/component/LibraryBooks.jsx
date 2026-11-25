import React from 'react';
import LibraryCards from './LibraryCards';

function LibraryBooks() {
    const books=[
        {code:"WEB 001",name:"Full stack Development",price:100},
        {code:"SOD 001",name:"Software Development",price:90},
        {code:"SOE 001",name:"Software Engineering",price:50},
    ]
    const totalPrice=books.reduce((a,b)=>a + b.price,0);
    console.log(totalPrice)
  return (
    <div>
      <ul>
        {books.map(book=><LibraryCards bookInfo={book} />)}
      </ul>
      <div>Total price for 3 books is {totalPrice}</div>
    </div>
  );
}

export default LibraryBooks;

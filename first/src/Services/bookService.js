
import Science from '../Images/blog1.png';
import HTML from '../Images/html.png';
import CSS from '../Images/css.png';
import JavaScript from '../Images/javascript.png';
import java from '../Images/java.png';
import leadership from '../Images/leadership.png';
import psychology from '../Images/pychology.png';






// src/Services/bookService.js
const booksData = [
    { id: 1, title: "JavaScript Book", author: "Ahmed Jamac", description: "JavaScript is a high-level programming language used to create  on websites.",year: "2020" ,pages:"1500",price:"$ 25",image: JavaScript },
    { id: 2, title: "CSS Book", author: "Adnan Said", description: "CSS is a stylesheet language used to describe the presentation of web pages." ,year: "2021",pages:"1600" ,price:"$ 20",image: CSS},
    { id: 3, title: "HTML Book", author: "F. Scott Fitzgerald", description: "HTML is a hypertext language used to build the structure of web pages." ,year: "2023" ,pages:"1000" ,price:"$ 15" ,image: HTML},
    { id: 4, title: "Java Book", author: "F. Scott Fitzgerald", description: "HTML is a hypertext language used to build the structure of web pages." ,year: "2023" ,pages:"1000" ,price:"$ 15" ,image: java},
    { id: 5, title: "Leadership Book", author: "F. Scott Fitzgerald", description: "HTML is a hypertext language used to build the structure of web pages." ,year: "2023" ,pages:"1000" ,price:"$ 15" ,image: leadership},
    { id: 6, title: "psychology Book", author: "F. Scott Fitzgerald", description: "HTML is a hypertext language used to build the structure of web pages." ,year: "2023" ,pages:"1000" ,price:"$ 15",image: psychology},
     // Image path or URL
  ];
  
  export const getBooks = () => {
    return Promise.resolve(booksData); // Simulate an async call
  };
  
  export const getBookById  = (id) => {
    const book = booksData.find(book => book.id === parseInt(id));
    return Promise.resolve(book ? book : null);  // Ensure null is returned if no book is found
  };
  
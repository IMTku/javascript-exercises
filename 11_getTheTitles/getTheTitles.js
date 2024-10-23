/*# Exercise 11 - Get the Titles!

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```
```javascript
getTheTitles(books) // ['Book','Book2']
```
## Hints
- You should use a built-in javascript method to do most of the work for you! */

const getTheTitles = function(objects) {
    let title=[];
    for(item of objects){
        title.push(item.title) 
    }
    return title;
};
/*return array.map((book) => book.title);
};*/ 

// Do not edit below this line
module.exports = getTheTitles;

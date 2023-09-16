
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {
const [bookMarks, setBookMarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);
const handleMarkAsRead = (id, time) =>{
  setReadingTime(readingTime + time);
  const remainingBookMarks = bookMarks.filter(bookMark => bookMark.id !== id);
  setBookMarks(remainingBookMarks)
};
const handleAddToBookMarks = blog => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
};
  return (
    <div className="max-w-[1920px] mx-auto px-2 md:px-14 lg:px-24">
      <Header />
      <hr className="my-8" />
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <Blogs 
         handleAddToBookMarks={handleAddToBookMarks}
         handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks
         bookMarks = {bookMarks}
         readingTime={readingTime}
        />
      </main>
    </div>
  )
}

export default App

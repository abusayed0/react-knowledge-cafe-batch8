
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {

  return (
    <div className="max-w-[1920px] mx-auto px-2 md:px-14 lg:px-24">
      <Header />
      <hr className="my-8" />
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        <Blogs/>
        <Bookmarks />
      </main>
    </div>
  )
}

export default App

import './App.css'
import LibraryBooks from './component/LibraryBooks'
import LibraryHeader from './component/LibraryHeader'
import LibraryFooter from './component/LibraryFooter'
import LibraryButton from './component/LibraryButton'
import LibraryLogin from './component/LibraryLogin'
import Office from './component/Office'
import OfficeList from './component/OfficeList'

function App() {

  return (
    <div>
      {/* <LibraryHeader />
      <main>
        <h2>List of Books</h2>
        <LibraryBooks />
        <LibraryButton />
      </main>
      <LibraryFooter /> */}
      {/* <LibraryLogin /> */}
      <Office />
      <OfficeList />
    </div>
  )
}

export default App

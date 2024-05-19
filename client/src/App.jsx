import  {Navbar,Footer,Services,Transactions,Welcome } from './components'


const App =  () => {
  return (
        <div className='min-h-screen bg-gradient-to-bl from-gray-800 to-teal-900 '>
          <div >
            <Navbar/>
            <Welcome/>
          </div  >
          <Services/>
          <Transactions/>
          <Footer/>
        </div>
      )
    }

export default App

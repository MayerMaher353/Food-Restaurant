import './App.css'
import Footer from './shared/footer/footer'
import WorkingHours from './shared/WorkingHours/WorkingHours'
import Testemonials from './shared/Testemonials/Testemonials'
function App() {
  return (
    <>
     <WorkingHours />
     <Testemonials />
     {/* Footer appears here */}
      <Footer />
    </>
  )
}

export default App

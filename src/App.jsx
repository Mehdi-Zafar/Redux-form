import { Display } from "./components/Display"
import { Form } from "./components/Form"
import { Header } from "./components/Header"


function App() {

  return (
    <div className="App bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 lg:h-screen h-fit pb-8">
      <Header/>
      <div className="flex justify-evenly items-center lg:flex-row flex-col">
        <Form/>
        <Display/>
      </div>
    </div>
  )
}

export default App

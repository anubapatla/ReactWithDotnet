
import { createRoot } from 'react-dom/client'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Counter from './Layout/Counter'

createRoot(document.getElementById('root')).render(
  <div>
    <Header />
    <main classNmae="flex-fill">
      <Counter></Counter>
    </main>
    <Footer />
  </div>
)

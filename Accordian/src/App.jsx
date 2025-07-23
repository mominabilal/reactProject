import Accordian from './components/accordian/Accordian.jsx'
import RandomColor from './components/Random-color/RandomColor.jsx'
import StarRating from './components/star-rating/StarRating.jsx'

function App() {
  return (
    <>
      <Accordian/>
      <RandomColor/>
      <StarRating stars={10}/>
    </>
  )
}

export default App

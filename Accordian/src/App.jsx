import Accordian from './components/accordian/Accordian.jsx'
import ImageSlider from './components/imageslider/Index.jsx'
import RandomColor from './components/Random-color/RandomColor.jsx'
import StarRating from './components/star-rating/StarRating.jsx'

function App() {
  return (
    <>
      <Accordian/>
      <RandomColor/>
      <StarRating stars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list' }limit={'10'}/>
    </>
  )
}

export default App

import Accordian from './components/accordian/Accordian.jsx'
import ImageSlider from './components/imageslider/Index.jsx'
import LoadMoreData from './components/load-more/Index.jsx'
import RandomColor from './components/Random-color/RandomColor.jsx'
import StarRating from './components/star-rating/StarRating.jsx'
import './App.css'
import TreeView from './components/tree-veiw/Index.jsx'
import treeData from './components/tree-veiw/data.js'

function App() {
  return (
    <div className='parent-container'>
      <Accordian/>
      <RandomColor/>
      <StarRating stars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list' }limit={'10'}/>
      <LoadMoreData/>
      <TreeView list={treeData}/>
    </div>
  )
}

export default App

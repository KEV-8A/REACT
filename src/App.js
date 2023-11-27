import './App.css';
import Menu from './Components/Menu';
import Checkbox from './Components/Checkbox'
import Button from './Components/Button'
import BasicButtons from './Components/BasicButtons'
import Select from './Components/Select'
import Switch from './Components/Switch'
import Rating from './Components/Rating'


function App() {
  return (
    <div className="App">
      <Menu/>
      <Checkbox/>
      <Button/>
      <BasicButtons/>
      <Select/>
      <Switch/>
      <Rating/>
    </div>
  );
}

export default App;
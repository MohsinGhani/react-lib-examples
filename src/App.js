import React from 'react';
import './App.css';
import ReactPlayerExample from './Components/ReactPlayerExample'
import CropperDemo from './Components/CropperDemo'

class App extends React.Component {
  state = {
    selectedFile: null
  }

  onChangeHandler = event => {
    const { files } = event.target
    let reader = new FileReader()
    reader.readAsDataURL(files[0])

    reader.onload = (e) => {
      this.setState({
        selectedFile: e.target.result
      })
    }
  }

  render() {
    const { selectedFile } = this.state
    return (
      <div>
        <hr />
        <CropperDemo />
        <hr />
        <ReactPlayerExample />
      </div>
    )
  }
}

export default App;

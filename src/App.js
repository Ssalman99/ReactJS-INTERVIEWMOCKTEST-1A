import {Component} from 'react'
import './App.css'
import {
  Background,
  Container,
  Heading,
  Input,
  Button,
  Inputcontainer,
  Pera,
} from './styledComponents'

// Replace your code here
class App extends Component {
  state = {
    inputValue: '',
    save: true,
  }

  saveClicked = () => {
    this.setState(Prev => ({save: !Prev.save}))
  }

  inputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  renderInput = () => {
    const {inputValue} = this.state
    return (
      <Inputcontainer>
        <Input
          value={inputValue}
          type="search-box"
          onChange={this.inputValue}
        />
        <Button onClick={this.saveClicked}>Save</Button>
      </Inputcontainer>
    )
  }

  editClicked = () => {
    this.setState(Prev => ({save: !Prev.save}))
  }

  renderEdit = () => {
    const {inputValue} = this.state

    return (
      <Inputcontainer>
        <Pera>{inputValue}</Pera>
        <Button onClick={this.editClicked}>Edit</Button>
      </Inputcontainer>
    )
  }

  inputBox = () => {
    const {save} = this.state

    if (save === true) {
      return this.renderInput()
    }
    return this.renderEdit()
  }

  render() {
    return (
      <Background>
        <Container>
          <Heading>Editable Text Input</Heading>
          {this.inputBox()}
        </Container>
      </Background>
    )
  }
}

export default App

import React from 'react'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // El constructor es para bindear el this a la funcion
  // sino se usa arrow functions
  // constructor() {
  //   super()
  //   this.goToStore  = this.goToStore.bind(this)
  // }

  myInput = React.createRef()

  goToStore = e => {
    e.preventDefault()
    const storeName = this.myInput.current.value
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Ingresa una tienda</h2>
        <input
          ref={this.myInput}
          type="text"
          required
          placeholder='Nombre de la tienda'
          defaultValue={getFunName()}
        />
        <button type='submit'>Visitar tienda -></button>
      </form>
    )
  }
}

export default StorePicker
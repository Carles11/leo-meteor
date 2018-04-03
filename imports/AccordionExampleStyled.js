import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleStyled extends React.Component {
  state = { activeIndex: 1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (

      <Accordion styled>
        <Accordion.Title active={activeIndex === 1} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          <p className='p_accordion'>{this.props.user}</p>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p className='padding_left'>Dirección: {this.props.address}</p>
          <p className='padding_left'>Teléfono: {this.props.telefon}</p>
          <p className='padding_left'>E-mail: {this.props.email}</p>
          <p className='padding_left'>Persona de contacto: {this.props.contactperson}</p>
          <p className='padding_left'>Clase que participa: {this.props.classe}</p>
          <p className='padding_left'>Inscrito para el año: {this.props.year}</p>
        </Accordion.Content>  
      </Accordion>
    )
  }
}
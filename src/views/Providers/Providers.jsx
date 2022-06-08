import React from 'react'

import Header from 'components/Headers/HeaderGenerico'
import { Button } from 'reactstrap'
import ListNewProvider from 'components/Providers/ListNewProvider'

const Providers = () => {
  return (
    <>
      <Header/> 
      <Button
    className='mt--7 ml-7 btn btn-secondary'
    href= 'newprovider'
    >Nuevo</Button>
      <ListNewProvider/>
    </>
  )
}

export default Providers
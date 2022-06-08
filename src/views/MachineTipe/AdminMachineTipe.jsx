import React from 'react'

import Header from 'components/Headers/HeaderGenerico'
import { Button } from 'reactstrap'
import ListNewMachineTipe from 'components/MachineTipe/ListNewMachineTipe'

function AdminMachineTipe() {
  return (
    <>
    <Header/>
    <Button
    className='mt--7 ml-7 btn btn-secondary'
    href= 'NewMachineTipe'
    >Nuevo</Button>
    
    <ListNewMachineTipe/>

    </>
  )
}

export default AdminMachineTipe
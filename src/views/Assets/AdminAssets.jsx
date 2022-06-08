
import ListAssets from 'components/Activos/ListAssets'
import Header from 'components/Headers/HeaderGenerico'

import { Button } from 'reactstrap'


function AdminAssets() {
  return (
    <>
       <Header/>
    <Button
    className='mt--7 ml-7 btn btn-secondary'
    href= 'newasset'
    >Nuevo</Button>
    
    <ListAssets/>
    </>
  )
}

export default AdminAssets
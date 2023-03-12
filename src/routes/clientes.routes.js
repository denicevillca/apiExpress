import {Router} from 'express'
import { deleteCliente, getCliente, getClientes, patchClientes, postCliente, putCliente } 
from '../controllers/clientes.controllers.js'

const router = Router()

router.get('/clientes',getClientes)

router.get('/clientes/:id',getCliente)

router.post('/clientes',postCliente)

router.put('/clientes/:id',putCliente)

router.patch('/clientes/:id',patchClientes)

router.delete('/clientes/:id',deleteCliente)


export default router   
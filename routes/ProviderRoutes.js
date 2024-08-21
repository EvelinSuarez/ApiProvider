import Router from "express"
const ProviderRoutes = Router()

import { getProvider, postProvider, putProvider, deleteProvider } from '../controllers/ProviderController.js'

ProviderRoutes.get('/', getProvider)
ProviderRoutes.post('/', postProvider)
ProviderRoutes.put('/', putProvider)
ProviderRoutes.delete('/:id',deleteProvider)

export default ProviderRoutes
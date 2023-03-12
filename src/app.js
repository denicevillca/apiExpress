
import express from 'express'
import clientesRoutes from './routes/clientes.routes.js'

    const app = express()


    app.use(express.json())
    app.use('/api',clientesRoutes)

    export default app
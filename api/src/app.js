import fastify from 'fastify'
import { login } from './routes/userRoute.js'
import { account } from './routes/accountRoute.js'


export function buildApp(){
    const app = fastify()
    
    app.get('/', () => {
        return 'qualquer coisa'
    })
    
    app.register(login)
    
    app.register(account)

    return app
}
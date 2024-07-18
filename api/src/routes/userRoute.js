import { prisma } from '../lib/prisma.js'
import { compare, hash } from 'bcrypt'

export async function login(app) {
    app.post('/login', async (req, res) => {
        const { name, password } = req.body
        const user = await prisma.user.findFirst({where: {name}})
        if (!user) return res.status(401).send({message: 'credencial inválida'})
        const passwordHash = await compare(password, user.password)
        if (!passwordHash) return res.status(401).send({message: 'credencial inválida'}) 
        return res.send()      
    })
}


import { prisma } from '../lib/prisma.js'

export async function account(app) {
    app.get('/account/:name', async (req, res) => {
        const { name } = req.params
        const accounts = await prisma.account.findMany({where: {name}})
        return res.send(accounts)      
    })
}


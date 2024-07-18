import { buildApp } from './app'
const app = buildApp()

export default async (req, res) => {
  try {
    await app.ready()
    app.server.emit('request', req, res)
  } catch (error) {
    console.error('Erro ao lidar com a requisição:', error)
  }
}
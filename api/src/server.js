import { buildApp } from './app.js'
const app = buildApp()

try {
app.listen({port: 5000}) 
console.log('rodandoooo')
} catch (error){
    console.error(error) 
    process.exit(1)
}
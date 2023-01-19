import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
// import { appRoutes } from "./routes"

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)
// app.register(appRoutes)

app.get('/hello', async ()=> {
  const habits = await prisma.habit.findMany(
  // {
  //   where: {
  //     title: {
  //       startsWith: 'Beber'
  //     }
  //   }
  // }
  )
  return habits
})


app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server running!')
})
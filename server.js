import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data:{
            "name": req.body.name,
            "email": req.body.email,
            "age": req.body.age
   
        }
    })   
    res.status(201).json(req.body)
})


app.get('/usuarios', (req, res) =>{
    res.status(200).json(users)
})
app.listen(3000);



/*  
         criar uma api sobre os curos

         1-criar um usuários
         2-listar todos os usuários
         3-editar usuários
         4-deletar usuários
         BT!2QiW74e5qnLh
         BT!2QiW74e5qnLh2
*/
const express = require("express")
const router = express.Router()
const Clientes = require("../service/Clientes")

router.get("/clientes", async (req, res) => {
    try {
        const clientes = await Clientes.getClientes()
        // console.log(clientes)
        res.send(clientes)
    } catch (e) {
        console.log(e)
        res.status(500).send({ error: true, message: e.toString() })
    }
})

router.get("/clientes/:id", async (req, res) => {
    try{
        const client = await Clientes.getClientById(req.params.id) 
        if(client.length === 0) return res.status(404).send({ error : true, message: "Id não encontrado!"})
        res.send(client[0])
    }catch(e){
        console.log(e)
        res.status(500).send({ error: true, message: e.toString() })
    }
})

router.post("/clientes", async (req, res) => {
    try{

        const result = await Clientes.create(req.body)
        res.send(result)

    }catch(e){
        console.log(e)
        res.status(500).send({ error : true, message: e.toString()})
    }
})


router.delete("/clientes/:id", async (req, res) => {
    try{
        
    }catch(e){
        console.log(e)
        res.status(500).send({ error: true, message: e.toString() })
    }
})

module.exports = router
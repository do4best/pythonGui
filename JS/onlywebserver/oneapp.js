import express,{Router} from 'express'


let routes = Router()
routes.get('/', (req, res) => {
    res.send("Hello Friends")
})
routes.get("/:id([0-9]{8})", (req, res) => {
    res.send(`We are Here ${req.params.id}`)
})
routes.get("*", (req, res) => { res.send("Sorry invalid user") })
export {routes}
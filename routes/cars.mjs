import express from 'express'

const router = express.Router()

router.get("/all",(req,res) => {
    res.send("dsfsdf")
})
router.get("/bmw",(req,res) => {
    res.send("bmw berildi")
})


export default router
const express= require('express')
const router=express.Router()
const blockChainController = require('../src/controller/blockChainController')





router.get("/assets",blockChainController.getCrypto)



module.exports=router
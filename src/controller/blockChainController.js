const axios = require('axios')
const blockChainModel = require('./model/blockChainmodel')



const getCrypto = async function(req,res){
    try{

    const api = {
        method: "get",
        url: "https://api.coincap.io/v2/assets",
        headers: { Authorization: "Bearer 8c37fb09-bc87-45bc-911d-51e5c0168a18" }
    }


    let result = await axios(api)
    let data = result.data.data
        let filteredData = data.sort((a, b) => { a.changePercent24Hr - b.changePercent24Hr })
        await blockChainModel.deleteMany()
        const finalData = await blockChainModel.create(filteredData)
        let finalResult = await blockChainModel.find().select({ __v: 0, _id: 0 })
        res.status(200).send({ status: true, data: finalResult })
    } catch (err) {
res.status(500).send({ status: false, message: err.message })
    }

}


module.exports.getCrypto = getCrypto


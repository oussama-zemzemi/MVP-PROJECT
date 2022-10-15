const AnimeSeries = require('../models/AnimeSeriesModel')


module.exports={
    getAll:(req,res)=>{
        AnimeSeries.getAll((err,results)=>{
            err ? res.status(500).send(message.err) : res.status(200).json(results); 
        })

    },
    addseries:(req,res)=>{
        AnimeSeries.addseries((err,results)=>{
            err ? res.status(500).send(message.err) : res.status(201).json('created');
        })

    },
    

    deleteseries:(req,res)=>{
        AnimeSeries.deleteseries((err,results)=>{
            err ? res.json(err) : res.json(results); 
        }),[req.params.id]

    },
    updateseries:(req,res)=>{
        AnimeSeries.updateseries((err,results)=>{
            err ? res.json(err) : res.json(results); 
        })[req.body.name,req.body.balance];
},
getOne:(req,res)=>{
    AnimeSeries.getOneseries((err,results)=>{
        err ? res.json(err) : res.json(results); 
    }),[req.params.id]
},
}
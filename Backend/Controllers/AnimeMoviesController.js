const AnimeMovies = require('../models/AnimeMoviesModel')


module.exports={
    getAll:(req,res)=>{
        AnimeMovies.getAll((err,results)=>{
            err ? res.status(500).send(message.err) : res.status(200).json(results); 
        })

    },
    addMovie:(req,res)=>{
        AnimeMovies.addMovie((err,results)=>{
            err ? res.status(500).send(message.err) : res.status(201).json('created');
        })

    },
    

    deleteMovie:(req,res)=>{
        AnimeSeries.deleteMovie((err,results)=>{
            err ? res.json(err) : res.json(results); 
        }),[req.params.id]

    },
    updateMovie:(req,res)=>{
        AnimeMovies.updateMovie((err,results)=>{
            err ? res.json(err) : res.json(results); 
        })[req.body.name,req.body.balance];
},
getOne:(req,res)=>{
    AnimeMovies.getOneMovie((err,results)=>{
        err ? res.json(err) : res.json(results); 
    }),[req.params.id]
},
}
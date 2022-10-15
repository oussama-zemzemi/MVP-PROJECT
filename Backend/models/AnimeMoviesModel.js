const db = require('../database-mysql/index');

module.exports={
    getAll:(cb)=>{
        let syntax =`SELECT * FROM AnimeMovies`;
        db.query(syntax,(err,results)=>{
            err ? cb(err,null) : cb(null,results);

        });

    },
    getOne:(cb,id)=>{
        let syntax=`SELECT FROM AnimeMovies WHERE idAnimeMovies = ?`;
        db.query(syntax,id,(err,results)=>{
            err ? cb(err,null) : cb(null,results)
        });



    },
    addMovie:(cb,values)=>{
        let syntax=`INSERT INTO AnimeMovies SET Released= ? , Genre = ?,Casts=?`;
        db.query(syntax,values,(err,results)=>{
            err ? cb(err,null) : cb(null,results);
        });
    },
    deleteMovie:(cb)=>{
        let syntax = `DELETE FROM AnimeMovies WHERE idAnimeMovies = ?`;
        db.query(syntax,[id],(err,results)=>{
            err ? cb(err,null) : cb(null,results);
        });

    },
    updateMovie:(cb,values)=>{
        let syntax = `UPDATE AnimeMovies SET  Released= ? , Genre = ?,Casts=?,idAnimeMovies =? WHERE idAnimeMovies = ?`;
        db.query(syntax,values,(err,results)=>{
            err  ? cb(err,null) : cb(null,results);
        });
    }
}
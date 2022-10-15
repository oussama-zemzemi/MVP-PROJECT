const db = require('../database-mysql/index');

module.exports={
    getAll:(cb)=>{
        let syntax =`SELECT * FROM Anime series`;
        db.query(syntax,(err,results)=>{
            err ? cb(err,null) : cb(null,results);

        });

    },
    getOne:(cb,id)=>{
        let syntax=`SELECT FROM Anime series WHERE idAnimeMovies = ?`;
        db.query(syntax,id,(err,results)=>{
            err ? cb(err,null) : cb(null,results)
        });



    },
    addseries:(cb,values)=>{
        let syntax=`INSERT INTO Anime series SET Released= ? , Genre = ?,Casts=?`;
        db.query(syntax,values,(err,results)=>{
            err ? cb(err,null) : cb(null,results);
        });
    },
    deleteseries:(cb)=>{
        let syntax = `DELETE FROM Anime series WHERE idAnimeMovies = ?`;
        db.query(syntax,[id],(err,results)=>{
            err ? cb(err,null) : cb(null,results);
        });

    },
    updateseries:(cb,values)=>{
        let syntax = `UPDATE Anime series SET  Released= ? , Genre = ?,Casts=?,idAnimeMovies =? WHERE idAnimeMovies = ?`;
        db.query(syntax,values,(err,results)=>{
            err  ? cb(err,null) : cb(null,results);
        });
    }
}
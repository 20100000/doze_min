import database from "../../lib/database";
import queries from "./tool/queries";

const _getAllMusic = async () => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        return  await database.execute(conn, queries.QSelectAllMusics);

    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _getMusic = async (id, find) => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        let data
        if(id){
             data = await database.execute(conn, queries.QSelectMusic,[id]);
        } else {
             data = await database.execute(conn, queries.QSearchMusic,['%'+find+'%','%'+find+'%']);

        }
        return data;
    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _insertMusic = async (music) => {
    let conn = null;
    try{
        console.log('model',music);

        conn = await database.getConnection(true);
        const res = await database.execute(conn, queries.QInsertMusic, [music.title, music.description, music.file_path]);
        music.tags.map( async (item,idx) =>{
            await database.execute(conn, queries.QSaveTags,[item.name, res.insertId]);
        });
        return res.insertId;
    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);
    }
}

const _updateMusic = async (music, id) => {
    let conn = null;
    try{
        conn = await database.getConnection(true);

        const upMusic =  await database.execute(conn, queries.QUpdateMusic,[music.title, music.description, music.file_path, id]);
        music.tags.map( async (item,idx) =>{
            await database.execute(conn, queries.QUpdateTag,[item.name, item.id]);
        });
        return upMusic;
    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}

const _rmMusic = async (id) => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        const data = await database.execute(conn, queries.QDeleteMusic,[id]);
        return data;
    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}


module.exports.getAllMusic =_getAllMusic;
module.exports.getMusic =_getMusic;
module.exports.insertMusic =_insertMusic;
module.exports.mUpdateMusic =_updateMusic;
module.exports.rmMusic =_rmMusic;

import database from "../../lib/database";
import queries from "./tool/queries";

const _getLogin = async (email, senha) => {
    let conn = null;
    try{
        conn = await database.getConnection(true);
        const data = await database.execute(conn, queries.QLogin,[email, senha]);
        return data[0];

    }catch (e) {
        //todo
    }finally {
        database.closeConn(conn);

    }
}


module.exports.getLogin = _getLogin;

const mariadb = require('mariadb')

mariadb.createConnection()

const parametroConexao = {
    'host': '192.0.2.50',
    'port': '3306',
    'user': 'root',
    'password': ''
}

async function CriarConexao(){

    try{
        let conn = await mariadb.createConnection({
            host: parametroConexao.host,
            port: parametroConexao.port,
            user: parametroConexao.user,
            password: parametroConexao.password
        })
    }
    catch(err){
        console.log('Não foi possível establizar a conexão :', err)
    }
    finally{
        if(conn){
            conn.close()
        }
    }
}


CriarConexao()
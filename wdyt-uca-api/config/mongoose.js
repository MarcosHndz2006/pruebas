const Mongoose = require("mongoose");
const debug = require("debug")("app:mongoose"); 
//Me dice de donde provienen los logs del debug, en el caso 
//de este archivo me hace referencia a los logs provocados por la configuración de la db
//cuando esta falla o se genera en ella algún error.

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "web0222";
const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;

const connect = async () => {
    try{
        await Mongoose.connect(dburi);
        debug("Conexión a la base exitosa");
    }catch(error){
        debug("Error en la conexión a la base");
        process.exit(1);
    }
}

//Hacemos el retorno de un objeto ya que no solamente necesitaremos la configuración a la base de datos
// podemos requerir de otras configuraciones así que exportamos un objeto que contenga la función de conexión y 
// configuraciones restantes 
module.exports = {
    connect
}
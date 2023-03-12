import { pool } from "../db.js"



export const getClientes = async (req,res)=>{

    try {
        const [rows] = await pool.query('select * from clientes')
            res.json(rows) 

    } catch (error) {
        res.send(' hay un error')

    }}


    export const getCliente = async (req,res)=>{

        try {
            const [rows] = await pool.query('select * from clientes  where idCliente = ?',
            req.params.id)
            res.json(rows)

        } catch (error) {
            res.send(' hay un error')
        } 
    }


    export const postCliente = async (req,res)=>{

        const {nombre,appaterno,appmaterno,direccion,fechaRegistro} = req.body

        try {
            const [rows] = await pool.query('insert into clientes (nombre,appaterno,appmaterno,direccion,fechaRegistro) values(?,?,?,?,?)',
            [nombre,appaterno,appmaterno,direccion,fechaRegistro])
                res.json(rows) 
    
        } catch (error) {
           res.send(' hay un error')
    
        }
    }


export const putCliente = (req,res)=>{
 
    res.send('modificar datos del cliente')
}

//-------
    export const patchClientes = async(req,res)=>{

    const {id} = req.params
    const {nombre,appaterno,appmaterno,direccion,fechaRegistro} = req.body
    
    try {
            const [rows] = await pool.query 
('update clientes set nombre = IFNULL(?,nombre), appaterno = IFNULL(?,appaterno), appmaterno = IFNULL(?,appmaterno), direccion = IFNULL(?,direccion), fechaRegistro = IFNULL(?,fechaRegistro) where idCliente =?',
            [nombre,appaterno,appmaterno,direccion,fechaRegistro,id])
            res.json(rows)

    } catch (error) {
        res.send(' hay un error')
    } 
}



export const deleteCliente = async (req,res)=>{

    try {
        const [rows] = await pool.query('delete from clientes  where idCliente = ?'
        ,req.params.id)
        res.json(rows)

    } catch (error) {
        res.send(' hay un error')
    } 
}


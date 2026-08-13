import { dbclient} from "../config/db-celint.js";
import {env} from "../config/env.js";

const db = dbclient.db(env.MONGODB_DATABASE_NAME)

const infostudetn = db.collection("user");


const addstudent = async (req,res)=>{
    try{

        if(!req.body.name  || !req.body.age){
            return res.send('please fullfiled the all detils ');
        }

        const studntadd = await infostudetn.insertOne(req.body);
         res.send(studntadd);
         console.log(studntadd);

    }catch(e){
        console.log(e) 
        return res.status(500).send('internal  server error')
    }
}



const readallstudentdata =  async (req,res)=>{
  
     try{

          const readall = await infostudetn.find({}).toArray();
    res.send(readall);
    console.log(readall);

     }catch(e){
        console.log(e);
        return res.status(500).send("internal server error")
     }

}



const onestudent =  async (req,res)=>{
  
     try{

          const readone = await infostudetn.find(req.body).toArray();
    res.send(readone);
    console.log(readone);

     }catch(e){
        console.log(e);
        return res.status(500).send("internal server error")
     }

}


const updatestudent =  async (req,res)=>{
   
    try{
         const updatedata ={};

         if(req.body.name !== undefined){
            updatedata.name = req.body.name;

         }

         if(req.body.age  !== undefined){
            updatedata.age = req.body.age;
         }

         const updatedstudentdata = await infostudetn.updateOne(
            {name:req.body.oldname},
            {
                $set:updatedata
            }
         )
         console.log(updatedata)
         res.send(updatedata)

    }catch(e){
        console.log(e);
         return res.status(500).send("internal server error")

        
    }
}


const deleteddocument  = async (req,res)=>{

     try{

        const deleteddata = {};

        if(req.body.name !== undefined){
            deleteddata.name = req.body.name
        }

        if(req.body.age !== undefined){
            deleteddata.age = req.body.age 
        }

    const deleted = await infostudetn.deleteOne(deleteddata);
    res.send(deleted);
    console.log(deleted);

}catch(e){
    console.log(e);
    return res.status(500).send('internal server error')

}
}

export default {
    addstudent,
    readallstudentdata,
    onestudent,
    updatestudent,
    deleteddocument,
}
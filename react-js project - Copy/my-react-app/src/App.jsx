// import React from 'react'
// import { useEffect,useState } from 'react'

// const App = () => {
//   const [name,setname] = useState("");
//   const [age,setage] = useState('');

//   const [student,setstudent] = useState([]);        //api ma thi avata data stored kari ne show karva

// const   addstudent =  async (e)=>{
//     e.preventDefault( );

//   const studentreq = await fetch(                //backand ni api ne req mokale che
// "http://localhost:3000/students/addstudent",

//     { 
//       method:"POST",                               //post methos use kari sa 
//       headers:{                                    // data kaya fromat che
//     "Content-Type": "application/json"  
//       },

//       body:JSON.stringify({                       //je data user  thi ave ane json ma conver karva
//         name:name,
//         age:age ,
//       })
//     }

//   ),

//   const backendres = await  studentreq.json();
//   console.log(`student succefully add,${backendres}`)


//         setname("");
// setage("");
 

//   return (
//     <div>
      
//     </div>
//   )
// }
// }
// export default App



                                           // hendal the curd opration



import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {

             console.log('APP COMPONENT RUNNING  ')

    const [name, setname] = useState("");
    const [age, setage] = useState("");

    const [student, setstudent] = useState([]);

    const addstudent = async (e) => {

        e.preventDefault();

        const studentreq = await fetch(
            "http://localhost:3000/students/addstudent",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    age: age
                })
            }
        );

        const backendres = await studentreq.json();

        console.log("Student successfully added:", backendres);

        getstudent( );
        setname("");
        setage("");
    };

                             // get student

    const getstudent  =  async ()=>{

        try{
        const responsestudent = await fetch(
           "http://localhost:3000/students/readallstudent"
        );

        const resdata = await responsestudent.json();
        console.log(`readall student ${resdata}`)
        setstudent(resdata)
    }catch(e){
   console.log("GET ERROR:", e);
    }

    }
    useEffect(()=>{                    //    // Page load થાય ત્યારે students લાવવા
     getstudent()
    },[])


                                    // UPDATE - PATCH


    const updateddocument =  async (oldname)=>{

        const newname = prompt('Enter New name')
        const newage = prompt('Enter New age')

        const updateddatares = await fetch(
         "http://localhost:3000/students/updatestudent",

         {
            method:'PATCH',

            headers:{
                "content-type":"application/json"
            },

            body: JSON.stringify({
                oldname :oldname,
                name:newname,
                age :newage,
            })
         }
        );

        const readupdateddata = await updateddatares.json();
        console.log(`updated the document ${readupdateddata}`)
        getstudent()


    }


                                //DELETED DocumentS


    const deletedocument =  async (delstudet)=>{

        const dataresdelete = await fetch(
          "http://localhost:3000/students/studentdelet",
            {
                method:"DELETE",
                headers:{
                   "content-type": "application/json"
                },
                
                body:JSON.stringify({
                    name:delstudet
                })
            }
        );

        const deletedstudent = await dataresdelete.json();
        console.log(`document has been deleted ${deletedstudent}`)
        getstudent();
    }
    return (
        <div>
            <div className="mainhedings">
            <h1>Student Management System</h1>
            <span >Prince Privet Eduxtion Policy Limited</span>
            </div>

            <div className="formhendaling">

                <form onSubmit={addstudent}>

                <input 
                type="text"
                placeholder="Enter Student Name"
                value={name}

                onChange={(e)=>{
                    setname(e.target.value)
                }}

                />

                <input 
                type='number'
                placeholder="Enter your age"
                value={age}

                onChange={(e)=>{
                    setage(e.target.value)
                }}
                />

                <button type="submit">Add student</button>

                </form>

                <hr/>



               {/* {read data} */}


            <h2> All student </h2>

            {student.map((student)=>{
       
                return (
                <div key={student._id}>
                    
                    <p> 
                        name:{student.name}
                    </p>
                    
                    <p> 
                        age:{student.age}
                    </p>
                    
                    {/* update data */}
                    <button onClick={()=>updateddocument(student.name)}>Edit</button>   {/* student nu old name function ne send kare che */}

                    <button onClick={()=>deletedocument(student.name)}>delete</button>

                    <hr/>

                </div>
                );
            })}
        


            </div>

        </div>
    );
};


export default App;
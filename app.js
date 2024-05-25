const express = require("express");
const app=express();

const PORT =process.env.PORT || 8000;

app.use(express.json());

const start =  async () =>{
   try {
    app.listen(PORT , ()=>{
        console.log(`Yes, server started on port ${PORT} `);
    });
   } catch (error) {
    console.log(error);
   }
};

start();

let tasks= [];
let currentId=1;


const addDefaultTask = () => {
    const defaultTask = {
      id: currentId++,
      title: "Default Task",
      description: "This is a default task",
    };
    tasks.push(defaultTask);
  };

addDefaultTask();

//get all tasks
app.get("/tasks",(req ,res )=>{
    res.status(200).json(tasks);
});

//get task by id
app.get("/tasks/:id",(req,res)=>{
    const task =tasks.find(t=>t.id===parseInt(req.params.id));
    if(!task){
        return res.status(400).json({error:"Task not found"});
    }
    res.status(200).json(task);
});

//add task
app.post("/tasks",(req,res)=>{
    const {title,description} =req.body;
    if(!title || !description ){
        return res.status(400).json({error:" Title and description are required"});
    }
    const newTask={id:currentId++,title,description};
    tasks.push(newTask);
    res.status(200).json(newTask);
});

//update task by id
app.put("/tasks/:id",(req,res)=>{
    const task=tasks.find(t=>t.id=== parseInt(req.params.id));
    if(!task){
        return res.status(404).json({error:"Task not found"});
    }

    const { title,description,status}=req.body;
    if(!title || !description){
        return res.status(400).json({error :"Title and description are required"});
    }

    task.title=title;
    task.description=description;
    

    res.status(200).json(task);

});

//delete task by id
app.delete("/tasks/:id",(req,res)=>{
    
    const taskIndex =tasks.findIndex(t=>t.id===parseInt(req.params.id));
    console.log(taskIndex);
    if(taskIndex === -1){
        return res.status(404).json({error:"Task not found"});
    }else{  
          
      tasks.splice(taskIndex ,1);
        res.status(200).send();
    }
});


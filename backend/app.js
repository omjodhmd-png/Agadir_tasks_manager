import express  from "express";
import cors from "cors";
import userRoutes  from "./Routes/userRoutes.js"


const app =express();
app.use(express.json());

// app.use(cors({origin:"http://localhost:3000",credentials:true}))

// function authMiddleware(req, res, next){
//     const auth=req.headers.authorization;
//     if (!auth) return res.status(401).json({message:"No token"});
//     next();
// }


// app.get("/tasks",authMiddleware,(req, res)=>{
//     res.json([{id:1,title:"RDV commune", status:"pending"}]);
// });
app.use("/api", userRoutes);

// app.listen(5000,()=>console.log("Server running on 5000"))


export default app;
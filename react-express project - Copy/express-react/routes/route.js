import express from "express";

import studentController from "../controller/student.controller.js";

const router = express.Router();

router.post("/addstudent", studentController.addstudent);

router.get("/allstudent", studentController.readallstudentdata);

router.post("/onestudent", studentController.onestudent);

router.put("/updatestudent", studentController.updatestudent);

router.delete("/deletestudent", studentController.deleteddocument);

export default router;
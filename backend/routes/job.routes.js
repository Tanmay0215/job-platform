import { Router } from "express";
import { createJob, getJob, updateJob, deleteJob, getAllJobs } from "../controllers/job.controller.js"

const router = Router()

router.route("/create").post(createJob)

router.route("/get/:id").get(getJob)

router.route("/getAllJobs/").get(getAllJobs)

router.route("/update/:id").post(updateJob)

router.route("/delete/:id").get(deleteJob)

export default router
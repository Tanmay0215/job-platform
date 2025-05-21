import { Router } from "express";
import { createInternship, getInternship, updateInternship, deleteInternship, getAllInternships } from "../controllers/intern.controller.js"

const router = Router()

router.route("/create").post(createInternship)

router.route("/:id").get(getInternship)

router.route("/").get(getAllInternships)

router.route("/update/:id").post(updateInternship)

router.route("/delete/:id").get(deleteInternship)

export default router

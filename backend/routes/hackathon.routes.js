import { Router } from "express";
import { createHackathon, getHackathon, updateHackathon, deleteHackathon, getAllHackathons } from "../controllers/hackathon.controller.js"

const router = Router()

router.route("/create").post(createHackathon)

router.route("/get/:id").get(getHackathon)

router.route("/getAllHackathons/").get(getAllHackathons)

router.route("/update/:id").post(updateHackathon)

router.route("/delete/:id").get(deleteHackathon)

export default router
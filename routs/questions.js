import express from "express";
import pool from "../db.js";
import {
    getCustomers,
    getEmployees,
    getProdoct,
    getNumOfOrders,
    getCustomersInUSA,
    getMaxPayment,
    getJob,
    evgCradit
} from "../ctrl/questionCtrl.js"

const router = express.Router()

router.get("/question1", getCustomers)
router.get("/question2", getEmployees)
router.get("/question3", getProdoct)
router.get("/question4", getNumOfOrders)
router.get("/question5", getCustomersInUSA)
router.get("/question6", getMaxPayment)
router.get("/question7",getJob)
router.get("/question8",evgCradit)
export { router }
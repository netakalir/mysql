import pool from "../db.js";


export const getCustomers = async (req, res) => {
    const [rows] = await pool.query("SELECT COUNT(*) FROM customers AS c WHERE c.country = 'France'")
    res.json(rows)
}

export const getEmployees = async (req, res) => {
    const[rows] = await pool.query("SELECT lastName , firstName FROM employees WHERE employees.reportsTo = 1143")
    res.json(rows)
}

export const getProdoct = async (req, res) => {
    const[rows] = await pool.query("SELECT COUNT(*)FROM products WHERE products.productLine = 'Classic Cars'")
    res.json(rows)
}

export const getNumOfOrders = async (req,res) =>{
    const [rows] = await pool.query("SELECT COUNT(*) FROM `orders` WHERE status = 'Shipped'")
    res.json(rows)
}

export const getCustomersInUSA = async (req,res) =>{
    const [rows] = await pool.query("SELECT COUNT(*) FROM `customers` WHERE country = 'USA'")
    res.json(rows)
}

export const getMaxPayment = async (req,res) =>{
    const [rows] = await pool.query("SELECT MAX(amount) FROM `payments`")
    res.json(rows)
}

export const getJob = async (req,res) =>{
    const [rows] = await pool.query("SELECT * FROM `employees` WHERE jobTitle = 'Sales Rep'")
    res.json(rows)
}

export const evgCradit = async (req,res) =>{
    const [rows] = await pool.query("SELECT AVG(creditLimit) FROM `customers`")
    res.json(rows)
}

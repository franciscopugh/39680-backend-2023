import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'franciscopugh3@gmail.com',
        pass: "",
        authMethod: 'LOGIN'
    }
});

app.get("/mail", async (req, res) => {
    const resultado = await transporter.sendMail({
        from: 'Test Fran franciscopugh3@gmail.com',
        to: "franciscopugh01@gmail.com",
        subject: "Saludo buenas noches",
        html: `
            <div>   
                <h1>Hola,buenas ncohes</h1>
            </div>
        
        `,
        attachments: []
    })
    res.send("Mail enviado")
})

app.listen(4000, () => {
    console.log("Server on port 4000 ")
})
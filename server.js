require('dotenv').config()

const nodemailer=require('nodemailer')

const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})

const mailOptions={
    from:'sauchaudh245@gmail.com',
    to:'yashshekhar2934@gmail.com,chaudharysaumya25@gmail.com',
    cc:'chaudharysaumya25@gmail.com',
    bcc:'chaudharysaumya25@gmail.com',
    subject:'Birthday',
    text:'Happy Birthday'
}

transport.sendMail(mailOptions).then((response)=>{
    console.log('email sent')
}).catch((err)=>{
    console.log('error')
})
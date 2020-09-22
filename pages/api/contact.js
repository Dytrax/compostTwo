import nodemailer from "nodemailer";
const hbs = require('nodemailer-express-handlebars');
const emailPass = "Cg0508electromagnetismo"

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "carlos.gs.andres@gmail.com",
        pass: emailPass
    }
})
//[1]
const handlebarOptions = {
    viewEngine: {
      extName: '.hbs',
      partialsDir: './template/',
      layoutsDir: './template/',
      //defaultLayout: 'email.body.hbs',
      defaultLayout: false,
    },
    viewPath:'./template/',
    extName: '.hbs',
  };
  

export default async (req, res) => {
    const { senderMail, name, content, recipientMail } = req.body
//[2]

    // Check if fields are all filled
    if (senderMail === "" || name === "" || content === "" || recipientMail === "") {
        res.status(403).send("")
        return
    }
//[3]

    const mailerRes = await mailer({ senderMail, name, text: content, recipientMail })
    res.send(mailerRes)

//[4]
}

const mailer = ({ senderMail, name, text, recipientMail }) => {
    const from = name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`
    let message = {}
    let nameTemplate = '';
    let context = {};
    if(text.isSeller){
        nameTemplate = 'template'
        context = {
            link:text.link,
            resultadoCosto:text.resultadoCosto
        }
    }else{
        nameTemplate = 'buyerTemplate'
        context = {
            value:text.value,
            phone:text.phone
        }
    }
    if(recipientMail==='carlos.gs.andres@gmail.com'){
        transporter.close()
         transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: "carlos.gs.andres@gmail.com",
                pass: emailPass
            }
        })
        message = {
            from,
            to: `${recipientMail}`,
            subject: `Nuevo Mensaje de ${from}`,
            text,
            replyTo: from
        }
    }else {
        transporter.use('compile',hbs(handlebarOptions))
    
        message = {
            from,
            to: `${recipientMail}`,
            subject: `New message from ${from}`,
            //text,
            replyTo: from,
            template:nameTemplate,
            context:context,
            attachments: [{
                filename: 'image_1.png',
                  path: './template/images/image_1.png',
                 cid: 'image_1'
            },
            {
                filename: '218-removebg-preview.png',
                  path: './template/images/218-removebg-preview.png',
                 cid: '218-removebg-preview'
            },
            {
                filename: 'featured-area-background_2.png',
                  path: './template/images/featured-area-background_2.png',
                 cid: 'featured-area-background_2'
            }
        ],
        }
    }
    
    
    
//[5]

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    
    })
//[6]
}

import { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: 'odontosos@odontosos.com.br', // Your email where you'll receive emails
      from: 'odontosos@odontosos.com.br', // your website email address here
      subject: `[Lead vindo do website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
        </div>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>Você tem um novo e-mail de ${req.body.fullname}, o email é: ✉️${req.body.email} </h3>
          <div style="font-size: 16px;">
            <p>Mensagem:</p>
            <p>${req.body.message}</p>
            <br>
          </div>
        </div>
      </body>
      </html>`
    })
  } catch (error: any) {
    console.error(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail

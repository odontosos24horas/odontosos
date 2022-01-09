import nextConnect from 'next-connect'
import multer from 'multer'

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req: any, file: { originalname: any }, cb: (arg0: null, arg1: any) => any) => cb(null, file.originalname)
  })
})

const apiRoute = nextConnect({
  onError(error: { message: any }, req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string }): void; new(): any } } }) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` })
  },
  onNoMatch(req: { method: any }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string }): void; new(): any } } }) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  }
})

apiRoute.use(upload.array('theFiles'))

apiRoute.post((req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data: string }): void; new(): any } } }) => {
  res.status(200).json({ data: 'success' })
})

export default apiRoute

export const config = {
  api: {
    bodyParser: false // Disallow body parsing, consume as stream
  }
}

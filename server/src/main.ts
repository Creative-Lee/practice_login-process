import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
  console.log('login 시도')

  const successMessage = `
  <div>
    <h1>로그인 성공</h1>    
  </div>
  `
  res.send(successMessage)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

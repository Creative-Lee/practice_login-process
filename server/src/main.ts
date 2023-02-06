import express from 'express'
import cors from 'cors'
import members from './members'

const app = express()
const port = 3000
const clientPort = 5173

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
  console.log('login 시도')

  const { email } = req.body
  console.log(email)

  if (!members.has(email) && !members.get(email)) {
    console.log('로그인 실패')
    res.send('실패')
    // res.redirect(301, 'back')
    return
  }

  console.log('로그인 성공')
  res.send('성공')
  // res.redirect('/home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

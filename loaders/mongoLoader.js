import mongoose from 'mongoose'
import config from '../config'

const mongoLoader = () => {
  console.log('mongo')
  mongoose.connect(config.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  const db = mongoose.connection

  const handleOpen = () => console.log('π§‘ Connected to DB')
  const handleError = (error) => console.log(`β Error on DB Connection: ${error}`)

  db.once('open', handleOpen) // open μ΄λ²€νΈκ° λ°μν  λ νλ²λ§ μ€ν
  db.on('error', handleError)
}

export default mongoLoader

const { Schema, model } = require('mongoose')

const shopSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for shop']
  }
})

const Shop = model('shop', shopSchema)

module.exports = { Shop };
const { Schema, model, Model } = require("mongoose");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const noticeSchema = new Schema(
  {
    image: { type: String, required: true },
    description: { type: String, required: true },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Notice", noticeSchema);
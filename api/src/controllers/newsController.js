const axios = require("axios");
const noticeSchema = require("../models/News");


// const getProduct = async (req, res) => {
//   const { model } = req.query;
//   const product = await productSchema.find();

//   try {
//     if (model) {
//       let productModel = product.filter((prod) =>
//         prod.model.toLowerCase().includes(model.toLowerCase())
//       );

//       productModel.length
//         ? res.status(200).json(productModel)
//         : res.status(201).json("Not found");
//     } else {
//       res.status(200).json(product);
//     }
//   } catch (error) {
//     res.send(`Error ${error}`);
//   }
// };

const postNotice = async (req, res) => {
  const notice = noticeSchema(req.body);

  notice
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};

const getIdNotice = async (req, res) => {
  const { id } = req.params;

  noticeSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};

const getNotices = async (req, res) => {
  const name = req.query.name;
  const { model } = req.query;
  const notice = await noticeSchema.find();
  try {
    if (name) {
      // const productSelected = product.filter((product) =>
      //   product.name.toLowerCase().includes(name.toLowerCase())
      // );
      // if (productSelected.length) {
      //   return res.status(200).send(productSelected);
      // } else {
      //   return res.status(404).send({ error: "Product not found." });
      // }
      noticeSchema
        .findOne({ name: name })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: `${error}` }));
    } else {
      try {
        if (model) {
          let noticeModel = notice.filter((prod) =>
            prod.model.toLowerCase().includes(model.toLowerCase())
          );

          noticeModel.length
            ? res.status(200).json(noticeModel)
            : res.status(201).json("Not found");
        } else {
          res.status(200).json(notice);
        }
      } catch (error) {
        res.send(`Error ${error}`);
      }
    }
  } catch (error) {
    res.status(404).send({ error: "Product not found" });
  }
};

const putNotice = async (req, res) => {
  const { id } = req.params;

  const {
    description,
    name,
    image
  } = req.body;

  noticeSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          description,
          name,
          image
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteNotice = async (req, res) => {
  const { id } = req.params;

  noticeSchema
    .findOneAndDelete({ _id: id })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

module.exports = {
  // getProduct,
  getIdNotice,
  postNotice,
  putNotice,
  deleteNotice,
  getNotices
};

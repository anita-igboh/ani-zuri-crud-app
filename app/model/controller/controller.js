const Crud = require('../../model/model.js');


// Get  user 
exports.findOne = (req, res, next) => {
    Crud.find()
      .then(() => {
        res.status(200).json({
          message: "Found User",
          data
        });
      })
      .catch((error) => {
        res.status(404).json({
          error: error,
        });
      });
  };


// update user
    exports.update = (req, res, next) => {
        const person = new Crud({
            name: req.body.name,
            email: req.body.email,
            country: req.body.country,

        });
        Crud.updateOne({ _id: req.params.userId, person })
          .then(() => {
            res.status(200).json({
              message: "User updated successfully",
            });
          })
          .catch((error) => {
            res.status(401).json({
              error: error,
            });
          });
      };

//delete user
    exports.delete = (req, res, next) => {
        Crud.deleteOne({ _id: req.params.userId })
          .then(() => {
            res.status(200).json({
              message: "User successfully deleted",
            });
          })
          .catch((error) => {
            res.status(404).json({
              error: error,
            });
          });
      };

//create user
exports.create = (req, res) => {
    const data = req.body;
let user = new Crud(data);
user.save( (err, dataObject) => {
    if (err) {
        return res.status(400).send({
                    message: "User content cannot be empty"
             });
        } else {
        return  res.status(200).send({
            message: "User created"
        });
        }
})
}


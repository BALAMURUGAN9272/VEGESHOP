const express = require('express');
const { getproducts, createproduct, getsingleproduct, updateproduct, deleteproducts } = require('../Controllers/ProductControllers');
const Router= express.Router();

Router.route('/woods').get(getproducts)
Router.route('/woods/new').post(createproduct)
Router.route('/woods/:id').get(getsingleproduct)
Router.route('/woods/:id').put(updateproduct)
Router.route('/woods/:id').delete(deleteproducts)




module.exports= Router;
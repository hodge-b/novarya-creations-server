const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/productsController');
// const ROLES_LIST = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(productsController.getAllProducts)
    .post(productsController.createNewProduct)
    .put(productsController.updateProduct)
    .delete(productsController.deleteProduct);
    // .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), productsController.createNewProducts)
    // .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), productsController.updateProducts)
    // .delete(verifyRoles(ROLES_LIST.Admin), productsController.deleteProducts);

router.route('/:id')
    .get(productsController.getProduct);

module.exports = router;
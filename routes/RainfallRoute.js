const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const {
  uploadFile, getExtremes, getMonthWise, getdataids,
} = require('../controllers/RainfallController');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/upload/:data_id', upload.single('file'), uploadFile);
router.get('/getextremes/:data_id', getExtremes);
router.get('/getmonthwise/:data_id/:city', getMonthWise);
//router.get('/getmonthwise/:data_id/:city', getMonthWise);
router.get('/getdataids', getdataids);


module.exports = router;

const { Rainfall } = require('../models/rainfall');


async function uploadFile(req, res, next) {
  const temp = await Rainfall.findOne({ data_id: req.params.data_id });
  if (temp) res.send('data_id already exist');
  const { file } = req;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  Rainfall.insertMany(JSON.parse(file.buffer.toString('utf8'))).then((d) => {
    Rainfall.updateMany({ data_id: 'default' }, { $set: { data_id: req.params.data_id } }).then((d) => {
      res.send(JSON.parse(file.buffer.toString('utf8')));
    });
  }).catch((e) => {
    res.send('error');
  });
}


async function getExtremes(req, res, next) {
  Rainfall.aggregate([
    { $match: { data_id: req.params.data_id } },
    { $unwind: '$monthlyAvg' },
    { $group: { _id: '$city', max: { $max: '$monthlyAvg.high' }, min: { $min: '$monthlyAvg.low' } } },
  ]).then((d) => {
    res.send(d);
  });
}

async function getMonthWise(req, res, next) {
  Rainfall.find({ data_id: req.params.data_id, city: req.params.city }, { monthlyAvg: 1, city: 1 }).then((d) => {
    res.send(d);
  });
}


async function getdataids(req, res, next) {
  Rainfall.find({}).distinct('data_id').then((d) => {
    res.send(d);
  });
}


module.exports = {

  uploadFile,
  getExtremes,
  getMonthWise,
  getdataids,

};

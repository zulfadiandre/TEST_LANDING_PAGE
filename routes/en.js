var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../en/index');
});
router.get('/electronic-medical-record-sistem-aplikasi-klinik', function(req, res, next) {
  res.render('emr');
});
router.get('/aplikasi-klinik', function(req, res, next) {
  res.render('products');
});
router.get('/aplikasi-klinik-berbasis-web-clinica', function(req, res, next) {
  res.render('clinica');
});
router.get('/software-aplikasi-klinik-terbaik-clinica', function(req, res, next) {
  res.render('clinica');
});
router.get('/sistem-informasi-klinik-clinica', function(req, res, next) {
  res.render('clinica');
});
router.get('/software-klinik-privata', function(req, res, next) {
  res.render('privata');
});
router.get('/sistem-informasi-klinik-schedula', function(req, res, next) {
  res.render('schedula');
});
router.get('/aplikasi-apotek-pharma', function(req, res, next) {
  res.render('pharma');
});
router.get('/sistem-apotek-pharma', function(req, res, next) {
  res.render('pharma');
});
router.get('/program-apotek-pharma', function(req, res, next) {
  res.render('pharma');
});
router.get('/acara-kesehatan-assist-id', function(req, res, next) {
  res.render('events');
});

router.get('/faq-sistem-informasi-klinik', function(req, res, next) {
  res.render('faq');
});
router.get('/demo-software-klinik', function(req, res, next) {
  res.render('req-demo');
});
router.get('/atur-jadwal-demo-aplikasi-klinik', function(req, res, next) {
  res.render('req-with-schedule');
});
router.get('/promo-closed', function(req, res, next) {
  res.render('req');
});


router.post('/reqfree', function(req, res, next) {
  const instance = axios.create({
    baseURL: 'https://medikaboo.com/api/OutsideMessages',
    timeout: 5000,
  });
  instance.post('/', {
    from: req.hostname,
    createdAt: new Date().toISOString(),

    data: {

      medname     : req.body.mname,
      usname      : req.body.uname,
      jabatan     : req.body.jabatan,
      phonenumber : req.body.pnumber,
      email       : req.body.email,
      mproduct    : req.body.mproduct,
      alamatrq    : req.body.alamatrq,
      tanggalrq   : req.body.dtgl + "-" + req.body.dbln + "-" + req.body.dtahun,
      jamrq       : req.body.jamrq,
      frombutton  : "cta button atur jadwal demo di faskes",
    },
  })

      .then(result => {
        console.log(result.data);
        return res.redirect('/');
      })
      .catch(err => {
        console.log('error pak');
        console.log(err);
      });
});

router.post('/reqdemo', function(req, res, next) {
  const instance = axios.create({
    baseURL: 'https://medikaboo.com/api/OutsideMessages',
    timeout: 5000,
  });
  instance.post('/', {
    from: req.hostname,
    createdAt: new Date().toISOString(),

    data: {

      medname     : req.body.mname,
      usname      : req.body.uname,
      jabatan     : req.body.jabatan,
      phonenumber : req.body.pnumber,
      email       : req.body.email,
      mproduct    : req.body.mproduct,
      frombutton  : "cta button demo gratis",
    },
  })

      .then(result => {
        console.log(result.data);
        return res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      });
});



// =======english page=======

router.get('/electronic-medical-record-sistem-aplikasi-klinik', function(req, res, next) {
  res.render('en/emr');
});
router.get('/aplikasi-klinik', function(req, res, next) {
  res.render('en/products');
});
router.get('/aplikasi-klinik-berbasis-web-clinica', function(req, res, next) {
  res.render('en/clinica');
});
router.get('/software-aplikasi-klinik-terbaik-clinica', function(req, res, next) {
  res.render('en/clinica');
});
router.get('/sistem-informasi-klinik-clinica', function(req, res, next) {
  res.render('en/clinica');
});
router.get('/software-klinik-privata', function(req, res, next) {
  res.render('en/privata');
});
router.get('/sistem-informasi-klinik-schedula', function(req, res, next) {
  res.render('en/schedula');
});
router.get('/aplikasi-apotek-pharma', function(req, res, next) {
  res.render('en/pharma');
});
router.get('/sistem-apotek-pharma', function(req, res, next) {
  res.render('en/pharma');
});
router.get('/program-apotek-pharma', function(req, res, next) {
  res.render('en/pharma');
});
router.get('/acara-kesehatan-assist-id', function(req, res, next) {
  res.render('en/events');
});

router.get('/faq-sistem-informasi-klinik', function(req, res, next) {
  res.render('en/faq');
});
router.get('/free-trial', function(req, res, next) {
  res.render('en/req-demo');
});
router.get('/atur-jadwal-demo-aplikasi-klinik', function(req, res, next) {
  res.render('en/req-with-schedule');
});
router.get('/promo-closed', function(req, res, next) {
  res.render('en/req');
});

module.exports = router;

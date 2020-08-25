var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index-v3');
});
router.get('/sistem-klinik-pratama-dan-utama-bpjs-online', function(req, res, next) {
  res.render('sistem-klinik-utama');
});
router.get('/demo-software-klinik', function(req, res, next) {
  res.render('req-demo-v3');
});
router.get('/demo-sistem-klinik-premium-clinica', function (req, res, next) {
  res.render('req-demo-premium-clinica-v3');
});
router.get('/hemoda-sistem-klinik-hemodialisa-hemodialisis-indonesia', function (req, res, next) {
  res.render('sistem-klinik-hemodialisa');
});
router.get('/bantuan', function (req, res, next) {
  res.render('bantuan');
});
router.get('/overview-rawat-jalan', function (req, res, next) {
  res.render('overview-rawat-jalan');
});
router.get('/overview-registrasi', function (req, res, next) {
  res.render('overview-registrasi');
});
router.get('/form-clinica-for-starters', function (req, res, next) {
  res.render('req-demo-clinica-for-Starters');
});
router.get('/form-hemoda', function (req, res, next) {
  res.render('req-demo-hemoda');
});
router.get('/program-referral', function (req, res, next) {
  res.render('program-referral');
});
router.get('/aplikasi-klinik-berbasis-web-clinica', function(req, res, next) {
   res.render('clinica-v3');
});

router.get('/harga', function (req, res, next) {
  res.render('harga-v3');
});
router.get('/solusi-booking-online', function (req, res, next) {
  res.render('solusi-booking-online');
});
router.get('/temukan-kami-melalui-whatsapp', function(req, res, next) {
  res.render('ind-wa');
});
router.get('/temukan-kami-melalui-youtube', function(req, res, next) {
  res.render('ind-yt');
});
router.get('/temukan-kami-melalui-facebook', function(req, res, next) {
  res.render('ind-fb');
});
router.get('/temukan-kami-melalui-instagram', function(req, res, next) {
  res.render('ind-ig');
});

router.get('/electronic-medical-record-sistem-aplikasi-klinik', function(req, res, next) {
  res.render('emr');
});
router.get('/aplikasi-klinik', function(req, res, next) {
  res.render('products');
});
router.get('/simrs-sistem-informasi-manajemen-rumah-sakit-online', function(req, res, next) {
  res.render('hospita');
});
// router.get('/aplikasi-klinik-berbasis-web-clinica', function(req, res, next) {
//   res.render('clinica');
// });
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
// router.get('/demo-software-klinik', function(req, res, next) {
//   res.render('req-demo');
// });
router.get('/demo-software-apotek', function (req, res, next) {
  res.render('req-demo-apotek');
});
router.get('/demo-software-apotek-premise', function (req, res, next) {
    res.render('req-demo-apotek-premise');
});
// router.get('/demo-sistem-klinik-premium-clinica', function (req, res, next) {
//     res.render('req-demo-premium-clinica');
// });
router.get('/atur-jadwal-demo-aplikasi-klinik', function(req, res, next) {
  res.render('req-with-schedule');
});
router.get('/promo-closed', function(req, res, next) {
  res.render('req');
});
router.get('/terms-condition', function(req, res, next) {
  res.render('terms');
});


router.post('/reqfree', function(req, res, next) {
  const instance = axios.create({
    baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
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
      url         : req.body.url,
      frombutton  : "cta atur jadwal demo di faskes",
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
    baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
    timeout: 5000,
  });
  instance.post('/', {
    from: req.hostname,
    createdAt: new Date().toISOString(),

    data: {

      medname     : req.body.mname,
      usname      : req.body.uname,
      phonenumber : req.body.pnumber,
      email       : req.body.email,
      city        : req.body.city,
      mproduct    : req.body.mproduct,
      url         : req.body.url,
      frombutton  : "cta demo gratis",
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

router.post('/reqdemoapotek', function(req, res, next) {
    const instance = axios.create({
        baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
        timeout: 5000,
    });
    instance.post('/', {
        from: req.hostname,
        createdAt: new Date().toISOString(),
        data: {
            medname     : req.body.medname,
            usname      : req.body.usname,
            jabatan     : req.body.jabatan,
            phonenumber : req.body.phonenumber,
            email       : req.body.email,
            city        : req.body.city,
            referral    : req.body.referral,
            mproduct    : req.body.mproduct,
            url         : req.body.url,
            frombutton  : "cta demo apotek gratis",
        },
    }).then(result => {
        console.log(result.data);
        return res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
});

router.post('/reqdemoapotekpremise', function (req, res, next) {
    const instance = axios.create({
        baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
        timeout: 5000,
    });
    instance.post('/', {
        from: req.hostname,
        createdAt: new Date().toISOString(),
        data: {
            medname: req.body.medname,
            usname: req.body.usname,
            jabatan: req.body.jabatan,
            phonenumber: req.body.phonenumber,
            email: req.body.email,
            city: req.body.city,
            referral: req.body.referral,
            mproduct: req.body.mproduct,
            url: req.body.url,
            frombutton: 'cta demo apotek premise gratis',
        },
    }).then(result => {
        console.log(result.data);
        return res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
});

router.post('/reqdemopremiumclinica', function (req, res, next) {
    const instance = axios.create({
        baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
        timeout: 5000,
    });
    instance.post('/', {
        from: req.hostname,
        createdAt: new Date().toISOString(),
        data: {
            medname: req.body.medname,
            usname: req.body.usname,
            jabatan: req.body.jabatan,
            phonenumber: req.body.phonenumber,
            email: req.body.email,
            city: req.body.city,
            referral: req.body.referral,
            mproduct: req.body.mproduct,
            url: req.body.url,
            frombutton: req.body.frombutton,
        },
    }).then(result => {
        console.log(result.data);
        return res.redirect('/');
    }).catch(err => {
        console.error(err);
    });
});

router.post('/reqdemoclinicaforstarters', function (req, res, next) {
  const instance = axios.create({
      baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
      timeout: 5000,
  });
  instance.post('/', {
      from: req.hostname,
      createdAt: new Date().toISOString(),
      data: {
          medname: req.body.medname,
          usname: req.body.usname,
          jabatan: req.body.jabatan,
          phonenumber: req.body.phonenumber,
          email: req.body.email,
          city: req.body.city,
          mproduct: "Clinica For Starters",
          url: req.body.url,
          frombutton: "cta demo clinica for starters",
      },
  }).then(result => {
      console.log(result.data);
      return res.redirect('/');
  }).catch(err => {
      console.error(err);
  });
});

router.post('/reqdemohemoda', function (req, res, next) {
  const instance = axios.create({
      baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
      timeout: 5000,
  });
  instance.post('/', {
      from: req.hostname,
      createdAt: new Date().toISOString(),
      data: {
          medname: req.body.medname,
          usname: req.body.usname,
          jabatan: req.body.jabatan,
          phonenumber: req.body.phonenumber,
          email: req.body.email,
          city: req.body.city,
          mproduct: "Hemoda",
          url: req.body.url,
          frombutton: "cta demo hemoda",
      },
  }).then(result => {
      console.log(result.data);
      return res.redirect('/');
  }).catch(err => {
      console.error(err);
  });
});

router.post('/reqdemokelolaklinik', function (req, res, next) {
  console.log(req.body);
  const instance = axios.create({
      // production
      baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
    // dev
      // baseURL: 'https://reqaid.com/api/OutsideMessages',
  });
  instance.post('/', {
      from: req.hostname,
      createdAt: new Date().toISOString(),
      data: {
        usname: req.body.usname,
        jabatan: req.body.jabatan,
        phonenumber: req.body.phonenumber,
        medname: req.body.medname,
        email: req.body.email,
        type: req.body.type,
        city: req.body.city,
        mproduct: req.body.mproduct,
        message: req.body.message,
        url: req.body.url,
        frombutton: req.body.frombutton,
      },
  }).then(result => {
      console.log(result.data);
      return res.redirect('/');
  }).catch(err => {
      console.error(err);
  });
});

router.post('/reqdemoreferral', function (req, res, next) {
  console.log(req);
  const instance = axios.create({
    // production
      baseURL: 'https://api.medikaboo.com/api/OutsideMessages',
    // dev
      // baseURL: 'https://reqaid.com/api/OutsideMessages',
      timeout: 5000,
  });
  instance.post('/', {
      from: req.hostname,
      createdAt: new Date().toISOString(),
      data: {
          usname: req.body.usname,
          uscompany: req.body.uscompany,
          usemail: req.body.usemail,
          usphonenumber: req.body.usphonenumber,
          referralname: req.body.referralname,
          referralcompany: req.body.referralcompany,
          referralemail: req.body.referralemail,
          referralphonenumber: req.body.referralphonenumber,
          message: req.body.message,
          url: req.body.url,
          frombutton: req.body.frombutton,
      },
  }).then(result => {
      console.log(result.data);
      return res.redirect('/');
  }).catch(err => {
      console.error(err);
  });
});


// =======english page=======

router.get('/en', function(req, res, next) {
  res.render('index-en');
});
router.get('/software-products', function(req, res, next) {
  res.render('products-en');
});
router.get('/electronic-medical-record-sistem-aplikasi-klinik', function(req, res, next) {
  res.render('en/emr');
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

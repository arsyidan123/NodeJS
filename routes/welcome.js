function Welcome() {
    this.index = function (req,res,next) {
    res.render('welcome');
    }
    this.profile = function(req,res,next) {
    let data = {
    nama : "Arsyidan Suhaeli",
    alamat : "Cilacap",
    tgl : "5 Agustus 2021"
    }
    res.render("profile", data);
    }
    }
    module.exports = Welcome;
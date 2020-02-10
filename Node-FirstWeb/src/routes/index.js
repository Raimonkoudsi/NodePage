const express=require('express');
const router=express.Router();

router.get('/', (req, res) => {
    //el path es para arreglar la compatibilidad de rutas "/" y "\"
    //res.sendFile(path.join(__dirname, 'views/index.html'));

    res.render('index.html', {title: 'First Website'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact'});
});

module.exports = router;

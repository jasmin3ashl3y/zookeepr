const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.use(animalRoutes);

router.use(require('./zookeeperRoutes'));

module.exports = router;
import express from 'express';
var router = express.Router();

router.get('/tongue-twister', function(req, res, next) {
  res.send('a pied piper picked a peck of pickled peppers');
});

export default router;

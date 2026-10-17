import express from 'express';
var router = express.Router();

router.get('/leisha-exercise', function(req, res, next) {
  res.send('this is my lecture exercise 4!');
});

export default router;

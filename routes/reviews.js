const {
    index,
    show,
    create,
    update,
    destroy
  } = require('../controllers/reviews');
  const passport = require('passport');
  
  module.exports = router => {
    // localhost:4000/reviews
    router.get('/reviews', index);
  
    // localhost:4000/reviews/12345
    router.get('/reviews/:id', show);
  
    // localhost:4000/reviews
    router.post('/reviews', passport.authenticate('jwt', { session: false }), create);
  
    // localhost:4000/reviews/update
    router.post('/reviews/update', passport.authenticate('jwt', { session: false }), update);
  
    // localhost:4000/reviews/destroy
    router.post('/reviews/destroy', passport.authenticate('jwt', { session: false }), destroy);
  };

const {
    index,
    show,
    create,
    update,
    destroy
  } = require('../controllers/reviews2');
  const passport = require('passport');
  
  module.exports = router => {
    // localhost:4000/reviews
    router.get('/reviews2', index);
  
    // localhost:4000/reviews/12345
    router.get('/reviews2/:id', show);
  
    // localhost:4000/reviews
    router.post('/reviews2', passport.authenticate('jwt', { session: false }), create);
  
    // localhost:4000/reviews/update
    router.post('/reviews2/update', passport.authenticate('jwt', { session: false }), update);
  
    // localhost:4000/reviews/destroy
    router.post('/reviews2/destroy', passport.authenticate('jwt', { session: false }), destroy);
  };

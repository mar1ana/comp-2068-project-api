const {
    index,
    show,
    create,
    update,
    destroy
  } = require('../controllers/reviews4');
  const passport = require('passport');
  
  module.exports = router => {
    // localhost:4000/reviews
    router.get('/reviews4', index);
  
    // localhost:4000/reviews/12345
    router.get('/reviews4/:id', show);
  
    // localhost:4000/reviews
    router.post('/reviews4', passport.authenticate('jwt', { session: false }), create);
  
    // localhost:4000/reviews/update
    router.post('/reviews4/update', passport.authenticate('jwt', { session: false }), update);
  
    // localhost:4000/reviews/destroy
    router.post('/reviews4/destroy', passport.authenticate('jwt', { session: false }), destroy);
  };

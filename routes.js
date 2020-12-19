module.exports = router => {
  require('./routes/users')(router);
  require('./routes/sessions')(router);
  require('./routes/reviews')(router);
  require('./routes/reviews2')(router);
  require('./routes/reviews3')(router);
  require('./routes/reviews4')(router);

  return router;
};

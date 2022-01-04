const passport = require('passport');
// Antes de nuestras rutas debemos de colocar esto
app.use(passport.initialize());
// Rutas
routerApi(app);

const LocalStrategy = require('./strategies/local.strategy');

passport.use(LocalStrategy);
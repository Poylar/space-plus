import '../scss/app.scss';

function requireAll(r) { // get all svg
  r.keys().forEach(r);
}

requireAll(require.context('../images/svg/', true, /\.svg$/));

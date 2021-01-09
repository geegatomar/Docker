app.listen(3000, function () {
  console.log("app listening on port 3000!");
});

function connectWithRetry() {
  return sql.connect(config, (err) => {
    if (err) {
      debug(`Connection to DB failed, retry in 5s (${chalk.gray(err.message)})`);
      sql.close();
      setTimeout(connectWithRetry, 5000);
    } else {
      debug('Connection to DB is now ready...');
    }
 });
}
connectWithRetry();
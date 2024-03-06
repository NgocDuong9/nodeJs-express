const getHomePage = (req, res) => {
  //process data
  // call modal
  res.send("home");
};

const test = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  test,
};

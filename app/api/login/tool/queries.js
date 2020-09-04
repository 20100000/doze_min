const QLogin = "SELECT id, `name` FROM accounts WHERE email=? AND password=?";

module.exports.QLogin = QLogin;

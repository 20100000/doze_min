const _autenticar = async (req, res, next, model, jwt, config) => {
    console.log('aquiiiiiiiiiiiiiiiiiiiiiiiiiiiii',req.body)
    const {password, email } = req.body;
    try {
        const data = await model.getLogin(email, password);
        if(data.id){
            const id = data.id;
            const token = jwt.sign({id} , config.jwt.SECRET, {
                expiresIn: 86400
            });
            return res.send(JSON.stringify({success: true, token: token}));
        }else{
            res.status(400);
            return res.send(JSON.stringify({success: false, error: 'Usuário ou senha invalida'}));
        }

    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};
const getController = (model, jwt, config) => ({
    autenticar: (req, res, next) => _autenticar(req, res, next, model, jwt, config),

});

module.exports.getController = getController;

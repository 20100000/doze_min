import jwt from 'jsonwebtoken';
import config from './config';

module.exports = (req, res, next) => {
    const auth = req.headers.authorization;

    if(!auth){
        return res.status(401).send({ error: "sem tokem"})
    }

    const partAuth = auth.split('.');

    const partAuth2 = auth.split(' ');

    if(!partAuth.length === 3 || !partAuth2.length === 2){
        return res.status(401).send({ error: "tokem erro"})
    }

    const [ bearer, tk] = partAuth2

    if(!/^Bearer$/i.test(bearer)){
        return res.status(401).send({ error: "Insira o bearer no tokem"})
    }

    jwt.verify(tk, config.jwt.SECRET, (err, decoded) =>{
        if(err) return res.status(401).send({ error: "tokem invalido"})
        req.id = decoded.id;
        return next();

    })
}

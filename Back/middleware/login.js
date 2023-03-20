global.SECRET = "FIPP-UNOESTE-PRUDENTE";

import jwt from 'jsonwebtoken';

export default class Login {
    autenticar (req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, SECRET);
            req.usuario = decode;
            next();
        }
         catch (error) {
            res.status(401).send({ mensagem:"Falha na autenticação"})
        }
    }
    
}
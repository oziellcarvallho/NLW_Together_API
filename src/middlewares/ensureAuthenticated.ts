import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IpayLoad {
    sub: string;
};

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const token = request.headers.authorization;

    if (!token) {
        return response.status(401).json({message: "Missing Token"});
    };

    try {
        const { sub } = verify(token.split(" ")[1] , process.env.TOKEN) as IpayLoad;
        request.user_id = sub;
        return next();
    } catch ( err ) {
        return response.status(401).json({message: "Invalid Token"});
    };
};
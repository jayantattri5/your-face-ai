import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers?.["authorization"];
    const token = authHeader?.split(" ")[1];

    try {
        const decoded = jwt.decode(token, process.env.AUTH_JWT_KEY, {
            algorithms: ['RS256']
        })
        if (decoded?.sub) {
            // Set the userId first
            req.userId = decoded.sub;
            // Then call next()
            next();
        } else {
            res.status(403).json({
                message: "Error while decoding"
            })
        }
    } catch(e) {
        res.status(403).json({
            message: "Error while decoding"
        })
    }
}
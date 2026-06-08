import jwt from "jsonwebtoken";

const authMiddleware =
  (req, res, next) => {

    try {

      const bearerToken = req.headers.authorization?.split(' ')[1];
      const token = req.cookies.token || bearerToken;

      if (!token) {

        return res.status(401).json({

          message:
            "Unauthorized"

        });

      }

      const decoded =
        jwt.verify(

          token,
          process.env.JWT_SECRET
        );

      req.userId =
        decoded.id;

      next();

    } catch (error) {

      return res.status(401).json({

        message:
          "Invalid token"

      });

    }

};

export default authMiddleware;
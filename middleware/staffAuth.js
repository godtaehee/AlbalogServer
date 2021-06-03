import jwt from 'jsonwebtoken';
import Employee from '../models/user/employee';

const staffAuth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //직원이면 직원 로그인페이지로 리다이렉트
    // if(decoded.role === 'staff') return redirect('/staff')

    const user = await Employee.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.staff = user;
    next();
  } catch (err) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = staffAuth;
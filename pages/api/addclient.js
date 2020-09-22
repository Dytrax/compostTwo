import dbConnect from '../../utils/dbConect';
import Client from '../../utils/dbModels/Client'

import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
dbConnect();
//EndPoint to create a new User 
// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
      // Only allow requests with GET, POST and OPTIONS
      methods: ['GET', 'POST', 'OPTIONS'],
    })
  )
export default async (req, res) => {
    //Destructuring & GET the method
    await cors(req, res)
    const { method } = req;
    console.log(method)
   
    switch (method) {
        case 'POST':
                
                
                var userData = {
                    
                    email: req.body.email,
                    message: req.body.message,
                    
                }
                
                //Async function to create the User in mongoDB
                try{
                
                const client = await Client.create(userData);
                res.status(200).json({ success: true, data: client });
                } catch (error) {
                    res.status(400).json({ success: false,e:error });
                }
                ;
            break;
        case 'GET':
            try {
                const user = await User.find({})
                res.status(200).json({ success: true, data: user });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false,e:error });
            break;
    }
}
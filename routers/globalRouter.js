import express from "express"; 
import routes from "../routes"; 
import { home, postJoin, getJoin, getLogin, postLogin } from "../controllers/globalController";

const globalRouter = express.Router(); 

globalRouter.get(routes.home, home); 

//join 
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

//Login 
globalRouter.get(routes.login, getLogin); 
globalRouter.post(routes.login, postLogin);

export default globalRouter; 
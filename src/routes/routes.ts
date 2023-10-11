import { UserController } from "../controller/UserController";
import { AppRoutes } from "./app-routes";
import { UserRoutes } from "./user.routes";

export const Routes: AppRoutes[] = [...UserRoutes];

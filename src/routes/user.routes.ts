import { UserController } from "../controller/UserController";
import { AppRoutes } from "./app-routes";

export const UserRoutes: AppRoutes[] = [
  {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
  },
  {
    method: "patch",
    route: "/users/:id",
    controller: UserController,
    action: "update",
  },
];

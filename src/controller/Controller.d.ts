import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";

export default interface Controller {
  all: (req?: Request, res?: Response, next?: NextFunction) => any;
  one: (req: Request, res?: Response, next?: NextFunction) => any;
  save: (req: Request, res?: Response, next?: NextFunction) => any;
  remove: (req: Request, res?: Response, next?: NextFunction) => any;
  update: (req: Request, res?: Response, next?: NextFunction) => any;
}

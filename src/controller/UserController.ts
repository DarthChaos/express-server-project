import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";

import Controller from "./Controller";
import { Repository } from "typeorm";

export class UserController implements Controller {
  private userRepository = AppDataSource.getRepository(User);

  async all(
    request?: Request,
    response?: Response,
    next?: NextFunction,
  ): Promise<User[]> {
    return this.userRepository.find();
  }

  async one(
    request: Request,
    response?: Response,
    next?: NextFunction,
  ): Promise<User | string> {
    const id = parseInt(request.params.id);

    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      return "unregistered user";
    }
    return user;
  }

  async save(
    request: Request,
    response?: Response,
    next?: NextFunction,
  ): Promise<User> {
    const { firstName, lastName, age, active } = request.body;

    const user = Object.assign(new User(), {
      firstName,
      lastName,
      age,
      active,
    });

    return this.userRepository.save(user);
  }

  async remove(
    request: Request,
    response?: Response,
    next?: NextFunction,
  ): Promise<User | string> {
    const id = parseInt(request.params.id);

    let userToRemove = await this.userRepository.findOneBy({ id });

    if (!userToRemove) {
      return "this user not exist";
    }

    const removedUser = await this.userRepository.remove(userToRemove);

    return removedUser;
  }

  async update(
    request: Request,
    response?: Response,
    next?: NextFunction,
  ): Promise<User> {
    const id = parseInt(request.params.id);
    const body = request.body;

    const userToUpdate = await this.userRepository.findOne({ where: { id } });
    const user = Object.assign(userToUpdate, { ...body });

    return this.userRepository.save(user);
  }
}

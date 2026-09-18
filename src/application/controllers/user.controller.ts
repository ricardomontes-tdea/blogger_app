import { Request, Response } from "express";
import * as userService from "../../domain/services/user.service";

export const getAll = async (req: Request, res: Response) => {
  const users = await userService.getAll();
  res.json(users);
};

export const getById = async (req: Request, res: Response) => {
  const user = await userService.getById(req.params.id as string);
  res.json(user);
};

export const create = async (req: Request, res: Response) => {
  const user = await userService.create(req.body);
  res.status(201).json(user);
};

export const update = async (req: Request, res: Response) => {
  const user = await userService.update(req.params.id as string, req.body);
  res.json(user);
};

export const remove = async (req: Request, res: Response) => {
  await userService.remove(req.params.id as string);
  res.status(204).send();
};

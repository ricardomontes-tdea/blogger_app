import { Request, Response } from "express";
import * as commentService from "../../domain/services/comment.service";

export const getAll = async (req: Request, res: Response) => {
  const comments = await commentService.getAll();
  res.json(comments);
};

export const getById = async (req: Request, res: Response) => {
  const comment = await commentService.getById(req.params.id as string);
  res.json(comment);
};

export const create = async (req: Request, res: Response) => {
  const comment = await commentService.create(req.body);
  res.status(201).json(comment);
};

export const update = async (req: Request, res: Response) => {
  const comment = await commentService.update(req.params.id as string, req.body);
  res.json(comment);
};

export const remove = async (req: Request, res: Response) => {
  await commentService.remove(req.params.id as string);
  res.status(204).send();
};

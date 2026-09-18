import { Request, Response } from "express";
import * as blogService from "../../domain/services/blog.service";

export const getAll = async (req: Request, res: Response) => {
  const blogs = await blogService.getAll();
  res.json(blogs);
};

export const getById = async (req: Request, res: Response) => {
  const blog = await blogService.getById(req.params.id as string);
  res.json(blog);
};

export const create = async (req: Request, res: Response) => {
  const blog = await blogService.create(req.body);
  res.status(201).json(blog);
};

export const update = async (req: Request, res: Response) => {
  const blog = await blogService.update(req.params.id as string, req.body);
  res.json(blog);
};

export const remove = async (req: Request, res: Response) => {
  await blogService.remove(req.params.id as string);
  res.status(204).send();
};

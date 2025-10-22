import { Request, Response, NextFunction } from 'express'

export async function authenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  next()
}

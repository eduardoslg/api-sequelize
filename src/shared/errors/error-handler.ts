import { Request, Response } from 'express'

import { AppError } from './app-error'

export function errorHandler(error: Error, _: Request, response: Response) {
  if (error instanceof AppError) {
    return response.status(404).send({ message: error.message })
  }

  return response.status(500).send({ message: 'internal-server-error' })
}

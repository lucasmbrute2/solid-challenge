import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const user = this.createUserUseCase.execute({ name, email });
      return response.status(201).json({
        success: true,
        message: `User ${user.name} was created with successf!`,
      });
    } catch (error) {
      return response
        .status(404)
        .json({ message: `User could not be created. Error: ${error}` });
    }
  }
}

export { CreateUserController };

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const isUserAlreadyExists = this.usersRepository.findByEmail(email);

    if (isUserAlreadyExists) throw new Error("Mensagem do erro");

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };

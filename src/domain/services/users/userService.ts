import { User } from "../../models";
import { IUserRepository } from "../../models";

export interface IUserService {
  userRepository: IUserRepository;
}

export class UserService {
  private userRepository: IUserRepository;

  constructor(_userService: IUserService) {
    this.userRepository = _userService.userRepository;
  }

  public exists(user: User): boolean {
    const duplicatedUser = this.userRepository.findByName(user.name);
    return !!duplicatedUser;
  }
}

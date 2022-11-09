import { User } from "../domain";
import { InMemoryUserRepository, IUserRepository } from "../repository/user";

export interface IUserService {
  userRepository: IUserRepository;
}

export class UserService {
  private userRepository: IUserRepository;

  constructor(_userService: IUserService) {
    this.userRepository = _userService.userRepository;
  }

  public exists(user: User): boolean {
    const duplicatedUser = this.userRepository.findById(user.id);
    return !!duplicatedUser;
  }
}

// -----
// 具体的な処理
// -----

const userService = new UserService({
  userRepository: new InMemoryUserRepository(),
});

const user = new User({
  id: 1,
  name: "sample",
});

userService.exists(user);

import {
  IUser,
  IUserRepository,
  User,
  UserId,
  UserName,
} from "../../domain/models";
import { UserService } from "../../domain/services";
import { UserData } from "./userData";

export interface IUserApplicationService {
  userRepository: IUserRepository;
  userService: UserService;
}

export class UserApplicationService {
  private userRepository: IUserRepository;
  private userService: UserService;

  constructor(_userAppService: IUserApplicationService) {
    this.userRepository = _userAppService.userRepository;
    this.userService = _userAppService.userService;
  }

  public register(name: string) {
    const user = User.init(new UserName(name));
    if (user && this.userService.exists(user)) {
      throw Error(`${user}: ユーザーは既に存在しています`);
    }
    this.userRepository.save(user);
  }

  public get(userId: string): UserData | null {
    const user = this.userRepository.findById(new UserId(userId));
    if (!user) return null;
    return new UserData(user);
  }

  public update(updateUser: IUser): void {
    const user = this.userRepository.findById(updateUser.id);
    if (!user) {
      throw Error(`${updateUser}: ユーザーが存在しません`);
    }
    const newUser = user.changeName(updateUser.name);
    this.userRepository.save(newUser);
  }
}

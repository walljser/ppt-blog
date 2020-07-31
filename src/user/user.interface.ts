export interface UserData {
  id: number;
  username: string;
  nickname: string;
  realname: string;
  description: string;
  nd_code: string;
  email: string;
  avatar: string;
  sex: string;
  phone: string;
}

export interface UserRO {
  user: UserData;
}

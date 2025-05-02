export class User {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getUser(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }
}

export class Builder {
  public username: string = " ";
  public password: string = " ";

  setUsername(username: string): Builder {
    this.username = username;
    return this;
  }

  setPassword(password: string): Builder {
    this.password = password;
    return this;
  }

  build(): User {
    return new User(this.username, this.password);
  }
}

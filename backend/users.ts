export class User {
    constructor(public email: string,
                public name: string,
                private password: string){}
  
    matches(another: User): boolean {
      return another !== undefined &&
       another.email === this.email &&
       another.password === this.password
    }
  }

export const users: {[key: string]: User} = {
    "nik@go.com": new User("nik@go.com", 'Nikolas', "nik123"),
    "prih@go.com": new User("prih@go.com", 'Priscila', "prih123"),
}
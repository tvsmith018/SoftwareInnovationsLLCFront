export class Validator {
    emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    nameRegex = /^[a-zA-Z]+$/;
    phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    validate(type: string, expr: any): boolean {
      var valid: boolean;
      switch(type){
        case "email": {
          valid = this.emailRegex.test(expr);
          break;
        }
        case "name": {
          valid = this.nameRegex.test(expr);
          break;
        }
        case "phone": {
          valid = this.phoneRegex.test(expr)
          break;
        }
        default: {
          return false
        }
      }
      return valid
    }
}
  
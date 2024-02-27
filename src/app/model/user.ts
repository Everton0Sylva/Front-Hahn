export class User {
    Id: string = "";
    FullName: string = "";
    Company: string = "";
    Email: string = "";

    fromObj(data: any) {
        this.FullName = data.fullName ? data.fullName : data.fullname ? data.fullname : data.FullName ? data.FullName :  "";
        this.Company = data.company ? data.company : data.Company ? data.Company : "";
        this.Email = data.email ? data.email : data.Email ? data.Email : "";
        this.Email = data.email ? data.email : data.Email ? data.Email : "";
        this.Id = data.id ? data.id : data.Id ? data.Id : "";
    }
}

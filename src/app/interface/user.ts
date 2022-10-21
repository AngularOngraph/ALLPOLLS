export interface RegistrationPayload {
    fullname: string;
    email: string;
    password: string;
    cpassword: string;
}

export interface loginPayload {
    email: string;
    password: string;
}
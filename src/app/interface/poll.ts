export interface pollFormDetails {
    question: string;
    options: Array<options>;
}


export interface options {
    choice: string;
}


export interface apiResponse {
    success: Boolean;
    response: Object;
    msg: string;
}

export interface PollResponse {
    success: Boolean;
    response: Response;
    count : Number;
    msg: string;
}

export interface Response {
    question: Boolean;
    options: Response;
    status : Boolean

}


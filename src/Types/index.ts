// =================================== Types define here ===================================

// ************************* ResponseModel *****************************
export interface ResponseModel {
    id?: string;
    name?: string;
    job?: string;
}

// ************************* error *****************************
export interface ERROR{
    msg?:null|string;
}

// ************************* loginBody *****************************
export interface loginBody{
    email?:string;
    password?:string;
}

// ************************* registerBody *****************************
export interface registerBody{
    name:string;
    email:string;
    mobile:string|number;
}

// ************************* asyncData *****************************
export interface data{
    email:string;
    password:string;
}

// ************************* RegisterState *****************************
export interface RegisterState {
    value:any;
}

// ************************* dashboardData *****************************
export interface dashboardData{
    name:string|undefined;
    email:string|undefined;
    mobile:string|undefined;
}

// ************************* Posts *****************************
export interface Posts{
    data?:Array<[]>|any;
    id:string;
    text:string;
    image:string;
}

// ************************* ApiCall *****************************
export interface apiData{
    data: object|any|null;
    isLoading: boolean;
    error: string|null;
}

// ************************* drawerMenu *****************************
export interface drawerMenu{
    name:string;
    image:object|string;
    isActive:boolean;
    screen:string;
}

// ************************* drawerSelect *****************************
export interface drawerSelect{
    name:string;
    screen:string;
}
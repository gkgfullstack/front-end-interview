export interface ApiInfo {
    title: string;
    description: string;
    'x-logo': {
      url: string;
    };
    contact?: {
      email?: string;
      name?: string;
      url?: string;
    };
  }
  
  export interface ApiDetail {
    added: string;
    info: ApiInfo;
    updated: string;
    swaggerUrl: string;
    [key: string]: any;
  }
  
  export interface ApiResponse {
    apis: { [key: string]: ApiDetail };
  }
  
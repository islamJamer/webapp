import { RouteHandler, RouteMatcher } from "cypress/types/net-stubbing";

export type RequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export type RequestOptions = {
    method: RequestMethod,
    url: RouteMatcher;
    response?: RouteHandler;
}

export type TodoObj = {
    id?: string,
    isComplete: Boolean;
    name: string;
}
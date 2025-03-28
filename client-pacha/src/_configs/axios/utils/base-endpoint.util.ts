import { AxiosInstance } from "axios";

interface ApiInstances {
    base: AxiosInstance;
    user: AxiosInstance;
    admin: AxiosInstance;
    recovery: AxiosInstance;
};

class BaseEndpoint {
    /**
     * [🇺🇸]
     * The `api` property is an object whose properties return an instance of `AxiosInstance`, these determine the type of interaction with the API:
        * - `api`.`base` => return an instance of `axios create` without a token.
        * - `api`.`user`  => return an instance of `axios create` with a user token.
        * - `api`.`admin` => return an instance of `axios create` with an admin token.
        * - `api`.`recovery` => return an instance of `axios create` with a recovery token.
     * 
     * [🇪🇸]
     * La propiedad `api` es un objeto cuyas propiedades devuelven una instancia de `AxiosInstance`, estas determinan el tipo de interacción con la API:
     * - `api`.`base` => devuelve una intancia de `axios create` sin un token.
     * - `api`.`user`  => devuelve una intancia de `axios create` con un token de usuario.
     * - `api`.`admin` => devuelve una intancia de `axios create` con un token de administrador.
     * - `api`.`recovery` => devuelve una intancia de `axios create` con un token de recuperación.
     */
    protected readonly api: ApiInstances;

    constructor(api: ApiInstances) {
        this.api = api;
    }
};

export default BaseEndpoint;
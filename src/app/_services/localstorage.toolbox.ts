import {CurrentUser} from '../_models/current-user';

/**
 * Toolbox pour la gestion du localStorage
 */
export class LocalStorageToolBox {
    /** Nom de la variable qui contient les infos sur le user courant */
    public static CURRENT_USER = 'currentUser';

    /** Nom de la variable qui contient le customer */
    public static CUSTOMER = 'customer';


    /**
     * Méthode qui permet d'effacer les infos du local storage
     */
    public static cleanLocalStorage() {
        localStorage.removeItem(this.CURRENT_USER);
        localStorage.removeItem(this.CUSTOMER);
    }

    /**
     * Permet de recuperer le user courant
     */
    public static getCurrentUser(): CurrentUser {
        return JSON.parse(localStorage.getItem(LocalStorageToolBox.CURRENT_USER)) as CurrentUser;
    }

    /**
     * Permet de recuperer le token JWT
     */
    public static getTokenJWT(): string {
        const user = LocalStorageToolBox.getCurrentUser();
        if (user) {
            return user.token;
        }
    }

    /**
     * Permet de mettre a jour le user courant
     * @param user : CurrentUser
     */
    public static setCurrentUser(user: CurrentUser) {
        localStorage.setItem(LocalStorageToolBox.CURRENT_USER, JSON.stringify(user));
    }


    /**
     * Permet de récuperer une variable
     */
    public static getData(name: string) {
        return JSON.parse(localStorage.getItem(name));
    }


    /**
     * Permet de stocker une variable
     * @param data : La variable a stocker
     * @param name : Le nom de la variable
     */
    public static setData(data: any, name: string) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    /**
     * Permet de supprimer une variable
     * @param name : Nom de la variable à supprimer
     */
    public static cleanData(name: string) {
        localStorage.removeItem(name);
    }

}

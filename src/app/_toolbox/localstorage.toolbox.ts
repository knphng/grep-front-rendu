

/**
 * Toolbox pour la gestion du localStorage
 */
export class LocalStorageToolBox {
    /**
     * Méthode qui permet d'effacer les infos du local storage
     */
    public static cleanLocalStorage() {
        localStorage.clear();
    }

    /**
     * Permet de récuperer une variable
     */
    public static getData(name: string) {
        if (localStorage && localStorage.getItem(name)) {
            return JSON.parse(localStorage.getItem(name));
        }
    }


    /**
     * Permet de stocker une variable
     * @param data : La variable a stocker
     * @param name : Le nom de la variable
     */
    public static setData(data: any, name: string) {
        if (localStorage && name && data) {
            localStorage.setItem(name, JSON.stringify(data));
        }
    }

    /**
     * Permet de supprimer une variable
     * @param name : Nom de la variable à supprimer
     */
    public static cleanData(name: string) {
        if (localStorage && name) {
            localStorage.removeItem(name);
        }
    }
}

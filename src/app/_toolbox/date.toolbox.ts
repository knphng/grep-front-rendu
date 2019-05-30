import { DatePipe } from '@angular/common';


export class DateToolbox {
    /** Format par defaut */
    public static FORMAT_DATE = 'dd-MM-yyyy à HH:mm';

    /**
     * Format la date passée en paramètre avec le formateur
     * @param date : La date a formater
     * @param format : Le format
     */
    public static formateDateWithFormat(date: Date, format: string): string {
        const pipe = new DatePipe('en-US'); // Use your own locale
        const myFormattedDate = pipe.transform(date, format);
        return myFormattedDate;
    }

    /**
    * Format la date passée en paramètre avec le formateur
    * @param date : La date a formater
    * @param format : Le format
    */
    public static formateStringDateWithFormat(date: string, format: string): string {
        const val = new Date(date);
        if (val) {
            return DateToolbox.formateDateWithFormat(val, format);
        }
    }

    /**
     * Formate la date passée en parametre avec le format par défaut
     * @param date : La date à formater
     * @returns string contenant la date formater
     */
    public static formateDate(date: Date): string {
        return DateToolbox.formateDateWithFormat(date, DateToolbox.FORMAT_DATE);
    }


    /**
     * Permet de savoir si une date est inclu dans un interval
     * @param date : La date à tester
     * @param start : La date de début. Peut être null
     * @param end : La date de fin. Peut être null
     */
    public static isInDateRange(date: Date, start: Date, end: Date) {
        // S'il y a une periode mais qu'il n'y a pas de date, alors il n'est pas dans l'interval
        if (!date && (start || end)) {
            return false;
        }
        if (start) {
            if (date.getTime() < start.getTime()) {
                return false;
            }
        }
        if (end) {
            if (date.getTime() > end.getTime()) {
                return false;
            }
        }
        return true;
    }

    /**
     * Permet de mettre l'heure d'une date a minuit
     * @param date : La date a modifier
     */
    public static setMidnight(date: Date): Date {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    }



}

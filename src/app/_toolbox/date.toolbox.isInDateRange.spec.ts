import { DateToolbox } from './date.toolbox';

describe('DateToolBox.isInDateRange', () => {
    beforeEach(() => {

    });

    it('Existe', () => {
        expect(DateToolbox.isInDateRange).toBeDefined();
    });

    it('Dans l\'interval', () => {
        const date = new Date('10/10/1984');
        const start = new Date('10/10/1983');
        const end = new Date('10/10/1985');
        expect(DateToolbox.isInDateRange(date, start, end)).toBeTruthy();
    });

    it('Hors interval', () => {
        const date = new Date('10/10/1984');
        const start = new Date('10/10/1987');
        const end = new Date('10/10/1985');
        expect(DateToolbox.isInDateRange(date, start, end)).toBeFalsy();
    });

    it('Sans date', () => {
        const date = undefined;
        const start = new Date('10/10/1983');
        const end = new Date('10/10/1985');
        expect(DateToolbox.isInDateRange(date, start, end)).toBeFalsy();
    });

    it('Sans date ni periode', () => {
        const date = undefined;
        const start = undefined;
        const end = undefined;
        expect(DateToolbox.isInDateRange(date, start, end)).toBeTruthy();
    });

    it('Juste date de début de période', () => {
        const date = undefined;
        const start = new Date('10/10/1983');
        const end = undefined;
        expect(DateToolbox.isInDateRange(date, start, end)).toBeFalsy();
    });

    it('Juste date de fin de période', () => {
        const date = undefined;
        const start = undefined;
        const end = new Date('10/10/1983');
        expect(DateToolbox.isInDateRange(date, start, end)).toBeFalsy();
    });




});

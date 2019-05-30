import {ServiceToolbox} from './service-toolbox';

describe('ServiceToolbox', () => {
    it('S\'initialise correctement avec le nom de la classe', () => {
        const toolbox = new ServiceToolbox('MaClasse', null, null);
        expect(toolbox.className).toEqual('MaClasse');
    });

    it('should return the former state', () => {

        // const result = someReducer({}, { type: 'autre' });
        // expect(result).toEqual({});

    });

});


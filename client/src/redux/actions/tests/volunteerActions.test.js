import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import VolunteerActions from '../volunteerActions';

describe('volunteerActions.js', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore();
    const mockAxios = new MockAdapter(axios);

    afterEach(() => {
        mockAxios.reset();
    });

    describe('filter', () => {
        it('adds access level to filter', async () => {
            let requestFilter;
            mockAxios.onPost('/api/admins/filter').reply(config => {
                requestFilter = config.data;
                return [200];
            });
            await store.dispatch(VolunteerActions.filter());
            const expectedFilter = { accessLevel: 'Volunteer' };
            expect(JSON.parse(requestFilter)).toEqual(expectedFilter);
        });
    });

    describe('create', () => {
        it('adds access level to data', async () => {
            let requestData;
            mockAxios.onPost('/api/admins/').reply(config => {
                requestData = config.data;
                return [200];
            });

            await store.dispatch(VolunteerActions.create({}));
            const expectedData = { accessLevel: 'Volunteer' };
            expect(JSON.parse(requestData)).toEqual(expectedData);
        });
    });
});

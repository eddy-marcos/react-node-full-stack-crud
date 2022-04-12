import fetchMock from 'fetch-mock';
import { testAPIAction, testAPICallStarted, testAPICallSuccess } from '../testUtils/actionCreators';
import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';


const mockStore = configureStore([thunkMiddleware]);


test('check Api Action', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const testData = {id: 1};
    fetchMock.get('*', testData);

    const actionResult = store.dispatch(testAPIAction())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual(testAPICallStarted());
            expect(actions[1]).toEqual(testAPICallSuccess(testData));
        });

        fetchMock.restore();
        return actionResult;
});

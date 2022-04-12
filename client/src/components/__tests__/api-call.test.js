import fetchMock from 'fetch-mock';
import { testData } from '../testUtils/testData';
import { testApiCall } from '../testUtils/testAPI';

test('check API call', () => {
    fetchMock.get('*', testData);

    const apiResult = testApiCall().then(response => {
        expect(response).toBeTruthy();
        expect(response).toHaveProperty('_id');
        expect(response).toHaveProperty('title');
        expect(response).toHaveProperty('status');
        expect(response).toHaveProperty('createdAt');

    })

    fetchMock.restore();
    return apiResult;

});


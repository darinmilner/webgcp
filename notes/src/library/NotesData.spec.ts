import * as notesData from './NotesData';

describe('NotesData Tests', () => {
  const expectedData = JSON.parse(`[
    {
      "id": "1",
      "datetime": "2021-03-06T10:10Z",
      "title": "Note 1"
    },
    {
      "id": "1",
      "datetime": "2021-03-07T10:11Z",
      "title": "Note 2"
    },
    {
      "id": "1",
      "datetime": "2021-03-09T10:11Z",
      "title": "Note 3"
    },
    {
      "id": "1",
      "datetime": "2021-03-12T10:13Z",
      "title": "Note 4"
    }
  ]`);
  test('getList returns expected data', async () => {
    expect(notesData.getList()).toEqual(expectedData);
  });
});

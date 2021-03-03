import * as notesData from './NotesData';

describe('NotesData Tests', () => {
  test('getList returns expected data', async () => {
    expect(notesData.getList()).toEqual('Hello List');
  });
});

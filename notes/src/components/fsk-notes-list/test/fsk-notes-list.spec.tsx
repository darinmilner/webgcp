import { newSpecPage } from '@stencil/core/testing';

jest.mock("../../../library/NotesData.ts", () => ({
  getList: () => 
  JSON.parse(
    `[
  {
    "id":"1","datetime":"2021-03-06T10:10Z","title":"Note 1"
  },
  {
    "id":"1","datetime":"2021-03-07T10:11Z","title":"Note 2"
  },
  {
    "id":"1","datetime":"2021-03-09T10:11Z","title":"Note 3"
  },
  {
    "id":"1","datetime":"2021-03-12T10:13Z","title":"Note 4"
  }
]`
  )
}));
import { FskNotesList } from '../fsk-notes-list';

describe('fsk-notes-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FskNotesList],
      html: `<fsk-notes-list></fsk-notes-list>`,
    });
    expect(page.root).toEqualHtml(`
      <fsk-notes-list>
        <mock:shadow-root>
          <div>
            <div>Notes List</div>
              <table>
                <thead>
                   <tr>
                      <th>#</th>
                      <th>Date/Time</th>
                      <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2021-03-06T10:10Z</td>
                    <td>Note 1</td>
                 </tr>
                  <tr>
                    <td>2</td>
                    <td>2021-03-07T10:11Z</td>
                    <td>Note 2</td>
                  </tr>
                    <tr>
                    <td>3</td>
                    <td>2021-03-09T10:11Z</td>
                    <td>Note 3</td>
                  </tr>
                    <tr>
                    <td>4</td>
                    <td>2021-03-12T10:13Z</td>
                    <td>Note 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </mock:shadow-root>
      </fsk-notes-list>
    `);
  });
});

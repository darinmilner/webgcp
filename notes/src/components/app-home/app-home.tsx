import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  /**
   * Added state to render content of the note
   */
  @State() noteDisplay = "";
  /**
   * Event handler for selectedNote
   * @param event
   */
  @Listen("selectedNote")
  onSelectedNote(event: CustomEvent) {
    this.noteDisplay = <fsk-note note-id={event.detail}></fsk-note>
  }
  render() {
    return (
      <div class="app-home">
        <fsk-notes-list></fsk-notes-list>
        {this.noteDisplay}
      </div>
    );
  }
}

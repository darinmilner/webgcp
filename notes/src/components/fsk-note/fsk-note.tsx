import { Component, h, Prop } from '@stencil/core';

/**
 * Displays a Note
 */
@Component({
  tag: 'fsk-note',
  styleUrl: 'fsk-note.css',
  shadow: true,
})
export class FskNote {

  @Prop() noteId: number;
  render() {
    return (
     <div class="fsk-note">
       <div class="fsk-note-content">
         Now displaying note: {this.noteId} <br/>
         This is your note!! 
         <br/>
          This is your note!! 
         
         </div>
         </div>
    );
  }

}

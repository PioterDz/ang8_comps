import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'Because it is.' },
    { title: 'What is orange?', content: 'It is fruit.' },
    { title: 'What color is that cat?', content: 'It\'s black and yellow' }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}

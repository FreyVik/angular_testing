import { Component, OnInit } from '@angular/core';
import { ContactUser } from 'src/app/models/contact-user';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public user: ContactUser
  constructor() {
    this.user = new ContactUser('','','','')
  }

  onSubmit(form: any) {
    console.log(this.user);
    
    form.reset()
  }

  ngOnInit(): void {
  }
}

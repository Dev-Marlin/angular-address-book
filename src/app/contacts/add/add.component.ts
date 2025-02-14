import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../../models/contact'

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactsService,
    private readonly router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  addContact(): void{
    const newContact: Contact = {
      id: 0,
      name: this.contactForm.value.name,
      address: this.contactForm.value.address,
      phone: this.contactForm.value.phone
    };

    this.contactService.addContact(newContact);
    this.contactForm.reset();

    //CHANGE THIS
    this.router.navigate(['/contacts']);
  }

}

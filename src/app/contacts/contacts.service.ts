import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Contacts } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})

export class ContactsService {
  public contacts: Contact[] = Contacts;

  public addContact(contact: Contact): void {
    contact.id = this.contacts.length+1;
    this.contacts.push(contact);
  }

  public GetCotnactById(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id == id);
  }
}

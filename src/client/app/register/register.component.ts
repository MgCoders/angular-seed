import { Component } from '@angular/core';
import { Person } from '../_models/person';

@Component({
  moduleId: module.id,
  selector: 'sd-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})


export class RegisterComponent  {
  persons: Person[] = [];
  counter = 0;
  person: Person;

  onSubmit(value) {
    this.person = new Person(value.name, value.email, value.age);
    if(value) {
      this.persons.push(this.person);
    }
    this.counter++;
  }
}

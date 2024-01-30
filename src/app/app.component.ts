import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kuskus-text';
  input = new FormControl('');
  output = new FormControl('');

  convert() {
    const text = this.input.value ?? '';
    const reversedText = text.split('').reverse().join('');
    const reversedTextSplit = reversedText.toLowerCase().split('');
    for (let i = 0; i < reversedTextSplit.length; i++) {
      if (i % 2 !== 0) {
        reversedTextSplit[i] = reversedTextSplit[i].toUpperCase();
      }
    }
    this.output.setValue(reversedTextSplit.join(''));
  }
}

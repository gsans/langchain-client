import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot';

  constructor(public http: HttpClient) {}

  callChatGPT(){
    const endpoint = 'predict';
    const prompt = { text: "What would be a good company name for a company that makes colorful socks?" };

    this.http.post(endpoint, prompt)
      .subscribe(response => {
        console.log(response);
      });
  }

  callPaLM(){
    const endpoint = 'generateText';
    const prompt = { text: "What would be a good company name for a company that makes colorful socks?" };

    this.http.post(endpoint, prompt)
      .subscribe(response => {
        console.log(response);
      });
  }

  callVertexAI(){
    const endpoint = 'predictText';
    const prompt = { text: "What would be a good company name for a company that makes colorful socks?" };

    this.http.post(endpoint, prompt)
      .subscribe(response => {
        console.log(response);
      });
  }
}

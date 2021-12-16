import { Component } from '@angular/core';
import { JSONFromHTML } from './interfaces/json-from-html.interface';
import htmlOnJsonStructure from '../assets/html.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  htmlConverted = '';
  textConverted = '';

  htmlOnJson: JSONFromHTML = htmlOnJsonStructure;

  constructor(){
    console.log(this.htmlOnJson);
    this.htmlConverted = this.parseJsonStructureToHtml(this.htmlOnJson);
    this.textConverted = this.parseJsonStructureToText(this.htmlOnJson);
  }  


  parseJsonStructureToHtml(node: JSONFromHTML):string {
    var html: string = '';
    if (node.children.length > 0) {
      if (this.isValidTag(node.tag)) {
        html += `<${node.tag}>`;        
      }
      node.children.forEach(element => {
        html += `${this.parseJsonStructureToHtml(element)}`;
      });
      if (this.isValidTag(node.tag)) {
        html += `</${node.tag}>`;
      }
    } else {
      if (this.isValidTag(node.tag)) {
        html += `<${node.tag}>${node.text}</${node.tag}>`;
      }
    }
    return html;
  }

  parseJsonStructureToText(node: JSONFromHTML):string {
    var html: string = '';
    if (node.children.length > 0) {
      node.children.forEach(element => {
        html += `${this.parseJsonStructureToText(element)}`;
      });
    } else {
      if (this.isValidTag(node.tag)) {
        html += `${node.text} `;
      }
    }
    return html;
  }

  isValidTag(tag: string | null):boolean {
    if (tag && tag != 'html' && tag != 'body' && tag != 'head') {
      return true;
    }
    return false;
  }
}

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JSONFromHTML } from './interfaces/json-from-html.interface';
import htmlOnJsonStructure from './html.json';


let htmlConverted = '';
let textConverted = '';

let htmlOnJson: JSONFromHTML = htmlOnJsonStructure;

function App() {
  htmlConverted = parseJsonStructureToHtml(htmlOnJson);
  textConverted = parseJsonStructureToText(htmlOnJson);

  return (
    <div className="App">
      <h2>JSON</h2>
      <hr></hr>
      <pre>{JSON.stringify(htmlOnJson, undefined, 2)}</pre>
      <h2>TEXT</h2>
      <hr></hr>
      {textConverted}
      <h2>HTML</h2>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: htmlConverted }} />
    </div>
  );
}

function parseJsonStructureToHtml(node: JSONFromHTML):string {
  var html: string = '';
  if (node.children.length > 0) {
    if (isValidTag(node.tag)) {
      html += `<${node.tag}>`;        
    }
    node.children.forEach(element => {
      html += `${parseJsonStructureToHtml(element)}`;
    });
    if (isValidTag(node.tag)) {
      html += `</${node.tag}>`;
    }
  } else {
    if (isValidTag(node.tag)) {
      html += `<${node.tag}>${node.text}</${node.tag}>`;
    }
  }
  return html;
}

function parseJsonStructureToText(node: JSONFromHTML):string {
  var html: string = '';
  if (node.children.length > 0) {
    node.children.forEach(element => {
      html += `${parseJsonStructureToText(element)}`;
    });
  } else {
    if (isValidTag(node.tag)) {
      html += `${node.text} `;
    }
  }
  return html;
}

function isValidTag(tag: string | null):boolean {
  if (tag && tag != 'html' && tag != 'body' && tag != 'head') {
    return true;
  }
  return false;
}
export default App;

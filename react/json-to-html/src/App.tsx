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

  console.warn('htmlConverted');
  console.log(htmlConverted);

  console.warn('textConverted');
  console.log(textConverted);

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
      <span dangerouslySetInnerHTML={{ __html: htmlConverted }} />
    </div>
  );
}

function parseJsonStructureToHtml(node: JSONFromHTML):string {
  var html: string = '';
  if (node.Children.length > 0) {
    if (isValidTag(node.Tag)) {
      html += `<${node.Tag}>`;        
    }
    node.Children.forEach(element => {
      html += `${parseJsonStructureToHtml(element)}`;
    });
    if (isValidTag(node.Tag)) {
      html += `</${node.Tag}>`;
    }
  } else {
    if (isValidTag(node.Tag)) {
      html += `<${node.Tag}>${node.Text}</${node.Tag}>`;
    } else {
      html += `${node.Text}`;
    }
  }
  return html;
}

function parseJsonStructureToText(node: JSONFromHTML):string {
  var text: string = '';
  if (node.Children.length > 0) {
    node.Children.forEach(element => {
      text += `${parseJsonStructureToText(element)}`;
    });
  } else {
    // if (isValidTag(node.Tag)) {
      text += `${node.Text} `;
    // }
  }
  return htmlEntities(text.replace(/<[^>]+>/g, ''));
}

function isValidTag(tag: string | null):boolean {
  if (tag && tag != 'html' && tag != 'body' && tag != 'head') {
    return true;
  }
  return false;
}

function htmlEntities(str:string):string {
  return String(str).replace('&ntilde;', 'ñ')
                    .replace('&Ntilde;', 'Ñ')
                    .replace('&amp;', '&')
                    .replace('&Ntilde;', 'Ñ')
                    .replace('&ntilde;', 'ñ')
                    .replace('&Ntilde;', 'Ñ')
                    .replace('&Agrave;', 'À')
                    .replace('&Aacute;', 'Á')  
                    .replace('&Acirc;','Â')
                    .replace('&Atilde;','Ã')   
                    .replace('&Auml;','Ä')
                    .replace('&Aring;','Å')
                    .replace('&AElig;','Æ')
                    .replace('&Ccedil;','Ç')
                    .replace('&Egrave;','È')
                    .replace('&Eacute;','É')
                    .replace('&Ecirc;', 'Ê')
                    .replace('&Euml;','Ë')
                    .replace(   '&Igrave;', 'Ì')
                    .replace('&Iacute;', 'Í'    )
                    .replace('&Icirc;', 'Î' )
                    .replace(   '&Iuml;', 'Ï')
                    .replace(   '&ETH;', 'Ð')
                    .replace(   '&Ntilde;', 'Ñ')
                    .replace(   '&Ograve;', 'Ò')
                    .replace(   '&Oacute;', 'Ó')
                    .replace('&Ocirc;', 'Ô' )
                    .replace(   '&Otilde;', 'Õ')
                    .replace('&Ouml;', 'Ö'  )
                    .replace('&Oslash;', 'Ø'    )
                    .replace(   '&Ugrave;' ,'Ù')
                    .replace(   '&Uacute;', 'Ú')
                    .replace(   '&Ucirc;', 'Û')
                    .replace(   '&Uuml;', 'Ü')
                    .replace(   '&Yacute;', 'Ý')
                    .replace('&THORN;', 'Þ' )
                    .replace(   '&szlig;', 'ß')
                    .replace(   '&agrave;', 'à')
                    .replace(   '&aacute;', 'á')
                    .replace(   '&acirc;', 'â')
                    .replace(   '&atilde;', 'ã')
                    .replace('&auml;', 'ä'  )
                    .replace(   '&aring;', 'å')
                    .replace(   '&aelig;', 'æ')
                    .replace(   '&ccedil;', 'ç')
                    .replace('&egrave;', 'è'    )
                    .replace('&eacute;', 'é'    )
                    .replace('&ecirc;', 'ê' )
                    .replace('&euml;', 'ë'  )
                    .replace(   '&igrave;', 'ì')
                    .replace('&iacute;', 'í'    )
                    .replace('&icirc;', 'î' )
                    .replace('&iuml;', 'ï'  )
                    .replace('&eth;', 'ð'   )
                    .replace(   '&ntilde;', 'ñ')
                    .replace('&ograve;','ò')
                    .replace('&oacute;','ó')
                    .replace('&ocirc;','ô')
                    .replace('&otilde;','õ')
                    .replace('&ouml;','ö')
                    .replace('&oslash;','ø')
                    .replace('&ugrave;','ù')
                    .replace('&uacute;','ú')
                    .replace('&ucirc;','û')
                    .replace('&uuml;' , 'ü')   
                    .replace('&yacute;', 'ý')  
                    .replace('&thorn;', 'þ')
                    .replace('&yuml;', 'ÿ');
}

export default App;

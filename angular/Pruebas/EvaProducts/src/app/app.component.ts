import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { JSONFromHTML } from './interfaces/json-from-html.interface';
import { ProductResponse, CoveragesValue, DeductiblesValue, AssistancesValue } from './interfaces/product-response.interface';
import { productResponse } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EvaProducts';
  productIndex:number = 0;

  product:JSONFromHTML = undefined!;
  evaResponse:ProductResponse = productResponse;
  htmlConverted:string = '';
  textConverted:string = '';

  coveragesArray:string[] = [];
  deductiblesArray:string[] = [];
  exclusionsArray:string[] = [];
  assistancesArray:string[] = [];

  constructor(httpClient: HttpClient) {
      console.log(this.evaResponse);
      // this.product = JSON.parse(this.evaResponse.result.$values[0].coverages.$values[this.productIndex].description);
  
      this.evaResponse.result.$values[this.productIndex].coverages.$values.forEach((x:CoveragesValue) => {
        // console.log(x.code);
        // console.log(x.description);
        this.coveragesArray.push(this.parseJsonStructureToHtml(JSON.parse(x.description)[0]));
      });

      this.evaResponse.result.$values[this.productIndex].exclusions.$values.forEach((x:DeductiblesValue) => {
        // console.log(x.code);
        // console.log(x.description);
        this.exclusionsArray.push(this.parseJsonStructureToHtml(JSON.parse(x.description)[0]));
      });

      this.evaResponse.result.$values[this.productIndex].deductibles.$values.forEach((x:DeductiblesValue) => {
        // console.log(x.code);
        // console.log(x.description);
        this.deductiblesArray.push(this.parseJsonStructureToHtml(JSON.parse(x.description)[0]));
      });

      this.evaResponse.result.$values[this.productIndex].assistances.$values.forEach((x:AssistancesValue) => {
        // console.log(x.code);
        // console.log(x.description);
        this.assistancesArray.push(this.parseJsonStructureToHtml(JSON.parse(x.description)[0]));
      });

    // httpClient.get<ProductResponse>('https://des-api-eva.novaecuador.com/product/api/product?withDetails=false', this.getHeadersRequest()).subscribe((response:ProductResponse) => {
    //   console.log(response);
    //   this.product = JSON.parse(response.result.$values[0].coverages.$values[0].description);
    //   this.htmlConverted = this.parseJsonStructureToHtml(this.product);
    //   this.textConverted = this.parseJsonStructureToText(this.product);
  
    //   response.result.$values[0].coverages.$values.forEach((x:CoveragesValue) => {
    //     console.log(x.code);
    //     console.log(x.description.replace('"', '\"'));
    //     let xxx = x.description.replace(/['"]+/g, '');
    //     let desc:JSONFromHTML = JSON.parse(xxx);
    //     // this.htmlConvertedArray.push(this.parseJsonStructureToHtml(desc));
    //     debugger
    //   });
    // });
  }

  parseJsonStructureToHtml(node: JSONFromHTML):string {
    // debugger
    console.log(node.Children.length);
    var html: string = '';
    if (node.Children.length > 0) {
      if (this.isValidTag(node.Tag)) {
        html += `<${node.Tag}>`;        
      }
      node.Children.forEach(element => {
        html += `${this.parseJsonStructureToHtml(element)}`;
      });
      if (this.isValidTag(node.Tag)) {
        html += `</${node.Tag}>`;
      }
    } else {
      if (this.isValidTag(node.Tag)) {
        html += `<${node.Tag}>${node.Text}</${node.Tag}>`;
      }
    }
    return html;
  }

  parseJsonStructureToText(node: JSONFromHTML):string {
    var html: string = '';
    if (node.Children.length > 0) {
      node.Children.forEach(element => {
        html += `${this.parseJsonStructureToText(element)}`;
      });
    } else {
        html += `${node.Text} `;
    }
    return html;
  }

  isValidTag(Tag: string | null):boolean {
    if (Tag && Tag != 'html' && Tag != 'body' && Tag != 'head') {
      return true;
    }
    return false;
  }  

  private getHeadersRequest():{ headers:HttpHeaders } {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': '*'
    }
    
    return { headers: new HttpHeaders(headerDict) };
  }

}


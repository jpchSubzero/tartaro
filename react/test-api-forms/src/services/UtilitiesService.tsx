import { IJSONFromHTML } from "../interfaces/products/jsonFromHtml.interface";
import DOMPurify from 'dompurify';
import parse, { DOMNode, domToReact } from 'html-react-parser';
import { environment } from "../environments/environment";

export const stringFormat = (template:string, fields:string[]):string => {
    for (let i = 0; i < fields.length; i++) {
        template = template.replace(`{${i}}`, fields[i]);
    }
    return template;
}

/**
 * Constant to remmove element "P"
 */
 export const optionRemoveRootParrNode = {
	replace: ({ name, children }:{ name:string, children:DOMNode[] }) => {
		if (name === 'p') {
			return <>{domToReact(children)}</>;
		}
	}
};

/**
 *
 * @param noFormedData Data to be converted to HTML
 * @param options Options in case of conversion or replacement of elements when executing the conversion
 * @param formed True / false to convert data to interface format
 * @returns Elment HTML
 */
export const parseJsonToHtml = (noFormedData:string, options:any = undefined, formed = true) => {
	let htmlOnJson: IJSONFromHTML = (formed) ? JSON.parse(noFormedData) : noFormedData;
	let htmlConverted = parseJsonStructureToHtml(htmlOnJson);

	return (options !== undefined) ? parse(DOMPurify.sanitize(htmlConverted), options) : parse(DOMPurify.sanitize(htmlConverted));
}

function parseJsonStructureToHtml(node: IJSONFromHTML): string {
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
		}
	}
	return html;
}

export const getJsonElementToText = (
	noFormedData:any,
	preferentPosition:number
) => {

	let jsonListItemsDescription = JSON.parse(
		noFormedData
	);

	let preferentItem = (jsonListItemsDescription.length >= 1 &&
		preferentPosition <= jsonListItemsDescription.length
	) ? jsonListItemsDescription[preferentPosition] : jsonListItemsDescription;

	return JSON.stringify(preferentItem)
}

export const parseJsonToText = (noFormedData:string, formed = true) => {
	let htmlOnJson: IJSONFromHTML = (formed) ?
		JSON.parse(noFormedData) : noFormedData;
	let htmlConverted = parseJsonStructureToText(htmlOnJson);
	return htmlConverted;
}

export const getFromEnvFile = (key:string):string => {
	key = `${environment.reactPrefixKey}${key}`;
	const value = process.env[key];
	return value ? value : "";
}

export const getCreditCardBrand = (number:string):string => {
    var visaPattern =  /^4[0-9]{6,}$/;
    var masterCardPattern =  /^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/;
    var americanExpressPattern =  /^3[47][0-9]{5,}$/;
    var dinersClubPattern =  /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/;
    var discoverPattern =  /^6(?:011|5[0-9]{2})[0-9]{3,}$/;
    var jcbPattern =  /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/;

    if (visaPattern.test(number)) {
      return "VISA";
    }
    if (masterCardPattern.test(number)) {
      return "MASTERCARD";
    }
    if (americanExpressPattern.test(number)) {
      return "AMERICAN EXPRESS";
    }
    if (dinersClubPattern.test(number)) {
      return "DINERS CLUB";
    }
    if (discoverPattern.test(number)) {
      return "DISCOVER";
    }
    if (jcbPattern.test(number)) {
      return "JCB";
    }
    return "UNKNOWN";
}

export function dateIncreaseYearsToDate(date:Date, years:number){
	return new Date(date.setFullYear(date.getFullYear() + years));
}

export function dateIncreaseMinutesToDate(date:Date, minutes:number){
	return new Date(date.setMinutes(date.getMinutes() + minutes));
}

export function validCardId(value:string) {
    let total = 0;
    if (value === '' || value === null) {
        return true;
    } else if (value.length !== 10) {
        return false;
    } else {
        const longcheck = value.length - 1;
        const checkDigit = parseInt(value.charAt(longcheck), 10);
        for (let i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                let aux = parseInt(value.charAt(i)) * 2;
                if (aux > 9) {
                    aux -= 9;
                }
                total += aux;
            } else {
                total += parseInt(value.charAt(i), 10);
            }
        }
        total = total % 10 ? 10 - (total % 10) : 0;

        return checkDigit === total ? true : false;
    }
}

export const capitalizeWord = (word:string) => {
	return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export const downloadHandler = (documentUrl:string, documentName:string) => {
	var FileSaver = require('file-saver');
	FileSaver.saveAs(documentUrl, documentName);
}


//#region Private Methods

function parseJsonStructureToText(node: IJSONFromHTML): string {
	var html: string = '';
	if (node.Children.length > 0) {
		node.Children.forEach(element => {
			html += `${parseJsonStructureToText(element)}`;
		});
	} else {
		if (isValidTag(node.Tag)) {
			html += `${node.Text} `;
		}
	}
	return html;
}

function isValidTag(tag: string | null): boolean {
	if (tag && tag !== 'html' && tag !== 'body' && tag !== 'head') {
		return true;
	}
	return false;
}

//#endregion


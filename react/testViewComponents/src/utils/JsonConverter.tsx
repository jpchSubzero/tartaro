import DOMPurify from 'dompurify';
import parse, { DOMNode, domToReact } from 'html-react-parser';
import { IJSONFromHTML } from '../interfaces/products/jsonFromHtml.interface';


/**
 * Constant to remmove element "P"
 */
 export const optionRemoveRootParrNode = {
	replace: ({ name, children }:{ name:string, children:DOMNode[] }) => {
		if (name === 'p') {
			return <>{ domToReact(children) }</>;
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
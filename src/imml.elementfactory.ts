import ImmlElement from './imml.element';

export default class ImmlElementFactory {
	static getDocumentElements() : ImmlElement[] {
		var elements = [];
		elements.push(new ImmlElement('Imml'));
		elements.push(new ImmlElement('Camera'));
		elements.push(new ImmlElement('Model'));
		elements.push(new ImmlElement('Primitive'));
		elements.push(new ImmlElement('Sound'));
		return elements;
	}
}
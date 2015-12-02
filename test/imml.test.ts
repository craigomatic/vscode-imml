// The module 'assert' provides assertion methods from node
import * as assert from 'assert';
import ImmlElementFactory from './../src/imml.elementfactory';

// Defines a Mocha test suite to group tests of similar kind together
suite("Imml Tests", () => {

	// test the factory returns at least one element
	test("Element factory returns at least one element", () => {
		assert.notEqual(ImmlElementFactory.getDocumentElements().length, 0);
	});
});
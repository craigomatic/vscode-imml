import * as vscode from 'vscode';
import ImmlElementFactory from './imml.elementfactory'

export default class ImmlItemProvider implements vscode.CompletionItemProvider	{
	public provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken)
		: vscode.CompletionItem[] | Thenable<vscode.CompletionItem[]> {
		
		var completionItems = [];
		
		var elements = ImmlElementFactory.getDocumentElements();
		
		elements.map((e) => {
			completionItems.push(e.name);
		});
		
		return completionItems;
	}
}
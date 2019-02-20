import * as vscode from 'vscode';
import { imageFetcher } from './pageFetcher';
import { imageExtractor } from './imageExtractor';
import { pageBuilder } from './pageBuilder';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "buongiorno-signora" is now active!');
	let disposable = vscode.commands.registerCommand('extension.bonjourMadame', () => {
		const panel = vscode.window.createWebviewPanel(
			'bonjourMadame',
			'Buongiorno signora',
			vscode.ViewColumn.One,
			{
				retainContextWhenHidden: true
			}
		);
		imageFetcher('http://bonjourmadame.fr')
			.then(page => {
			const todayImage = imageExtractor(page);
			panel.webview.html = pageBuilder(todayImage);
		})
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

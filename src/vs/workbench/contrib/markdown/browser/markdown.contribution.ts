/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import '../common/markdownColors.js';
import './media/markdown.css';

import { CommandsRegistry } from '../../../../platform/commands/common/commands.js';
import { IInstantiationService } from '../../../../platform/instantiation/common/instantiation.js';
import { MarkdownPreviewManager } from './markdownPreview.js';

CommandsRegistry.registerCommand('markdown.showPreview', accessor => {
	const instantiationService = accessor.get(IInstantiationService);
	const manager = instantiationService.createInstance(MarkdownPreviewManager);
	manager.showPreview();
});

CommandsRegistry.registerCommand('markdown.showPreviewToSide', accessor => {
	const instantiationService = accessor.get(IInstantiationService);
	const manager = instantiationService.createInstance(MarkdownPreviewManager);
	manager.showPreview(true);
});

CommandsRegistry.registerCommand('markdown.showSource', _accessor => {
	// TODO: implement show source
});

CommandsRegistry.registerCommand('markdown.togglePreview', accessor => {
	const instantiationService = accessor.get(IInstantiationService);
	const manager = instantiationService.createInstance(MarkdownPreviewManager);
	manager.toggle();
});

CommandsRegistry.registerCommand('markdown.preview.refresh', _accessor => {
	// TODO: implement refresh
});

CommandsRegistry.registerCommand('markdown.preview.toggleLock', _accessor => {
	// TODO: implement toggle lock
});

CommandsRegistry.registerCommand('markdown.showPreviewSecuritySelector', _accessor => {
	// TODO: implement security selector
});

CommandsRegistry.registerCommand('markdown.findAllFileReferences', _accessor => {
	// TODO: implement find references
});

CommandsRegistry.registerCommand('markdown.reopenAsPreview', _accessor => {
	// TODO: implement reopen as preview
});

CommandsRegistry.registerCommand('markdown.reopenAsSource', _accessor => {
	// TODO: implement reopen as source
});

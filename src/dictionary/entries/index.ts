/**
 * カテゴリ別辞書エントリのエクスポート
 * 各カテゴリから全てのエントリを集約
 */

import { gitOperationsEntries } from './git-operations';
import { branchEntries } from './branches';
import { pullRequestEntries } from './pull-requests';
import { issueEntries } from './issues';
import { repositoryEntries } from './repository';
import { navigationEntries } from './navigation';
import { usersOrgsEntries } from './users-orgs';
import { actionsWorkflowEntries } from './actions-workflow';
import { uiElementsEntries } from './ui-elements';

import type { DictionaryEntry } from '../schema';

// 個別エクスポート
export {
    gitOperationsEntries,
    branchEntries,
    pullRequestEntries,
    issueEntries,
    repositoryEntries,
    navigationEntries,
    usersOrgsEntries,
    actionsWorkflowEntries,
    uiElementsEntries,
};

// 全エントリを集約した配列
export const allEntries: DictionaryEntry[] = [
    ...gitOperationsEntries,
    ...branchEntries,
    ...pullRequestEntries,
    ...issueEntries,
    ...repositoryEntries,
    ...navigationEntries,
    ...usersOrgsEntries,
    ...actionsWorkflowEntries,
    ...uiElementsEntries,
];

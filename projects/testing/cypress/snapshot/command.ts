/// <reference types="cypress" />
// eslint-disable-next-line @taiga-ui/no-deep-imports
import {tuiIsObject, tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {Options} from 'cypress-image-snapshot';
import {matchImageSnapshotCommand} from 'cypress-image-snapshot/command';

import {tuiWaitAllImgInside} from '../commands/wait-all-img-inside.command';

declare module 'cypress-image-snapshot/command' {
    function matchImageSnapshotCommand(options: Options): (...args: unknown[]) => void;
}

interface TuiSnapshotCommandOptions {
    waitAllImages?: boolean;
}

declare global {
    namespace Cypress {
        interface Chainable {
            matchImageSnapshot(
                name: string,
                options?: Options & TuiSnapshotCommandOptions,
            ): void;
        }
    }
}

export function tuiAddMatchImageSnapshotCommand(
    options: Options & TuiSnapshotCommandOptions,
): void {
    const matchSnapshotFn = matchImageSnapshotCommand(options);

    Cypress.Commands.add(
        `matchImageSnapshot`,
        {prevSubject: [`optional`, `element`, `window`, `document`]},
        (
            prevSubject,
            nameOrOptions: string | (Options & TuiSnapshotCommandOptions),
            options?: Options & TuiSnapshotCommandOptions,
        ) => {
            const name = tuiIsString(nameOrOptions) ? nameOrOptions : undefined;
            const overloadedOptions = tuiIsObject(nameOrOptions)
                ? nameOrOptions
                : options;

            tuiWaitAllImgInside(prevSubject, overloadedOptions?.waitAllImages ?? true);

            matchSnapshotFn(prevSubject, makeScreenshotName(name), overloadedOptions);
        },
    );
}

function makeScreenshotName(name?: string): string {
    return (
        name ??
        Cypress.currentTest.titlePath
            .join(`-`)
            .replace(/\s|-/g, `.`)
            .replace(/['[\]`()]/g, ``)
            .toLowerCase()
    );
}

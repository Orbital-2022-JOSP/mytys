/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import type { Config } from '@jest/types';

import nextJest from 'next/jest';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig: Config.InitialOptions = {
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js',
        // '<rootDir>/test/setupFile.ts',
        'jest-canvas-mock'
    ],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@/components/(.*)$': '<rootDir>/components/$1',

        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    // Need jsdom for react testing
    testEnvironment: 'jest-environment-jsdom',

    // Need Node for api testing
    // testEnvironment: 'jest-environment-node',
    preset: 'ts-jest',
    // projects: [
    //     {
    //         displayName: "react",
    //         testEnvironment: 'jest-environment-jsdom',
    //         testMatch: ["<rootDir>/__tests__/fe/**/*.[jt]s?(x)"]
    //     },
    //     {
    //         displayName: "api",
    //         testEnvironment: 'jest-environment-node',
    //         testMatch: ["<rootDir>/__tests__/api/**/*.[jt]s?(x)"]
    //     }
    // ]
    // globalSetup: "<rootDir>/test/globalSetup.ts",
    // globalTeardown: "<rootDir>/test/globalTeardown.ts"
}

module.exports = createJestConfig(customJestConfig);
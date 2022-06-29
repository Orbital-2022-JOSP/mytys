/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */


const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@/components/(.*)$': '<rootDir>/components/$1',

        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest'
}

module.exports = createJestConfig(customJestConfig);
module.exports = {
    moduleFileExtensions: ['js'],
  
    testMatch: ['**/*.(test|spec).js'],
    globals: {
        'ts-jest': {
            babelConfig: true,
        },
    },
    coveragePathIgnorePatterns: ['/node_modules/'],
    
    testEnvironment: "node",
    coverageThreshold: {
        global: {
            lines: 70
        }
    },
    preset: "@shelf/jest-mongodb",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ]
};
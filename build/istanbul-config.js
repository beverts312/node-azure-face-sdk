'use strict';

var path = require('path');

var unitTestCoverageDirectory = path.resolve('./coverage/unit/');
var unitTestCoverageReportHtmlFile = path.resolve('./coverage/unit/index.html');

// These values determine the aggregate coverage thresholds that are applied across the entire project.
var unitTestGlobalStatementCoverageThreshold = 15;
var unitTestGlobalBranchCoverageThreshold = 0;
var unitTestGlobalLineCoverageThreshold = 15;
var unitTestGlobalFunctionCoverageThreshold = 5;

// These values determine the coverage thresholds that are applied to each file individually.
var unitTestLocalStatementCoverageThreshold = 15;
var unitTestLocalBranchCoverageThreshold = 0;
var unitTestLocalLineCoverageThreshold = 15;
var unitTestLocalFunctionCoverageThreshold = 5;

var includeUntested = true;
var reporters = ['html', 'lcov', 'cobertura', 'text', 'text-summary'];

module.exports = {
    unitTestGlobalThresholds: {
        statementCoverageThreshold: unitTestGlobalStatementCoverageThreshold,
        branchCoverageThreshold: unitTestGlobalBranchCoverageThreshold,
        lineCoverageThreshold: unitTestGlobalLineCoverageThreshold,
        functionCoverageThreshold: unitTestGlobalFunctionCoverageThreshold
    }, 
    unitTestLocalThresholds: {
        statementCoverageThreshold: unitTestLocalStatementCoverageThreshold,
        branchCoverageThreshold: unitTestLocalBranchCoverageThreshold,
        lineCoverageThreshold: unitTestLocalLineCoverageThreshold,
        functionCoverageThreshold: unitTestLocalFunctionCoverageThreshold
    },
    reporters: reporters,
    includeUntested: includeUntested,
    unitTestCoverageDirectory: unitTestCoverageDirectory,
    unitTestCoverageReportHtmlFile: unitTestCoverageReportHtmlFile
};
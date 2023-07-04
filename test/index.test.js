// SPDX-FileCopyrightText: 2023 Redradix - development@redradix.com
//
// SPDX-License-Identifier: MIT

const getDuplicateName = require('../src')

it('Build the correct name for a duplicate report when there are no existing reports.', () => {
  const name = 'Test Report'
  const duplicateString = 'Duplicate'
  const reports = []

  const result = getDuplicateName(reports, name, duplicateString)
  expect(result).toBe('Test Report Duplicate')
})

it('Build the correct name for a duplicate report when there are existing reports but no duplicates.', () => {
  const name = 'Test Report'
  const duplicateString = 'Duplicate'
  const reports = [{ name: 'Test Report' }, { name: 'Another Report' }]

  const result = getDuplicateName(reports, name, duplicateString)
  expect(result).toBe('Test Report Duplicate')
})

it('Build the correct name for a duplicate report when there are existing duplicates', () => {
  const name = 'Test Report'
  const duplicateString = 'Duplicate'
  const reports = [
    { name: 'Test Report' },
    { name: 'Test Report Duplicate' },
    { name: 'Test Report Duplicate (2)' },
  ]

  const result = getDuplicateName(reports, name, duplicateString)
  expect(result).toBe('Test Report Duplicate (3)')
})

it('Build the correct name when the input name contains a numbered duplicateString and there are existing numbered duplicates.', () => {
  const name = 'Test Report Duplicate (1)'
  const duplicateString = 'Duplicate'
  const reports = [
    { name: 'Test Report' },
    { name: 'Test Report Duplicate' },
    { name: 'Test Report Duplicate (1)' },
    { name: 'Test Report Duplicate (2)' },
    { name: 'Test Report Duplicate (3)' },
  ]

  const result = getDuplicateName(reports, name, duplicateString)
  expect(result).toBe('Test Report Duplicate (4)')
})

it('Build the correct name when the input name contains a duplicateString and there are existing numbered duplicates.', () => {
  const name = 'Test Report Duplicate'
  const duplicateString = 'Duplicate'
  const reports = [
    { name: 'Test Report' },
    { name: 'Test Report Duplicate' },
    { name: 'Test Report Duplicate (2)' },
    { name: 'Test Report Duplicate (3)' },
  ]

  const result = getDuplicateName(reports, name, duplicateString)
  expect(result).toBe('Test Report Duplicate (4)')
})

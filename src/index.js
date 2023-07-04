// SPDX-FileCopyrightText: 2023 Redradix - development@redradix.com
//
// SPDX-License-Identifier: MIT

/**
 * Returns the corresponding name when duplicating an element of a list of
 * elements. The result will be a string with the original name, the string
 * provided to identify a duplicate (e.g. "Copy") and, if duplicates already
 * exist, a number in brackets starting with 2. Example: "Element Copy (4)".
 * @param {Array} list - List of objects with at least a "name" field.
 * @param {string} name - Name of the element to be duplicated.
 * @param {string} duplicateString - Text that identifies a duplicate.
 * @return {string} The corresponding name for the new duplicated element.
 */
const getDuplicateName = (list, name, duplicateString) => {
  const originalName = name.includes(duplicateString)
    ? name.split(duplicateString)[0].trimEnd()
    : name

  const nameGroup = `(?<name>${originalName})`
  const optionalDuplicateStringGroup = `(?<duplicateString>\\s${duplicateString})?`
  const optionalNumberInParenthesesGroup =
    '(?<numberInParentheses>\\s\\([0-9]+\\))?'

  const nameRegex = new RegExp(
    `^${nameGroup}${optionalDuplicateStringGroup}${optionalNumberInParenthesesGroup}$`,
    'i',
  )

  let existDuplicates = false
  let highestDuplicateNumber = 1

  for (const element of list) {
    const match = element.name.match(nameRegex) ?? { groups: {} }

    if (match.groups.duplicateString !== undefined) {
      existDuplicates = true

      const { numberInParentheses } = match.groups

      const number =
        numberInParentheses !== undefined
          ? parseInt(
              numberInParentheses.trim().replace('(', '').replace(')', ''),
            )
          : 0

      if (number > highestDuplicateNumber) {
        highestDuplicateNumber = number
      }
    }
  }

  let duplicateName = `${originalName} ${duplicateString}`

  if (existDuplicates) {
    duplicateName += ` (${highestDuplicateNumber + 1})`
  }

  return duplicateName
}

module.exports = getDuplicateName

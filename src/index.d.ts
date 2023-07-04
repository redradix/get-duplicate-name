type ListElement = {
  name: string
}

declare const getDuplicateName: (
  list: ListElement[],
  name: string,
  duplicateString: string,
) => string

export default getDuplicateName

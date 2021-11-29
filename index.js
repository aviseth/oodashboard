/**
 * @param { string } id - The id of the select element
 * @returns { Array<string> }
 */
function getMultipleSelectValues(id) {
    let select = document.getElementById(id);
    
    let result = [];
    let options = select && select.options;

    options.forEach(element => {
        if (element.selected) {
            result.push(element.value);
        }
    });

    return result;
  }
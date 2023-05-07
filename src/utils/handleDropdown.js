/**
 * @param {function} watch watch in react-hook-form
 * @param {function} setValue setValue in react-hook-form
 * @returns {[(name: string, defaultValue: string) => string, (name: string, value: string) => string]}
 */

function handleDropdown(watch, setValue) {
  const getValueDropdown = (name, defaultValue = "") => {
    const dropdownValue = watch(name) || defaultValue;

    return dropdownValue;
  };
  const setValueDropdown = (name = "", value = "") => {
    setValue(name, value);
  };
  return [getValueDropdown, setValueDropdown];
}

export default handleDropdown;

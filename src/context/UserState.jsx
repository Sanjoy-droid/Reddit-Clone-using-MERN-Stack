import userContext from "./userContext";
const UserState = (props) => {
  const state = {
    name: "Sanjoy",
    class: "11b",
  };
  return (
    <userContext.Provider value={state}>{props.children}</userContext.Provider>
  );
};
export default UserState;

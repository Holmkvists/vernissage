// SAVE ADMIN AUTHORIZED TO SESSION STORAGE

export const saveAuthorizedToSessionStorage = (
  authorizedState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  sessionStorage.setItem("admin-authorized", JSON.stringify(true));
  return authorizedState(true);
};

// GET ADMIN AUTHORIZED FROM SESSION STORAGE

export const getAuthorizedFromSessionStorage = (
  authorizedState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let response = JSON.parse(
    sessionStorage.getItem("admin-authorized") || "false"
  );

  return authorizedState(response);
};

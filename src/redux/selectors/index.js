export const userStepCompleted = ({ userData }) => {
  return Object.keys(userData)
    .filter(key => key !== 'role')
    .every(key => userData[key]);
};

export const privacyStepCompleted = ({ privacyData }) => {
  return Object.keys(privacyData).every(key => privacyData[key] !== null);
};

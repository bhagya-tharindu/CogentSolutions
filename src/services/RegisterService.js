const registerUser = async (user) => {
  try {
    await fetch("http://localhost:3001/registeredUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default { registerUser };

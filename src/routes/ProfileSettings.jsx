import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "@/redux/api-slices/apiSlice";

const ProfileSettings = () => {
  const dispatch = useDispatch();
  // Fetch the current user details (assuming the useGetUserQuery hook is available)
  const currentUser = useSelector((state) => state.auth.user);

  // Local state for form fields initialized with current user details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [updateUser] = useUpdateUserMutation();

  // Effect to set the form fields with current user details when they are available
  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
      setEmail(currentUser.email);
      setPassword(currentUser.password);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there's any change in the form fields
    if (
      firstName !== currentUser.firstName ||
      lastName !== currentUser.lastName ||
      email !== currentUser.email ||
      password !== currentUser.password
    ) {
      updateUser({ firstName, lastName, email, password })
        .unwrap()
        .then((updatedUser) => {
          // Dispatch an action to update the user in the store, if necessary
          dispatch(updateUser(updatedUser));
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default ProfileSettings;

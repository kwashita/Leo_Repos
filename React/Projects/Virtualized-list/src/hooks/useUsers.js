import { useState, useEffect } from "react";
import { fetchUsers } from "../service/UserService";

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  const loadMoreItems = (startIndex, stopIndex) => {
    const newUsers = fetchUsers();
    setUsers([...users, ...newUsers]);
  };

  useEffect(() => {
    setUsers(fetchUsers());
  }, []);

  return { users, loadMoreItems };
};

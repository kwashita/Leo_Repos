import InfiniteScroll from "react-infinite-scroller";
import { fetchUsers } from "../service/UserService";
import { useState } from "react";
import UserInfo from "../components/UserInfo";

const InfiniteScrollerView = () => {
  const [users, setUsers] = useState([]);

  const loadMore = async () => {
    const newUsers = fetchUsers();
    // console.log(Array.isArray(users));
    setUsers([...users, ...newUsers]);
  };

  return (
    <>
      <InfiniteScroll initialLoad hasMore threshold={1000} loadMore={loadMore}>
        {users.map((item) => (
          <UserInfo key={item.email} user={item} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrollerView;

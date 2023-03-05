import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import UserInfo from "../components/UserInfo";
import "./WindowListView.css";
import { useUsers } from "../hooks/useUsers";

const Row = ({ data, index, style }) => {
  const user = data[index];
  return (
    <div style={style}>
      <UserInfo user={user} />
    </div>
  );
};

const isItemLoaded = (index) => false;

const WindowListView = () => {
  const { users, loadMoreItems } = useUsers();

  return (
    <div className="container">
      <AutoSizer>
        {({ width, height }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded}
            itemCount={200000}
            loadMoreItems={loadMoreItems}
            threshold={5}
          >
            {({ onItemsRendered, ref }) => (
              <List
                width={width}
                height={height}
                itemData={users}
                itemCount={users.length}
                //item's size prevented overlap
                itemSize={250}
                ref={ref}
                onItemsRendered={onItemsRendered}
              >
                {Row}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
};

export default WindowListView;

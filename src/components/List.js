import { useRecoilState, useRecoilValue } from "recoil";
import { listItems } from "../common/selectors";
import { listState, allState } from "../common/atoms";
import "./List.css";

const List = () => {
  const allItems = useRecoilValue(listItems);
  const [all, setAll] = useRecoilState(allState);
  const [, setList] = useRecoilState(listState);
  const check = (id) => {
    const updated = all.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    setList(updated);
    setAll(updated);
  };
  return (
    <div style={{ flexWrap: "wrap", display: "flex" }}>
      {allItems.map((item, index) =>
        !item.hide ? (
          <div onClick={() => check(item.id)} key={index} className="todo-item">
            {item.done && <div>completed</div>}
            <div className={!item.done ? "todo-card" : "todo-card-completed"}>
              <div className="todo-list"> {item.task}</div>
            </div>
          </div>
        ) : (
          <></>
        )
      )}

      {/*      
      {allItems.map((item) => (
        <div
          style={
            item.done
              ? { ...styles.items_common, ...styles.item_done }
              : { ...styles.items_common }
          }
          onClick={() => check(item.id)}
        >
          {item.task}
        </div>
        
      ))} */}
    </div>
  );
};
export default List;

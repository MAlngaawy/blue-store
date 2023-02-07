import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counter/counterSlice";
import { RootState } from "../store";
import { getUserFn } from "../store/user/userSlice";

type Props = {};

const Home = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const user = useSelector(getUserFn);
  console.log("user", user);

  return (
    <div className="h-full">
      <div>Home</div>
    </div>
  );
};

export default Home;

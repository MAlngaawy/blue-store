import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../counter/counterSlice";
import { RootState } from "../store";

type Props = {};

const Home = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="h-full">
      <div>Home</div>
    </div>
  );
};

export default Home;

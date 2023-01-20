import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../counter/counterSlice";
import { RootState } from "../store";

type Props = {};

const ReactApps = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="h-full">
      <div className="App flex flex-col gap-6 justify-center items-center">
        <div className="flex gap-2">
          <div
            onClick={() => dispatch(decrement())}
            className="counter p-1 text-xl bg-red-500 text-white rounded-sm cursor-pointer"
          >
            Decrement
          </div>
          <div
            onClick={() => dispatch(increment())}
            className="counter p-1 text-xl bg-blue-500 text-white rounded-sm cursor-pointer"
          >
            increment
          </div>
        </div>
        <div className="bg-green-600 p-4 font-bold text-white text-3xl rounded-sm">
          {count}
        </div>
      </div>
    </div>
  );
};

export default ReactApps;

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/counter/counterSlice";
import { RootState } from "../store";
import { getUserFn } from "../store/user/userSlice";

type Props = {};

const Home = (props: Props) => {
  const { user } = useSelector(getUserFn);

  return (
    <div className="h-full">
      {user ? (
        <div className="p-20 mx-auto my-10 bg-blue-400 text-4xl font-bold text-white">
          You Are A Member
        </div>
      ) : (
        <div className="p-20 mx-auto my-10 bg-gray-400 text-4xl font-bold text-white">
          You Are A Guiest
        </div>
      )}
    </div>
  );
};

export default Home;

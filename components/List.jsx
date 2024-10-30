import Link from "next/link";
const List = (props) => {
  return (
    <>
      <li>
        <Link
          href={`/#${props.list}`}
          className="text-lg py-2 px-3  hover:text-gray-500 lg:text-xl"
        >
          {props.list}
        </Link>
      </li>
    </>
  );
};

export default List;

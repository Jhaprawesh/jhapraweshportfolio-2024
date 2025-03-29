import { Breadcrumbs } from "@mantine/core";
import { RiArrowRightSFill } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

function BreadComponent() {
  const items = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
  ].map((item, index) => (
    <Link to={item.href} key={index}>
      {item.title}
    </Link>
  ));
  console.log(items);
  return (
    <Breadcrumbs
      classNames={{
        root: "breadcrumbs font-weight-bold mt-3 align-items-center tw-color-black",
        separator: "tw-text-indigo-500 tw-font-semibold tw-mx-0",
      }}
      separator={<RiArrowRightSFill className="fs-4" />}
      separatorMargin="md"
      mt="xs"
    >
      {items}
    </Breadcrumbs>
  );
}

export default BreadComponent;

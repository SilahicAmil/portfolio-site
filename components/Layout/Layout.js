import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className="bg-[#f2f6f7]">{props.children}</main>
    </>
  );
};

export default Layout;

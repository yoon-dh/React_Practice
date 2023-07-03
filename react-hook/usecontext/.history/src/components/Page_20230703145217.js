import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Page() {
  return (
    <div className="Page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default Page;

import { ReactNode } from "react";

const Container = ({
  bgColor,
  children,
}: {
  bgColor: string;
  children: ReactNode;
}) => {
  return (
    <section className="p-20" style={{ backgroundColor: bgColor }}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
};

export default Container;

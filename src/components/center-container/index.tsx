import { FC, ReactNode } from "react";
import classnames from "classnames";

export type CenterContainerProps = {
  children: ReactNode;
  className?: string;
};

export const CenterContainer: FC<CenterContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classnames(
        "px-[20px] md:px-[60px] mx-auto w-full lg:max-w-[1401px] pt-[50px] md:pt-[35px]",
        className
      )}
    >
      {children}
    </div>
  );
};

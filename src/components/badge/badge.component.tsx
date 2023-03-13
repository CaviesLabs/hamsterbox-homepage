import { FC } from "react";
import classnames from "classnames";

export const Badge: FC<{
  overlayBadge?: boolean | false;
  className?: string;
  message: string;
}> = (props) => {
  return (
    <div className={classnames("relative inline-block", props.className)}>
      {props.overlayBadge && (
        <div className="absolute rotate-[1.46deg] top-0 bottom-0 left-[-10px] right-0 bg-green300"></div>
      )}
      <div className="-rotate-[1.46deg] bg-purple px-[20px] py-[5px]">
        <p className="text-white uppercase bold-text rotate-2">
          {props.message}
        </p>
      </div>
    </div>
  );
};

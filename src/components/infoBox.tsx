import { type ReactNode } from "react";

type HintProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningProps = {
  mode: "warning";
  children: ReactNode;
  severity: "high" | "medium" | "low" | undefined;
};
type InfoBoxProps = HintProps | WarningProps;

const InfoBox = (props: InfoBoxProps) => {
  return (
    <>
      {props.mode === "hint" ? (
        <aside className="infobox infobox-hint">
          <p>{props.children}</p>
        </aside>
      ) : null}
      {props.mode === "warning" ? (
        <aside
          className={`"infobox infobox-warning " ${
            "warning--" + props.severity
          }`}
        >
          <h2>Warning</h2>
          <p>{props.children}</p>
        </aside>
      ) : null}
    </>
  );
};

export default InfoBox;

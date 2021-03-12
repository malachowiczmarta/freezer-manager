import React, { MouseEventHandler } from "react";
import { ReactComponent as DeleteIcon } from "../../assets/icon/delete.svg";
import styles from "./DeleteButton.module.scss";

type deleteBtnProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const DeleteButton = ({ onClick }: deleteBtnProps) => {
  return (
    <button className={styles.deleteBtn} onClick={onClick}>
      <DeleteIcon />
    </button>
  );
};

export default DeleteButton;

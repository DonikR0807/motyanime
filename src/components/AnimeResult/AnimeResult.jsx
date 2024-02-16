import React from "react";
import s from "./animeresult.module.css";
import Button from "../Button/Button";
import { buttonSizes } from "../../utils/buttonSizes";
import { buttonColors } from "../../utils/buttonColors";
import { Link } from "react-router-dom";
import isEmpty from "lodash.isempty";
import { ReactComponent as DeleteIcon } from "../../assets/images/circleXmark.svg";
import classNames from "classnames";

export default function AnimeResult({
  className = "",
  animeResult = {},
  isSaved = false,
  onClick = () => {
    return;
  },
  onDelete = () => {
    return;
  },
  ...props
}) {
  if (isEmpty(animeResult)) {
    return;
  }

  const { _id, names, status, genres, animeId, posters, image } = animeResult;

  return (
    <div className={classNames(s.root, className)} {...props}>
      <Link
        to={`/${isSaved ? animeId : _id}`}
        onClick={onClick}
        style={{
          textDecoration: "none",
        }}
      >
        <div className={s.resultContainer}>
          <img src={isSaved ? image : posters.original} alt={names?.ru} className={s.animePic} />
          <div className={s.infoContainer}>
            <p className={s.title}>{names?.ru}</p>
            <Button
              className={s.statusBtn}
              size={buttonSizes.s}
              color={buttonColors.grey}
            >
              {status?.string}
            </Button>
            <Button size={buttonSizes.s} color={buttonColors.grey}>
              {genres[0]}
            </Button>
          </div>
        </div>
      </Link>
      <button className={s.deleteBtn} onClick={onDelete}>
        <DeleteIcon></DeleteIcon>
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export function LinkBorderLineRouter({ href, content, smooth = false }) {
  return (
    smooth == false? <Link to={`${href}`} className='nav_A'>{content}<hr></hr> </Link>: <HashLink smooth to={`${href}`} className="nav_A">{content}</HashLink>
  )
}

export function LinkBorderLine({ href, content }) {
  return (
    <a href={`${href}`} className='nav_A'>{content}<hr></hr> </a>
  )
}

export function ContentCard({ imgPath = "", title = "", content = "", href = "", useInterFiles = false }) {
  const link = href != "" ? <Link to={href}></Link> : "";
  const imgurl = useInterFiles == false ? imgPath: process.env.PUBLIC_URL + imgPath;
  return (
    <article className='content-card'>
      <div className='card-text'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      {link}
      <img src={`${imgurl}`} alt={`${title}`} ></img>
    </article>
  )
}

export default "";
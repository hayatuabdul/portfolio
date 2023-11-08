import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import {
  FaLinkedin,
  FaSquareEnvelope,
  FaSquareGithub,
  FaSquarePen,
  FaSquareXTwitter,
} from 'react-icons/fa6';
import { FaAtom, FaHome, FaMedium } from 'react-icons/fa';

import profileImg from '../../images/profile.jpeg';

import akdereUlu from '../../images/MelikeSultan.jpg';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150 flex items-center justify-center ml-10',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-10',
  name: 'text-5xl text-black font-bold leading-tight hover:text-black',
  description: 'text-black',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link: 'inline-block py-2 font-semibold text-s text-gray-700 hover:text-black',
  tab: 'inline-block py-2 font-semibold text-s text-black',
};

const Header = ({ metadata = {} }) => {
  const twitter = get(metadata, 'author', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const musavver = 'https://www.musavver.com/author/talhayranci/';
  const mail = 'mailto:t.ayranci.1@research.gla.ac.uk';

  return (
    <div
      className={classes.wrapper}
      style={{
        marginBottom: 0,
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.9)), url(${akdereUlu})`,
        backgroundSize: 'cover', // Cover the entire view of the box
        backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list} style={{ marginTop: '0px' }}>
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                <FaSquareXTwitter size={'25'} />
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                <FaSquareGithub size={'25'} />
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                <FaLinkedin size={'25'} />
              </a>
            </li>
          )}
          <li className={classes.item}>
            <a className={classes.link} href={musavver}>
              <FaMedium size={'25'} />
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href={mail}>
              <FaSquareEnvelope size={'25'} />
            </a>
          </li>
        </ul>
        <ul className={classes.list} style={{ marginTop: '0px' }}>
          <li className={classes.item}>
            <a className={classes.link} href={musavver}>
              <Link className={classes.tab} to="/">
                Home
              </Link>
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href={musavver}>
              <Link className={classes.tab} to="/about">
                About
              </Link>
            </a>
          </li>
          <li className={classes.item}>
            <Link className={classes.tab} to="/projects">
              Projects
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.tab} to="/blog">
              Blog
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.tab} to="/aesthetics">
              Aesthetics
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
